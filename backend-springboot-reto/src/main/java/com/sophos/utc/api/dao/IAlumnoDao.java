package com.sophos.utc.api.dao;

import org.springframework.data.repository.CrudRepository;

import com.sophos.utc.api.entities.Alumno;
import com.sophos.utc.api.entities.Profesor;

public interface IAlumnoDao extends CrudRepository<Alumno, Long> {

}
