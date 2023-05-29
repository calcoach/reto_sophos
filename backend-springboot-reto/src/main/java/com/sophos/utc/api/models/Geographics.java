package com.sophos.utc.api.models;

public class Geographics {

	private String ageRange;
	private String gender;  
	private String incomeRange;
	
	public Geographics() {
		super();
	}
	
	public Geographics(String ageRange, String gender, String incomeRange) {
		super();
		this.ageRange = ageRange;
		this.gender = gender;
		this.incomeRange = incomeRange;
	}

	public String getAgeRange() {
		return ageRange;
	}

	public void setAgeRange(String ageRange) {
		this.ageRange = ageRange;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getIncomeRange() {
		return incomeRange;
	}

	public void setIncomeRange(String incomeRange) {
		this.incomeRange = incomeRange;
	}
}
