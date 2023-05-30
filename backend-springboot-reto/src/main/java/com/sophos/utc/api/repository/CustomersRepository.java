package com.sophos.utc.api.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sophos.utc.api.entities.Alumno;

@Repository("customersRepository")
public interface CustomersRepository extends JpaRepository<Alumno, Serializable>{

	//@Query("SELECT* FROM Alumno c WHERE YEAR(CURRENT_DATE) - YEAR(c.birthdate) > :edad" )
    //List<Alumno> buscarentre(@Param("edad") int edad);
}