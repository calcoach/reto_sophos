import React, { useState, useEffect } from "react";

const EditableTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E";

    fetch(
      "https://unit-trust-corporation-api.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/rol",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token
        }
      }
    ) // Reemplaza la URL con la URL de tu API
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (id) => {
    const updatedData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, isEditing: true };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleNameChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, name: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleAgeChange = (id, event) => {
    const updatedData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, createAt: event.target.value };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleSave = (id) => {
    const updatedData = tableData.map((item) => {
      if (item.id === id) {
        console.log(item.name);
        return { ...item, isEditing: false };
      }
      return item;
    });
    setTableData(updatedData);

    // Obtén los datos del item modificado
    const modifiedItem = updatedData.find((item) => item.id === id);
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqdWFuLnZpbGxhQGV4YW1wbGUuY29tIiwiaWF0IjoxNjg0ODQ4NDg1LCJzdWIiOiIkYXJnb24yaWQkdj0xOSRtPTEwMjQsdD0xLHA9MSQ0NTNFVUVPUHBGclYwQWQ2UXdpclJBJDNGVU10d3pGcDNmamdxTGhqVC9wcXk4a05vK0VMUTRWTFh5ck5jdFJwYnciLCJpc3MiOiJEZXZfbW9kZWxvX3JvbHMiLCJleHAiOjE2ODU0NTMyODV9.b6MbusjYOlsL1by9Jr8_6Y0w4ZLsfJqhYFcriJPO34E";

    // Realiza la solicitud POST a la API para guardar los cambios
    fetch(
      "https://unit-trust-corporation-api.kindmushroom-705dfbe6.centralus.azurecontainerapps.io/api/rol",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}` // Utiliza el token definido anteriormente
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
    <table className="editable-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>createAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.name}
                  onChange={(event) => handleNameChange(item.id, event)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.createAt}
                  onChange={(event) => handleAgeChange(item.id, event)}
                />
              ) : (
                item.createAt
              )}
            </td>
            <td>
              {item.isEditing ? (
                <button
                  className="save-button"
                  onClick={() => handleSave(item.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="edit-button"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
