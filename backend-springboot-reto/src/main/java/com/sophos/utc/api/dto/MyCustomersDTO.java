package com.sophos.utc.api.dto;

public class MyCustomersDTO {

	private String name;
	private String sector;
	private String total_Investments;
	private String revenue;
	private String status;
	
	public MyCustomersDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MyCustomersDTO(String name, String sector, String total_Investments, String revenue, String status) {
		super();
		this.name = name;
		this.sector = sector;
		this.total_Investments = total_Investments;
		this.revenue = revenue;
		this.status = status;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getTotal_Investments() {
		return total_Investments;
	}
	public void setTotal_Investments(String total_Investments) {
		this.total_Investments = total_Investments;
	}
	public String getRevenue() {
		return revenue;
	}
	public void setRevenue(String revenue) {
		this.revenue = revenue;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
