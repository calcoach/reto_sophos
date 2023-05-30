package com.sophos.utc.api.services;

import java.util.List;

import com.sophos.utc.api.entities.Alumno;

public interface IAlumnoService {

	List<Alumno> getAllAlumno();

	void delete(Long id);

	Alumno createAlumno(Alumno user);
	
	Alumno findAlumnoById(Long id);
	
	Alumno updateAlumno(Alumno user);
}
