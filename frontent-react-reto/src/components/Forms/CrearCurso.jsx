import React, { useState } from "react";
import "./formularioalumno.css"; 

const FormularioCurso = (props) => {
  const [curso_id, setId] = useState("");
  const [nombre_curso, setFirstName] = useState("");
  const [nombre_prerequisito, setLastName] = useState("");
  const [creditos, setFacultad] = useState("");
  const [cupos, setCreditosInscritos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos a la API o hacer lo que necesites con ellos
    const formData = {
        curso_id,
        nombre_curso,
        nombre_prerequisito,
        creditos,
        cupos
      };

      console.log(formData);

  
    // Realiza la solicitud POST a la API para guardar los cambios

    fetch(`${process.env.REACT_APP_URL_API}/api/cursos`, {
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
      <p align="center" className="title-form"> Crear Curso</p>
      <div className="form-group">
        <label className="form-label">Nombre curso:</label>
        <input
          className="form-input"
          type="text"
          value={nombre_curso}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Nombre Prerequisito:</label>
        <input
          className="form-input"
          type="text"
          value={nombre_prerequisito}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Creditos:</label>
        <input
          className="form-input"
          type="number"
          value={creditos}
          onChange={(e) => setFacultad(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Cupos:</label>
        <input
          className="form-input"
          type="number"
          value={cupos}
          onChange={(e) => setCreditosInscritos(e.target.value)}
        />
      </div>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default FormularioCurso;
