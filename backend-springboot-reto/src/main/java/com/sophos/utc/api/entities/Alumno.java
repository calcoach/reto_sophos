package com.sophos.utc.api.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "alumno")
public class Alumno implements Serializable{

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name="alumno_id")
    private long alumno_id;
	
	@Column(name="firs_name")
    private String firs_name;
	
	@Column(name="last_name")
    private String last_name;
    
    @Column(name="facultad")
    private String facultad;
    
    @Column(name="creditos_inscritos")
    private int creditos_inscritos;
    

	public long getAlumno_id() {
		return alumno_id;
	}



	public void setAlumno_id(long alumno_id) {
		this.alumno_id = alumno_id;
	}



	public String getFirs_name() {
		return firs_name;
	}



	public void setFirs_name(String firs_name) {
		this.firs_name = firs_name;
	}



	public String getLast_name() {
		return last_name;
	}



	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}



	public String getFacultad() {
		return facultad;
	}



	public void setFacultad(String facultad) {
		this.facultad = facultad;
	}



	public int getCreditos_inscritos() {
		return creditos_inscritos;
	}



	public void setCreditos_inscritos(int creditos_inscritos) {
		this.creditos_inscritos = creditos_inscritos;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	private static final long serialVersionUID = 1L;

}