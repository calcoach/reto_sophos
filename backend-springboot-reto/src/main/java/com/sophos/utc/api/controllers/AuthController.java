package com.sophos.utc.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sophos.utc.api.dto.LoginDTO;
import com.sophos.utc.api.entities.Profesor;
import com.sophos.utc.api.security.JWTUtil;
import com.sophos.utc.api.services.IProfesorService;

@CrossOrigin(origins = {"*"})
@RestController
public class AuthController {

	@Autowired
	private IProfesorService profesorService;

	@Autowired
	private JWTUtil jwtUtil;

	/*@RequestMapping(value = "api/login", method = RequestMethod.POST)
	public String login(@RequestBody LoginDTO userDTO) {

		Profesor LoggedUser = profesorService.checkCredentials(userDTO);
		if (LoggedUser != null) {
			String tokenJWT = jwtUtil.create(LoggedUser.getEmail(),LoggedUser.getPassword());
			return tokenJWT;}
		return "authentication failure ";
	}*/
}
