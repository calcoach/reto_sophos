package com.sophos.utc.api.entities;

import java.io.Serializable;
import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "profesor")
public class Profesor implements Serializable{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name="profesor_id")
    private long profesor_id;
	
	@Column(name="firs_name")
    private String firs_name;
	
	@Column(name="last_name")
    private String last_name;
	
	@Column(name="maximo_titulo")
    private String maximo_titulo;
	
    @Column(name="años_experiencia")
    private int años_experiencia;
    
    
	public long getProfesor_id() {
		return profesor_id;
	}



	public void setProfesor_id(long profesor_id) {
		this.profesor_id = profesor_id;
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



	public String getMaximo_titulo() {
		return maximo_titulo;
	}



	public void setMaximo_titulo(String maximo_titulo) {
		this.maximo_titulo = maximo_titulo;
	}



	public int getAños_experiencia() {
		return años_experiencia;
	}



	public void setAños_experiencia(int años_experiencia) {
		this.años_experiencia = años_experiencia;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	private static final long serialVersionUID = 1L;
}