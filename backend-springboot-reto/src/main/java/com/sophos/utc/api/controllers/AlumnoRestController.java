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
import com.sophos.utc.api.entities.Profesor;
import com.sophos.utc.api.models.Geographics;
import com.sophos.utc.api.services.IAlumnoService;
import com.sophos.utc.api.services.IProfesorService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AlumnoRestController {

	@Autowired
	private IAlumnoService alumnoService;
	
	@GetMapping("/alumnos")
	public List<Alumno> getAllAlumnos() {
		return alumnoService.getAllAlumno();
	}
	
	
	@DeleteMapping("/alumnos/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteAlumno(@PathVariable Long id) {
		alumnoService.delete(id);
	}
	
	@PostMapping("/alumnos")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Alumno createAlumno(@RequestBody Alumno alumno) {
		
		return alumnoService.createAlumno(alumno); 
	}

	@GetMapping(value="/alumnos/{id}")
	public Alumno finAlumnoByID(@PathVariable Long id) {
		return alumnoService.findAlumnoById(id);
	}
	
	@PutMapping(value="/alumnos")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Alumno updateAlumno(@RequestBody Alumno alumno) {
		
		return alumnoService.updateAlumno(alumno);
		
	}
}
