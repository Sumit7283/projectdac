package com.app.findx.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.findx.dao.UserRepository;
import com.app.findx.entities.User;

@Service
@Transactional
public class UserServiceimpl {
	@Autowired
	private UserRepository userAction;

	public User registerNewUser(User newUser) {
		return userAction.save(newUser);
	}

	public User findByEmailAndPassword(String email, String Password) {
		return userAction.findByEmailAndPassword(email, Password);

	}

	public User findByEmail(String email) {
		return userAction.findByEmail(email);

	}

	public Integer updatePasswordByid(String password , int id) {
		return userAction.updatePasswordById(password, id);
	}
	
	
	
}
