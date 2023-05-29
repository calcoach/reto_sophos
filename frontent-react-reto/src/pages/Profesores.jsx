import React, { useState, useEffect } from "react";
import FormularioProfesor from "../components/Forms/CrearProfesor";

const Profesores = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
     
    fetch(
      `${process.env.REACT_APP_URL_API}/api/profesores`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + `${process.env.REACT_APP_TOKEN}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  
  const handleChildEvent = (data) => {
    // Maneja el evento recibido del componente hijo
    console.log("Evento recibido:", data);
    

  fetch(
    `${process.env.REACT_APP_URL_API}/api/profesores`,
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
    .then((data) => setTableData(data))
    .catch((error) => console.log(error));
   
    console.log("Actualizacion: ");
  };

  const handleDelete = (id) => {
    const updatedData = tableData.filter((item) => item.profesor_id !== id);
    setTableData(updatedData);

    fetch(
      `${process.env.REACT_APP_URL_API}/api/profesores/`+id,
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
    const updatedData = tableData.map((item) => {
      if (item.profesor_id === id) {
        return { ...item, isEditing: true };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleAñosExperiencia = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.profesor_id === id) {
        return { ...item, años_experiencia: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleNameChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.profesor_id === id) {
        return { ...item, firs_name: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleMaxTitleChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.profesor_id === id) {
        return { ...item, maximo_titulo: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleSave = (id) => {
    const updatedData = tableData.map((item) => {
      if (item.profesor_id === id) {
        console.log(item.firs_name);
        return { ...item, isEditing: false };
      }
      return item;
    });
    setTableData(updatedData);

    const modifiedItem = updatedData.find((item) => item.profesor_id === id);
    
    fetch(
      `${process.env.REACT_APP_URL_API}/api/profesores/`,
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

  return (
    <div>
      <FormularioProfesor onEvent={handleChildEvent}/>
      <br></br> 
      <table className="editable-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Maximo titulo</th>
          <th>Años de experiencia</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.profesor_id}>
            <td>{item.profesor_id}</td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.firs_name}
                  onChange={(event) => handleNameChange(item.profesor_id, event)}
                />
              ) : (
                item.firs_name
              )}
            </td>
            <td>{item.last_name}</td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.maximo_titulo}
                  onChange={(event) => handleMaxTitleChange(item.profesor_id, event)}
                />
              ) : (
                item.maximo_titulo
              )}
            </td>
            <td>{item.isEditing ? (
                <input
                  type="number"
                  value={item.años_experiencia}
                  onChange={(event) => handleAñosExperiencia(item.profesor_id, event)}
                />
              ) : (
                item.años_experiencia
              )}</td>
            <td>
              {item.isEditing ? (
                <button
                  className="save-button"
                  onClick={() => handleSave(item.profesor_id)}
                >
                  Save
                </button>
              ) : (
                <>
                  <button className="edit-button" onClick={() => handleEdit(item.profesor_id)}>
                    Edit
                  </button>
                  
                  <button className="delete-button" onClick={() => handleDelete(item.profesor_id)}>
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default Profesores;
