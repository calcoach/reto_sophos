package com.sophos.utc.api.dto;

import java.math.BigDecimal;
import java.util.List;

public class DemograficDTO {

	BigDecimal Total;
	List<DemograficRangeDTO> demograficRanges;
	
	public BigDecimal getTotal() {
		return Total;
	}
	public void setTotal(BigDecimal total) {
		Total = total;
	}
	public List<DemograficRangeDTO> getDemograficRanges() {
		return demograficRanges;
	}
	public void setDemograficRanges(List<DemograficRangeDTO> demograficRanges) {
		this.demograficRanges = demograficRanges;
	}
	
}
