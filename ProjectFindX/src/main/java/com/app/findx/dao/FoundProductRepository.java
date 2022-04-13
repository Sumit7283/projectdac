package com.app.findx.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.findx.entities.FoundProduct;

public interface FoundProductRepository extends JpaRepository<FoundProduct,Integer > {

	

	
	
}
