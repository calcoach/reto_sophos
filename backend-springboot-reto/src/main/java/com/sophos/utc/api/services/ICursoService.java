package com.sophos.utc.api.services;

import java.util.List;

import com.sophos.utc.api.entities.Curso;

public interface ICursoService {
    
	public List<Curso> findAll(); 
	
	public Curso findById(long id);
	
	public Curso save(Curso rol);
	
	public void delete(long id);
}
