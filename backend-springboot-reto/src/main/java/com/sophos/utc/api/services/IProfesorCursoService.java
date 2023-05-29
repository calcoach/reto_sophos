package com.sophos.utc.api.services;

import java.util.List;

import com.sophos.utc.api.entities.ProfesorCurso;
import com.sophos.utc.api.entities.Profesor;

public interface IProfesorCursoService {

	List<ProfesorCurso> getAllProfesorCurso();

	void delete(Long id);

	ProfesorCurso createProfesorCurso(ProfesorCurso profesorCurso);
	
	ProfesorCurso findById(Long id);
	
	ProfesorCurso updateRegistryProfesorCurso(ProfesorCurso profesorCurso);
}
