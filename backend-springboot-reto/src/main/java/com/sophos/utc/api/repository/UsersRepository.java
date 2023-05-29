package com.sophos.utc.api.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sophos.utc.api.entities.Profesor;

@Repository("UsersRepository")
public interface UsersRepository extends JpaRepository <Profesor, Serializable>{

	
	
}
