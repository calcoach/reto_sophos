package com.sophos.utc.api.services;

import java.util.List;
import java.math.BigDecimal;
import java.util.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;

import jakarta.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sophos.utc.api.dao.*;
import com.sophos.utc.api.dto.CustomerInvestmentsDTO;
import com.sophos.utc.api.dto.DemograficDTO;
import com.sophos.utc.api.dto.DemograficRangeDTO;
import com.sophos.utc.api.dto.GeograficDTO;
import com.sophos.utc.api.dto.LoginDTO;
import com.sophos.utc.api.dto.MyCustomersDTO;
import com.sophos.utc.api.entities.Profesor;
import com.sophos.utc.api.repository.CustomersRepository;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.PersistenceContext;

@Repository
@Transactional
public class ProfesorService implements IProfesorService {

	@PersistenceContext
	EntityManager entityManager;

	@Autowired
	private IProfesorDao profesorDao;

	@Autowired
	@Qualifier("customersRepository")
	private CustomersRepository customersRepository;

	@Override
	public List<Profesor> getAllProfesor() {
		// TODO Auto-generated method stub
		return (List<Profesor>) profesorDao.findAll();
	}

	@Override
	public void delete(Long id) {
		Profesor profesor = entityManager.find(Profesor.class, id);
		profesorDao.delete(profesor);
	}

	@Override
	public Profesor createProfesor(Profesor profesor) {
		// TODO Auto-generated method stub
		
		Profesor userR = profesorDao.save(profesor);
		//this.createViewUserDemograficRange(userR.getUser_id());

		return userR;
	}

	@Override
	public Profesor checkCredentials(LoginDTO user) {
		// TODO Auto-generated method stub
		String query = "FROM Profesor WHERE email =:email";
		List<Profesor> list = entityManager.createQuery(query).setParameter("email", user.getEmail()).getResultList();

		if (list.isEmpty()) {
			return null;
		}

		String passwordHashed = list.get(0).getFirs_name();

		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		if (argon2.verify(passwordHashed, user.getPassword().getBytes())) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public Profesor findById(Long id) {
		// TODO Auto-generated method stub
		return profesorDao.findById(id).orElse(null);
	}

	@Override
	public Profesor updateProfesor(Profesor profesor) {
		// TODO Auto-generated method stub

		if (findById(profesor.getProfesor_id()) != null) {

		
			return profesorDao.save(profesor);
		}

		else
			return null;

	}

	@Override
	public DemograficDTO getDemograficCustomers(Long id) {
		// TODO Auto-generated method stub

		DemograficDTO list2 = queryUserDemograficRange(id);

		return list2;
	}
	
	@Override
	public List<CustomerInvestmentsDTO> getCustomerInvestments(Long id) {
		
		List<CustomerInvestmentsDTO> list2 = queryInvestment(id);
		
		return list2;
	}
	
	@Override
	public List<GeograficDTO> getGeograficCustomers(Long id) {
		// TODO Auto-generated method stub

		List<GeograficDTO> list2 = this.queryGeografic(id);

		return list2;
	}

	@Override
	public List<MyCustomersDTO> getMyCustomers(Long id) {
		// TODO Auto-generated method stub

		List<MyCustomersDTO> list2 = this.queryMyCustomers(id);

		return list2;
	}

	public void createViewUserDemograficRange(long id) {
		String query = "CREATE VIEW consultarangeagegender" + String.valueOf(id) + " AS\r\n"
				+ "SELECT CASE          \r\n"
				+ "      WHEN YEAR(CURRENT_DATE) - YEAR(c.birthdate) between 13 and 24 THEN '13-25 Years'     \r\n"
				+ "      WHEN YEAR(CURRENT_DATE) - YEAR(c.birthdate) between 25 and 34 THEN '25-34 Years'\r\n"
				+ "      WHEN YEAR(CURRENT_DATE) - YEAR(c.birthdate) between 35 and 44 THEN '35-44 Years'\r\n"
				+ "      WHEN YEAR(CURRENT_DATE) - YEAR(c.birthdate) between 45 and 54 THEN '45-54 Years'\r\n"
				+ "	  WHEN YEAR(CURRENT_DATE) - YEAR(c.birthdate) >=55 THEN \"55 +Years\"\r\n"
				+ "      END AS rango,        \r\n"
				+ "      COUNT(*) AS cantidad, max(c.income)max_income, min(c.income) min_income, c.gender, sum(c.income) total\r\n"
				+ "FROM customer_users cu \r\n" + "join customer c on cu.customer_id = c.customer_id  \r\n"
				+ " WHERE cu.user_id = ? \r\n" + "GROUP BY rango, c.gender;";

		entityManager.createNativeQuery(query).setParameter(1, id).executeUpdate();

	}
	
	Calendar fechaActual = Calendar.getInstance();
	String year = Integer.toString(fechaActual.get(Calendar.YEAR));
	String Month = Integer.toString((fechaActual.get(Calendar.MONTH)+1));
	public List<CustomerInvestmentsDTO> queryInvestment(long id){
		
		String query = "	SELECT cs.investment_type, YEAR(cs.date_investment) as año,month(cs.date_investment) as mes, SUM(cs.income) as total \r\n"
				+ "    FROM (SELECT ci.* FROM customer_users cu \r\n"
				+ "			JOIN customer_investments ci ON ci.customer_id = cu.customer_id \r\n"
				+ "			WHERE user_id = "+id+") as cs\r\n"
				+ "	WHERE YEAR(cs.date_investment) ="+year+" AND MONTH(cs.date_investment)="+Month+"\r\n"
				+ "    GROUP BY cs.investment_type, YEAR(cs.date_investment), MONTH(cs.date_investment)\r\n"
				+ "	ORDER BY año desc;";
		
		
		
		Iterator iterator = entityManager.createNativeQuery(query)
				.getResultList().iterator();
		
		List<CustomerInvestmentsDTO> list = new ArrayList();
		
	    double totalSum = 0;

	    while (iterator.hasNext()) {
	        Object[] values = (Object[]) iterator.next();
	        double investmentAmount = Double.parseDouble(values[3].toString());
	        totalSum += investmentAmount;
	        list.add(new CustomerInvestmentsDTO(
	            values[1].toString(),//year
	            values[2].toString(),//month
	            values[3].toString(),//investment
	            values[0].toString()//type
	        ));
	    }

	    list.add(new CustomerInvestmentsDTO(year,Month,String.valueOf(totalSum),"total" ));

	    return list;
	}
	
	
	
	public List<GeograficDTO> queryGeografic(long id){
		String query = "SELECT c.type_residence, c.income \r\n"
				+ "FROM (\r\n"
				+ "SELECT ci.customer_id customer_id, sum(ci.income) TotalInvestment, sum(ci.revenue) TotalRevenue\r\n"
				+ "     FROM customer_users cu \r\n"
				+ "     join customer_investments ci on cu.customer_id = ci.customer_id \r\n"
				+ "	 WHERE cu.user_id = " + String.valueOf(id) + " \r\n" + "     GROUP BY ci.customer_id\r\n"
				+ ") cusinv\r\n" + "JOIN customer c on cusinv.customer_id = c.customer_id;";

		Iterator iterator = entityManager.createNativeQuery(query).getResultList().iterator();

		List<GeograficDTO> list = new ArrayList();

		while (iterator.hasNext()) {
			Object[] values = (Object[]) iterator.next();

			list.add(new GeograficDTO(values[0].toString(), values[1].toString()));
		}
		return list;
	}

	public DemograficDTO queryUserDemograficRange(long id) {
		String query = "SELECT t1.rango, max(t1.max_income) max_income, min(t1.min_income) min_income, sum(t1.total) total," + "  CASE "
				+ "        WHEN SUM(CASE WHEN t1.gender = 'female' THEN 1 ELSE 0 END) > "
				+ "        SUM(CASE WHEN t1.gender = 'male' THEN 1 ELSE 0 END) THEN 'female' ELSE 'male'"
				+ "    END AS genero_mas_repetido," + "    SUM(t1.cantidad) AS cantidad"
				+ " FROM consultarangeagegender" + String.valueOf(id) + " t1" + " GROUP BY t1.rango;";

		Iterator iterator = entityManager.createNativeQuery(query).getResultList().iterator();

		List<DemograficRangeDTO> list = new ArrayList();
		BigDecimal total = BigDecimal.ZERO;

		while (iterator.hasNext()) {
			Object[] values = (Object[]) iterator.next();
			
			total = total.add(new BigDecimal(values[3].toString())); 

			list.add(new DemograficRangeDTO(values[0].toString(), values[4].toString(),
					values[3].toString() + "-" + values[2].toString()));
		}
		
		DemograficDTO demDTO = new DemograficDTO();
		demDTO.setTotal(total);
		demDTO.setDemograficRanges(list);

		return demDTO;

	}

	public List<MyCustomersDTO> queryMyCustomers(long id) {

		String query = "SELECT c.firs_name, c.last_name, c.sector_customer, c.status_customer, cusinv.*\r\n"
				+ "FROM (\r\n"
				+ "SELECT ci.customer_id customer_id, sum(ci.income) TotalInvestment, sum(ci.revenue) TotalRevenue\r\n"
				+ "     FROM customer_users cu \r\n"
				+ "     join customer_investments ci on cu.customer_id = ci.customer_id \r\n"
				+ "	 WHERE cu.user_id = " + String.valueOf(id) + " \r\n" + "     GROUP BY ci.customer_id\r\n"
				+ ") cusinv\r\n" + "JOIN customer c on cusinv.customer_id = c.customer_id";

		Iterator iterator = entityManager.createNativeQuery(query).getResultList().iterator();

		List<MyCustomersDTO> list = new ArrayList();

		while (iterator.hasNext()) {
			Object[] values = (Object[]) iterator.next();
			MyCustomersDTO customer = new MyCustomersDTO();
			customer.setName(values[0].toString());
			customer.setSector((String.valueOf(values[2]).equals("1")) ? "Salaried" : "Self Employed");
			customer.setTotal_Investments(values[5].toString());
			customer.setRevenue(values[6].toString());
			customer.setStatus((values[3].toString().equals("1")) ? "Active" : "Inactive");

			list.add(customer);
		}

		return list;

	}

}
