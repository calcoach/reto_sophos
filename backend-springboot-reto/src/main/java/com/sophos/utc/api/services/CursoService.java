package com.sophos.utc.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sophos.utc.api.dao.ICursoDao;
import com.sophos.utc.api.entities.Curso;

@Service
public class CursoService implements ICursoService{

	@Autowired 
	private ICursoDao cursoDao;
	
	@Override
	@Transactional(readOnly = true)	
	
	public List<Curso> findAll() {
		return (List<Curso>) cursoDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)	
	public Curso findById(long id) {		
		return cursoDao.findById(id).orElse(null);
	}

	@Override
	@Transactional	
	public Curso save(Curso curso) {
		return cursoDao.save(curso);
	}

	@Override
	@Transactional	
	public void delete(long id) {
		cursoDao.deleteById(id);
	}
}
