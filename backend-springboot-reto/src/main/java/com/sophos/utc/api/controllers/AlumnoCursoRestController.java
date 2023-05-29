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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.utc.api.entities.Alumno;
import com.sophos.utc.api.entities.AlumnoCurso;
import com.sophos.utc.api.services.IAlumnoCursoService;
import com.sophos.utc.api.services.IAlumnoService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlumnoCursoRestController {

	@Autowired
	private IAlumnoCursoService alumnoCursoService;
	
	@GetMapping("/alumnocurso")
	public List<AlumnoCurso> getAllCustomers() {
		return alumnoCursoService.getAllAlumnoCurso();
	}
	
	@DeleteMapping("/alumnocurso/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteCustomer(@PathVariable Long id) {
		alumnoCursoService.delete(id);
	}
	
	@PostMapping(value="/alumnocurso")
	@ResponseStatus(value = HttpStatus.CREATED)
	public AlumnoCurso createCustomer(@RequestBody AlumnoCurso alumnoCurso) {
		
		return alumnoCursoService.createAlumnoCurso(alumnoCurso); 
	}

	@GetMapping(value="/alumnocurso/{id}")
	public AlumnoCurso finCustomerByID(@PathVariable Long id) {
		return alumnoCursoService.findAlumnoCursoById(id);
	}
	
	@PutMapping("alumnocurso")
	@ResponseStatus(value = HttpStatus.CREATED)
	public AlumnoCurso updateCustomer(@RequestBody AlumnoCurso alumnoCurso) {
		
		return alumnoCursoService.updateAlumnoCurso(alumnoCurso);
		
	}
}
