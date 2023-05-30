package com.sophos.utc.api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "alumnoCurso")
public class AlumnoCurso {

	@Id
	private long id;
	
	@Column(name="user_id")
	private long user_id;
	
	@Column(name="curso_id")
	private long curso_id;
	
	@Column(name="alumno_id")
	private long alumno_id;


	

	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public long getUser_id() {
		return user_id;
	}




	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}




	public long getCurso_id() {
		return curso_id;
	}




	public void setCurso_id(long curso_id) {
		this.curso_id = curso_id;
	}




	public long getAlumno_id() {
		return alumno_id;
	}




	public void setAlumno_id(long alumno_id) {
		this.alumno_id = alumno_id;
	}




	public static long getSerialversionuid() {
		return serialVersionUID;
	}




	private static final long serialVersionUID = 1L;


}
