import React from 'react';

class AlumnoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumno: null,
      cursosMatriculados: [],
      asignaturasCursadas: []
    };
  }

  componentDidMount() {
    // Aquí deberías realizar una llamada a la API o acceder a tu fuente de datos para obtener la información del alumno, cursos matriculados y asignaturas cursadas utilizando el ID recibido como propiedad.
    // Ejemplo de llamada a una API utilizando fetch:
    fetch(`${process.env.REACT_APP_URL_API}/api/alumnos/${this.props.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          alumno: data,
          //cursosMatriculados: data.cursosMatriculados,
          //asignaturasCursadas: data.asignaturasCursadas
        });
      })
      .catch(error => {
        console.error('Error al obtener la información del alumno:', error);
      });
  }

  render() {
    const { alumno, cursosMatriculados, asignaturasCursadas } = this.state;

    if (!alumno) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <h2>Información del Alumno</h2>
        <p>Nombre: {alumno.nombre}</p>
        <p>Número de créditos inscritos: {alumno.creditosInscritos}</p>
        <p>Semestre que cursa: {alumno.semestre}</p>

        <h3>Cursos Matriculados</h3>
        <ul>
          {cursosMatriculados.map(curso => (
            <li key={curso.id}>{curso.nombre}</li>
          ))}
        </ul>

        <h3>Asignaturas Cursadas</h3>
        <ul>
          {asignaturasCursadas.map(asignatura => (
            <li key={asignatura.id}>{asignatura.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AlumnoInfo;
