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

    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E";

    // Realiza la solicitud POST a la API para guardar los cambios

    fetch("http://localhost:8080/api/alumnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
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
      <p1 align="center" className="title-form"> Crear Alumno</p1>
      <div className="form-group">
        <label className="form-label">First Name:</label>
        <input
          className="form-input"
          type="text"
          value={firs_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Last Name:</label>
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
