package com.sophos.utc.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.sophos.utc.api.config.Config;
/*import com.sophos.utc.api.dao.Role;
import com.sophos.utc.api.services.IRoleService;
import com.sophos.utc.api.services.RoleService;*/

@SpringBootApplication
public class UnitTrustCorporationApiApplication {
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(UnitTrustCorporationApiApplication.class, args);
		
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api").allowedOrigins("http://localhost");
			}
		};
	}
	
	
}
