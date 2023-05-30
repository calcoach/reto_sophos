package com.sophos.utc.api.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sophos.utc.api.entities.AlumnoCurso;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class AlumnoCursoService implements IAlumnoCursoService{

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<AlumnoCurso> getAllAlumnoCurso() {
		// TODO Auto-generated method stub
		String query = "FROM AlumnoCurso";
		System.out.println(entityManager.createQuery(query).toString());
		
		return entityManager.createQuery(query).getResultList();
		
	}


	@Override
	public AlumnoCurso createAlumnoCurso(AlumnoCurso alumnoCurso) {
		// TODO Auto-generated method stub
		return entityManager.merge(alumnoCurso);
	}

	@Override
	public AlumnoCurso findAlumnoCursoById(Long id) {
		// TODO Auto-generated method stub
		return entityManager.find(AlumnoCurso.class, id);
	}

	@Override
	public AlumnoCurso updateAlumnoCurso(AlumnoCurso alumnoCurso) {
		// TODO Auto-generated method stub
		if(entityManager.find(AlumnoCurso.class, alumnoCurso) != null)
			  return entityManager.merge(alumnoCurso);	
			
			else
				return null;
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		AlumnoCurso alumnoCurso = entityManager.find(AlumnoCurso.class, id);
		entityManager.remove(alumnoCurso);
	}
}
