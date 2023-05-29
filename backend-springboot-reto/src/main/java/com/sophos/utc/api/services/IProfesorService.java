package com.sophos.utc.api.services;

import java.util.List;

import com.sophos.utc.api.dto.CustomerInvestmentsDTO;
import com.sophos.utc.api.dto.DemograficDTO;
import com.sophos.utc.api.dto.DemograficRangeDTO;
import com.sophos.utc.api.dto.GeograficDTO;
import com.sophos.utc.api.dto.LoginDTO;
import com.sophos.utc.api.dto.MyCustomersDTO;
import com.sophos.utc.api.entities.Profesor;

public interface IProfesorService {

	List<Profesor> getAllProfesor();

	void delete(Long id);

	Profesor createProfesor(Profesor profesor);
	
	Profesor checkCredentials(LoginDTO user);
	
	Profesor findById(Long id);
	
	Profesor updateProfesor(Profesor profesor);
	
	DemograficDTO getDemograficCustomers(Long id);
	
	List<GeograficDTO> getGeograficCustomers(Long id);
	
	List<MyCustomersDTO> getMyCustomers(Long id);
	
	List<CustomerInvestmentsDTO> getCustomerInvestments(Long id);
}
