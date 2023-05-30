package com.sophos.utc.api.dto;

public class GeograficDTO {

	private String typeResidence;
	private String value;
	
	public GeograficDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GeograficDTO(String typeResidence, String value) {
		super();
		this.typeResidence = typeResidence;
		this.value = value;
	}
	public String getTypeResidence() {
		return typeResidence;
	}
	public void setTypeResidence(String typeResidence) {
		this.typeResidence = typeResidence;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
