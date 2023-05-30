package com.sophos.utc.api.dao;

import org.springframework.data.repository.CrudRepository;
import com.sophos.utc.api.entities.Profesor;

public interface IProfesorDao extends CrudRepository<Profesor, Long> {

}
