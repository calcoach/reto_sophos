import React from 'react';
import { useState, useEffect } from 'react';
import FormularioAlumno from '../components/Forms/CrearAlumno';

function Alumnos() {
  
  const [tableData, setTableData] = useState([]);
  const [idShowAlumno, setidShowAlumno] = useState([]);
  const [viewAlumno, setViewAlumno] = useState([]);

  useEffect(() => {
    
    fetch(
      `${process.env.REACT_APP_URL_API}/api/alumnos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.log(error));
      
  }, []);

  const handleChildEvent = (data) => {
    // Maneja el evento recibido del componente hijo
    console.log("Evento recibido:", data);
    

  fetch(
    `${process.env.REACT_APP_URL_API}/api/alumnos`,
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
    const updatedData = tableData.filter((item) => item.alumno_id !== id);
    setTableData(updatedData);

    fetch(
      `${process.env.REACT_APP_URL_API}/api/alumnos`+id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
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
      if (item.alumno_id === id) {
        return { ...item, isEditing: true };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleFirstNameChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.alumno_id === id) {
        return { ...item, firs_name: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleLastNameChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.alumno_id === id) {
        return { ...item, last_name: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleFacultadChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.alumno_id === id) {
        return { ...item, facultad: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleCreditosInscritosChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.alumno_id === id) {
        return { ...item, creditos_inscritos: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleSave = (id) => {
    const updatedData = tableData.map((item) => {
      if (item.alumno_id === id) {
        console.log(item.first_name);
        return { ...item, isEditing: false };
      }
      return item;
    });
    setTableData(updatedData);

    // Obtén los datos del item modificado
    const modifiedItem = updatedData.find((item) => item.alumno_id === id);
    
    // Realiza la solicitud POST a la API para guardar los cambios
    fetch(
      `${process.env.REACT_APP_URL_API}/api/alumnos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` // Utiliza el token definido anteriormente
        },
        body: JSON.stringify(modifiedItem)
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Procesa la respuesta de la API si es necesario
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      
      <FormularioAlumno onEvent={handleChildEvent}/>
      <br></br> 
      <table className="editable-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Facultad</th>
          <th>Creditos Inscritos</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.alumno_id}>
            <td>{item.alumno_id}</td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.firs_name}
                  onChange={(event) => handleFirstNameChange(item.alumno_id, event)}
                />
              ) : (
                item.firs_name
              )}
            </td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.last_name}
                  onChange={(event) => handleLastNameChange(item.alumno_id, event)}
                />
              ) : (
                item.last_name
              )}
            </td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.facultad}
                  onChange={(event) => handleFacultadChange(item.alumno_id, event)}
                />
              ) : (
                item.facultad
              )}
            </td>
            <td>
              {item.isEditing ? (
                <input
                  type="number"
                  value={item.creditos_inscritos}
                  onChange={(event) =>
                    handleCreditosInscritosChange(item.alumno_id, event)
                  }
                />
              ) : (
                item.creditos_inscritos
              )}
            </td>
            <td>
              {item.isEditing ? (
                <button
                  className="save-button"
                  onClick={() => handleSave(item.alumno_id)}>
                  Save
                </button>
              ) : (
                <>
                  <button className="edit-button" onClick={() => handleEdit(item.alumno_id)}>
                    Edit
                  </button>
                  
                  <button className="delete-button" onClick={() => handleDelete(item.alumno_id)}>
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


export default Alumnos;