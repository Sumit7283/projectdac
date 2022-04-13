package com.app.findx.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.findx.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByEmailAndPassword(String email, String password);

	public User findByEmail(String email);
	
	@Modifying
	@Transactional
	@Query("UPDATE User SET password = :password WHERE id = :id")
	public Integer updatePasswordById(String password, int id );

	
	
}
