import React, { useState } from "react";
import "./formularioalumno.css"; 

const FormularioProfesor = (props) => {
  const [id, setId] = useState("");
  const [firs_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [maximo_titulo, setMax_title] = useState("");
  const [años_experiencia, setAños_experiencia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos a la API o hacer lo que necesites con ellos
    const formData = {
        id,
        firs_name,
        last_name,
        maximo_titulo,
        años_experiencia
      };

      console.log(formData);

    // Realiza la solicitud POST a la API para guardar los cambios

    fetch(`${process.env.REACT_APP_URL_API}/api/profesores`, {
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
    setMax_title("");
    setAños_experiencia("");
    props.onEvent("Datos enviados desde el componente hijo");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <p align="center" className="title-form"> Crear Profesor</p>
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
        <label className="form-label">Maximo titulo:</label>
        <input
          className="form-input"
          type="text"
          value={maximo_titulo}
          onChange={(e) => setMax_title(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Años de Experiencia:</label>
        <input
          className="form-input"
          type="number"
          value={años_experiencia}
          onChange={(e) => setAños_experiencia(e.target.value)}
        />
      </div>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default FormularioProfesor;
