import React, { useState, useEffect } from "react";
import FormularioAlumno from "../components/Forms/CrearAlumno";

const Profesores = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnJvZHJpZ3VlekBleGFtcGxlLmNvbSIsImlhdCI6MTY4NTIxMzYwNywic3ViIjoiJGFyZ29uMmlkJHY9MTkkbT0xMDI0LHQ9MSxwPTEkcWgrbkFUbHNiemNGcEJTMTRGOWl6QSRVOXIxcHQxdmtSYXordkR2YUFxUk5LNkplQ21mSERkbHRhT0NLK2huSDVrIiwiaXNzIjoiRGV2X21vZGVsb19yb2xzIiwiZXhwIjoxNjg1ODE4NDA3fQ.nmXmSbMxYdNwi6yWEpHrdGMF7SWNZ972B-TVNAeIILo";

    fetch(
      "https://backendretosophos.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/profesores",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
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

  const handleDelete = (id) => {
    const updatedData = tableData.filter((item) => item.profesor_id !== id);
    setTableData(updatedData);

    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E";

    fetch(
      'https://backendretosophos.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/profesores/'+id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
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
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnJvZHJpZ3VlekBleGFtcGxlLmNvbSIsImlhdCI6MTY4NTIxMzYwNywic3ViIjoiJGFyZ29uMmlkJHY9MTkkbT0xMDI0LHQ9MSxwPTEkcWgrbkFUbHNiemNGcEJTMTRGOWl6QSRVOXIxcHQxdmtSYXordkR2YUFxUk5LNkplQ21mSERkbHRhT0NLK2huSDVrIiwiaXNzIjoiRGV2X21vZGVsb19yb2xzIiwiZXhwIjoxNjg1ODE4NDA3fQ.nmXmSbMxYdNwi6yWEpHrdGMF7SWNZ972B-TVNAeIILo";

    fetch(
      "https://backendretosophos.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/profesores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
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
      <table className="editable-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Max Title</th>
          <th>Experience Years</th>
          <th>Actions</th>
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
