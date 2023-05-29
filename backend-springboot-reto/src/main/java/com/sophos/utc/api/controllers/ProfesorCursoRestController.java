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

import com.sophos.utc.api.entities.ProfesorCurso;
import com.sophos.utc.api.services.IProfesorCursoService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProfesorCursoRestController {

	@Autowired
	private IProfesorCursoService profesorCursoService;
	
	@GetMapping("/profesorcurso")
	public List<ProfesorCurso> getAllCustomers() {
		return profesorCursoService.getAllProfesorCurso();
	}
	
	@DeleteMapping("/profesorcurso/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteProfesorCurso(@PathVariable Long id) {
		profesorCursoService.delete(id);
	}
	
	@PostMapping(value="/profesorcurso")
	@ResponseStatus(value = HttpStatus.CREATED)
	public ProfesorCurso createProfesorCurso(@RequestBody ProfesorCurso profesorCurso) {
		
		return profesorCursoService.createProfesorCurso(profesorCurso); 
	}

	@GetMapping(value="/profesorcurso/{id}")
	public ProfesorCurso findProfesorCursoByID(@PathVariable Long id) {
		return profesorCursoService.findById(id);
	}
	
	@PutMapping("/profesorcurso")
	@ResponseStatus(value = HttpStatus.CREATED)
	public ProfesorCurso updateProfesorCurso(@RequestBody ProfesorCurso alumnoCurso) {
		
		return profesorCursoService.updateRegistryProfesorCurso(alumnoCurso);
		
	}
}
