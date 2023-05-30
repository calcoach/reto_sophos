package com.sophos.utc.api.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HomeRestController {

	@GetMapping("/home")
	public List<String> index() {

		List<String> listaCadenas = new ArrayList<>();

		listaCadenas.add("Hola");
		listaCadenas.add("Mundo");
		listaCadenas.add("en");
		listaCadenas.add("spring boot 3.0.2");
		listaCadenas.add("esto es una prueba");
		listaCadenas.add("esto es una prueba2");

		return listaCadenas;
	}
	
	@GetMapping("/")
	public String home() {

		return "redirect:/documentacion/";
	}
}