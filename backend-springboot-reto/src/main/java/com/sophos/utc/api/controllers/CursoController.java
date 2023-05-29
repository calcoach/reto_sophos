package com.sophos.utc.api.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.utc.api.entities.Curso;
import com.sophos.utc.api.services.ICursoService;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api")
public class CursoController {
	
	@Autowired
	private ICursoService cursoService;
	
	@GetMapping("/cursos")
	public List<Curso> index(){
		return cursoService.findAll();		
	}
	
	@GetMapping("/cursos/{id}")	
	public Curso show(@PathVariable long id) {
		return cursoService.findById(id);
	}
	
	@PostMapping("/cursos")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Curso create(@RequestBody Curso curso) {		
		return cursoService.save(curso);
	}
	
	@PutMapping("/cursos/{id}")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Curso update(@PathVariable long id) {
		
		Curso curso = cursoService.findById(id);		
		curso.setNombre_curso(curso.getNombre_curso());
		
		return cursoService.save(curso);
	}
	
	@DeleteMapping("/cursos/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void delete( @PathVariable long id) {

		cursoService.delete(id);
	}
}
