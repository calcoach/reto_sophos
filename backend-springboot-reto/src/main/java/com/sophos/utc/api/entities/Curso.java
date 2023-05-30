package com.sophos.utc.api.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "curso")
public class Curso {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name="curso_id")
    private long curso_id;
	
	@Column(name="nombre_curso")
	private String nombre_curso;
	
	@Column(name="nombre_prerequisito")
	private String nombre_prerequisito;
	
	@Column(name="creditos")
	private int creditos;
	
	@Column(name="cupos")
	private int cupos;
	
	
	public long getCurso_id() {
		return curso_id;
	}



	public void setCurso_id(long curso_id) {
		this.curso_id = curso_id;
	}



	public String getNombre_curso() {
		return nombre_curso;
	}



	public void setNombre_curso(String nombre_curso) {
		this.nombre_curso = nombre_curso;
	}



	public String getNombre_prerequisito() {
		return nombre_prerequisito;
	}



	public void setNombre_prerequisito(String nombre_prerequisito) {
		this.nombre_prerequisito = nombre_prerequisito;
	}



	public int getCreditos() {
		return creditos;
	}



	public void setCreditos(int creditos) {
		this.creditos = creditos;
	}



	public int getCupos() {
		return cupos;
	}



	public void setCupos(int cupos) {
		this.cupos = cupos;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	private static final long serialVersionUID = 1L;

}
