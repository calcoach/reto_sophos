import React from 'react';
import { useState, useEffect } from 'react';
import FormularioCurso from '../components/Forms/CrearCurso';

function Cursos() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  

  const handleChildEvent = (data) => {
    // Maneja el evento recibido del componente hijo
    console.log("Evento recibido:", data);
    

  fetch(
    `${process.env.REACT_APP_URL_API}/api/cursos`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN
      }
    }
  )
    .then((response) => response.json())
    .then((data) => setArticulos(data))
    .catch((error) => console.log(error));
   
    console.log("Actualizacion: ");
  };

  const handleDelete = (id) => {
    const updatedData = articulos.filter((item) => item.curso_id !== id);
    setArticulos(updatedData);

    fetch(
      `${process.env.REACT_APP_URL_API}/api/cursos/`+id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    const updatedData = articulos.map((art) => {
      if (art.curso_id === id) {
        return { ...art, isEditing: true };
      }
      console.log("Aqui");
      return art;
    });
    setArticulos(updatedData);
  };

  const handleSave = (id) => {
    const updatedData = articulos.map((item) => {
      if (item.curso_id === id) {
        console.log(item.firs_name);
        return { ...item, isEditing: false };
      }
      return item;
    });
    setArticulos(updatedData);

    const modifiedItem = updatedData.find((item) => item.curso_id === id);
    
    fetch(
      `${process.env.REACT_APP_URL_API}/api/cursos/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        body: JSON.stringify(modifiedItem)
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleQuotesChanged = (id, event) => {
    const updatedData = articulos.map((art) => {
      if (art.curso_id === id) {
        return { ...art, cupos: event.target.value };
      }
      return art;
    });
    setArticulos(updatedData);
  };
  
  const handleNameCourseChanged = (id, event) => {
    const updatedData = articulos.map((art) => {
      if (art.curso_id === id) {
        return { ...art, nombre_curso: event.target.value };
      }
      return art;
    });
    setArticulos(updatedData);
  };

  const handleNamePrerequisiteChanged = (id, event) => {
    const updatedData = articulos.map((art) => {
      if (art.curso_id === id) {
        return { ...art, nombre_prerequisito: event.target.value };
      }
      return art;
    });
    setArticulos(updatedData);
  };

  const handleCreditsChanged = (id, event) => {
    const updatedData = articulos.map((art) => {
      if (art.curso_id === id) {
        return { ...art, creditos: event.target.value };
      }
      return art;
    });
    setArticulos(updatedData);
  };

  function mostrarTabla() {
    return (

      <div style={{ paddingLeft: '10px' }}>
        <FormularioCurso onEvent={handleChildEvent}/>
        <p>Lista de cursos</p>
        <br></br>
        <table className="editable-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre </th>
              <th>Nombre Prerequisito</th>
              <th>Creditos </th>
              <th>Cupos</th>
              <th>Opciones</th>
              
            </tr>
          </thead>
          <tbody>
            {articulos.map((art) => {
              return (
                <tr key={art.curso_id}>
                  <td>{art.curso_id}</td>

                  <td>{art.isEditing? (
                    <input
                    type = "text"
                    value = {art.nombre_curso}
                    onChange = {(event) => handleNameCourseChanged(art.curso_id, event)} />
                  ) : (art.nombre_curso)}</td>
                  <td> {art.isEditing? (
                    <input
                    type = "text"
                    value = {art.nombre_prerequisito}
                    onChange = {(event) => handleNamePrerequisiteChanged(art.curso_id, event)}
                    />
                  ) : (art.nombre_prerequisito)
                  }</td>
                  <td>{art.isEditing? (
                    <input
                    type = "number"
                    value = {art.creditos}
                    onChange = {(event) => handleCreditsChanged(art.curso_id, event)}
                    />
                  ) : (art.creditos)
                  }</td>
                  <td>{art.isEditing? (
                    <input
                    type = "number"
                    value = {art.cupos}
                    onChange = {(event) => handleQuotesChanged(art.curso_id, event)}
                    />
                  ) : (art.cupos)}</td>
                  <td> 
                    {art.isEditing ? (
                    <button
                     className="save-button" onClick={() => handleSave(art.curso_id)}
                    >
                     Save
                    </button>
                    ) : (
                       <>
                    <button className="edit-button" onClick={() => handleEdit(art.curso_id)}>
                      Edit
                    </button>
                  
                    <button className="delete-button" onClick={() => handleDelete(art.curso_id)}>
                      Delete
                    </button>
                 </>
              )}
            </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <p>Buscar curso</p>
        <input type="text" name='buscar_input'></input>
      </div>
    );
  }

  useEffect(() => {

    fetch(`${process.env.REACT_APP_URL_API}/api/cursos`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN
      }
  })
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
        setRecuperado(true)
      })
  }, [])

  if (recuperado)
    return mostrarTabla()
  else
    return (<div>recuperando datos...</div>)
}

export default Cursos;