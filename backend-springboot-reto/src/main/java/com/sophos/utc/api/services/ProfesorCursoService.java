package com.sophos.utc.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sophos.utc.api.dao.IProfesorCursoDao;
import com.sophos.utc.api.entities.ProfesorCurso;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class ProfesorCursoService implements IProfesorCursoService {

	@PersistenceContext
	EntityManager entityManager;
	
	@Autowired
	IProfesorCursoDao customerUserDao;

	@Override
	public List<ProfesorCurso> getAllProfesorCurso() {
		// TODO Auto-generated method stub

		return (List<ProfesorCurso>) customerUserDao.findAll();
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub

		ProfesorCurso profesorCurso = entityManager.find(ProfesorCurso.class, id);
		customerUserDao.delete(profesorCurso);
	}

	@Override
	public ProfesorCurso createProfesorCurso(ProfesorCurso profesorCurso) {
		// TODO Auto-generated method stub
		return customerUserDao.save(profesorCurso);
	}

	@Override
	public ProfesorCurso findById(Long id) {
		// TODO Auto-generated method stub
		return customerUserDao.findById(id).orElse(null);
	}

	@Override
	public ProfesorCurso updateRegistryProfesorCurso(ProfesorCurso profesorCurso) {
		// TODO Auto-generated method stub
		if(findById(profesorCurso.getId()) != null)
			  return customerUserDao.save(profesorCurso);	
			
			else
				return null;
	}

}
