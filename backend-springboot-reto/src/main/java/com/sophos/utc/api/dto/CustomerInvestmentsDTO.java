package com.sophos.utc.api.dto;

public class CustomerInvestmentsDTO {

    private String year;
    private String month;
    private String investment;
	private String investmentType;
	
	public CustomerInvestmentsDTO() {
		super();
	}

	

	public CustomerInvestmentsDTO(String year, String month, String investment, String investmentType) {
		super();
		this.year = year;
		this.month = month;
		this.investment = investment;
		this.investmentType = investmentType;
	}



	public String getYear() {
		return year;
	}



	public void setYear(String year) {
		this.year = year;
	}



	public String getMonth() {
		return month;
	}



	public void setMonth(String month) {
		this.month = month;
	}



	public String getInvestment() {
		return investment;
	}

	public void setInvestment(String investment) {
		this.investment = investment;
	}

	public String getInvestmentType() {
		return investmentType;
	}

	public void setInvestmentType(String investmentType) {
		this.investmentType = investmentType;
	}
	
	
}
