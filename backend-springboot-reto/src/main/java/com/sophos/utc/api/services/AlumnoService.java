package com.sophos.utc.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sophos.utc.api.dao.IAlumnoDao;
import com.sophos.utc.api.entities.Alumno;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class AlumnoService implements IAlumnoService{

	@PersistenceContext
	EntityManager entityManager;
	
	@Autowired
	private IAlumnoDao alumnoDao;

	@Override
	public List<Alumno> getAllAlumno() {
		// TODO Auto-generated method stub
		return (List<Alumno>) alumnoDao.findAll();
		
	}

	@Override
	public void delete(Long id) {
		Alumno alumno = entityManager.find(Alumno.class, id);
		alumnoDao.delete(alumno);
	}

	@Override
	public Alumno createAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		
		return alumnoDao.save(alumno);
	}

	

	@Override
	public Alumno findAlumnoById(Long id) {
		// TODO Auto-generated method stub
		return alumnoDao.findById(id).orElse(null);
	}

	@Override
	public Alumno updateAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
   
		if(alumnoDao.findById(alumno.getAlumno_id()) != null)
		  return alumnoDao.save(alumno);	
		
		else
			return null;
	    
	}
}
