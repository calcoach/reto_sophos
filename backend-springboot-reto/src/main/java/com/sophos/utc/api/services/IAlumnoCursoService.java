package com.sophos.utc.api.services;

import java.util.List;

import com.sophos.utc.api.entities.Alumno;
import com.sophos.utc.api.entities.AlumnoCurso;

public interface IAlumnoCursoService {

	List<AlumnoCurso> getAllAlumnoCurso();

	void delete(Long id);

	AlumnoCurso createAlumnoCurso(AlumnoCurso alumnoCurso);
	
	AlumnoCurso findAlumnoCursoById(Long id);
	
	AlumnoCurso updateAlumnoCurso(AlumnoCurso alumnoCurso);
}
