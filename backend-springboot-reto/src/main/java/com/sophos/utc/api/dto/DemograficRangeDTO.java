package com.sophos.utc.api.dto;

public class DemograficRangeDTO {

	private String rangeAge;
	private String gender;
	private String rangeincome;

	
	public DemograficRangeDTO(String rangeAge, String gender, String rangeincome) {
		super();
		this.rangeAge = rangeAge;
		this.gender = gender;
		this.rangeincome = rangeincome;
	}


	public String getRangeAge() {
		return rangeAge;
	}

	public void setRangeAge(String rangeAge) {
		this.rangeAge = rangeAge;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRangeincome() {
		return rangeincome;
	}

	public void setRangeincome(String rangeincome) {
		this.rangeincome = rangeincome;
	}
	
	
	
	
}
