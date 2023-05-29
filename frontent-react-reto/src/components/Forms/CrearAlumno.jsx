import React, { useState } from "react";
import "./formularioalumno.css"; 

const Formulario = (props) => {
  const [id, setId] = useState("");
  const [firs_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [facultad, setFacultad] = useState("");
  const [creditos_inscritos, setCreditosInscritos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos a la API o hacer lo que necesites con ellos
    const formData = {
        id,
        firs_name,
        last_name,
        facultad,
        creditos_inscritos
      };

      console.log(formData);

    // Realiza la solicitud POST a la API para guardar los cambios

    fetch(`${process.env.REACT_APP_URL_API}/api/alumnos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((data) => {
          // Aquí puedes procesar la respuesta de la API si es necesario
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });

    // Resetea los campos del formulario
    setFirstName("");
    setLastName("");
    setFacultad("");
    setCreditosInscritos("");
    props.onEvent("Datos enviados desde el componente hijo");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <p align="center" className="title-form"> Crear Alumno</p>
      <div className="form-group">
        <label className="form-label">Nombre:</label>
        <input
          className="form-input"
          type="text"
          value={firs_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Apellido:</label>
        <input
          className="form-input"
          type="text"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Facultad:</label>
        <input
          className="form-input"
          type="text"
          value={facultad}
          onChange={(e) => setFacultad(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Creditos Inscritos:</label>
        <input
          className="form-input"
          type="number"
          value={creditos_inscritos}
          onChange={(e) => setCreditosInscritos(e.target.value)}
        />
      </div>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default Formulario;
