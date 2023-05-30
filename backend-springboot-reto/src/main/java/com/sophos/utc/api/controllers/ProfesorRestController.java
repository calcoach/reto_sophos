package com.sophos.utc.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.utc.api.dto.CustomerInvestmentsDTO;
import com.sophos.utc.api.dto.DemograficDTO;
import com.sophos.utc.api.dto.DemograficRangeDTO;
import com.sophos.utc.api.dto.GeograficDTO;
import com.sophos.utc.api.dto.MyCustomersDTO;
import com.sophos.utc.api.entities.Alumno;
import com.sophos.utc.api.entities.ProfesorCurso;
import com.sophos.utc.api.entities.Profesor;
import com.sophos.utc.api.security.JWTUtil;
import com.sophos.utc.api.services.IProfesorCursoService;
import com.sophos.utc.api.services.IProfesorService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProfesorRestController {

	@Autowired
	private IProfesorService profesorService;

	@Autowired
	private IProfesorCursoService profesorCursoService;

	@Autowired
	private JWTUtil jwtutil;

	@GetMapping("/profesores/{id}/demografic")
	public DemograficDTO getDemograficDTO(@RequestHeader(value = "Authorization") String token, @PathVariable Long id) {

		if (!validateToken(token)) {
			return null;
		} else {
			return profesorService.getDemograficCustomers(id);
		}

	}

	@RequestMapping(value = "/profesores/{id}/investment", method = RequestMethod.GET)
	public List<CustomerInvestmentsDTO> getCustomerInvestmentsDTO(@RequestHeader(value = "Authorization") String token,
			@PathVariable Long id) {
		if (!validateToken(token)) {
			return null;
		} else {

			return profesorService.getCustomerInvestments(id);
		}

	}

	@RequestMapping(value = "/profesores/{id}/geografic", method = RequestMethod.GET)
	public List<GeograficDTO> getGeograficDTO(@RequestHeader(value = "Authorization") String token,
			@PathVariable Long id) {

		if (!validateToken(token)) {
			return null;
		} else {
			return profesorService.getGeograficCustomers(id);
		}

	}

	@GetMapping("/profesores/{id}/mycustomers")
	public List<MyCustomersDTO> getMyCustomersDTO(@RequestHeader(value = "Authorization") String token,
			@PathVariable Long id) {

		if (!validateToken(token)) {
			return null;
		} else {
			return profesorService.getMyCustomers(id);
		}
	}

	private boolean validateToken(String token) {

		System.out.print(token + " TOKEN RECIBIDO DE POSTMAN");
		String[] split = token.split(" ");

		String userid = null;
		if (split.length >= 2) {
			userid = jwtutil.getKey(split[1]);
		} else {
			userid = jwtutil.getKey(token);
		}

		return userid != null;
	}

	@GetMapping("/profesores")
	public List<Profesor> getAllProfesor(@RequestHeader(value = "Authorization", required = true) String token) {

		if (!validateToken(token)) {
			return null;
		}

		return profesorService.getAllProfesor();
	}

	@DeleteMapping("/profesores/{id}")
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void eliminar(
			@PathVariable Long id) {
		profesorService.delete(id);
	}

	@PostMapping("/profesores")
	@ResponseStatus(value = HttpStatus.CREATED)
	public Profesor createProfesor(@RequestBody Profesor profesor) {

		return profesorService.createProfesor(profesor);
	}

	@GetMapping(value = "/profesores/{id}")
	public Profesor findProfesorByID(@PathVariable Long id) {
		
		return profesorService.findById(id);
	}

	@PutMapping("/profesores")
	public Profesor updateProfesor(@RequestBody @ModelAttribute("profesor") Profesor profesor) {

		return profesorService.updateProfesor(profesor);

	}

}
