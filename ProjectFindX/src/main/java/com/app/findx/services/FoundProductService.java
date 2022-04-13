package com.app.findx.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.findx.dao.FoundProductRepository;
import com.app.findx.entities.FoundProduct;

@Service
@Transactional
public class FoundProductService {
@Autowired
	private FoundProductRepository FoundProductRepo;
	
	
	// add new found produuct
	public FoundProduct addNewFoundProduct( FoundProduct product) {
		return FoundProductRepo.save(product);
		
	}
	
	public List<FoundProduct> getAllFoundProduct() {
		return FoundProductRepo.findAll();
	}
	
	
	
}
