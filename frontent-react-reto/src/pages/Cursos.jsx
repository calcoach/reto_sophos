import React from 'react';
import { useState, useEffect } from 'react';

function Cursos() {
  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)


  function mostrarTabla() {
    return (
      <div style={{ paddingLeft: '10px' }}>
        <p>Lista de cursos</p>
        <br></br>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre </th>
              <th>Nombre Prerequisito</th>
              <th>Creditos </th>
              <th>Cupos</th>
              
            </tr>
          </thead>
          <tbody>
            {articulos.map(art => {
              return (
                <tr key={art.alumno_id}>
                  <td>{art.curso_id}</td>
                  <td>{art.nombre_curso}</td>
                  <td>{art.nombre_prerequisito}</td>
                  <td>{art.creditos}</td>
                  <td>{art.cupos}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
        <br></br>
        <p>Buscar Profesor</p>
        <input type="text" name='buscar_input'></input>
      </div>
    );
  }

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E';

    fetch('https://backendretosophos.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/cursos', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
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