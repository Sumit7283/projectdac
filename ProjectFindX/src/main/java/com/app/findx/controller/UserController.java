package com.app.findx.controller;

import java.security.Principal;
import java.security.PublicKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.findx.dto.ChangePasswordPayload;
import com.app.findx.dto.StatusResponse;
import com.app.findx.dto.UserLoginRequest;
import com.app.findx.entities.User;
import com.app.findx.services.UserServiceimpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserServiceimpl userService;

	@PostMapping("/register")
	public User newUser(@RequestBody User newuser) {

		return userService.registerNewUser(newuser);

	}

	@PostMapping("/login")
	public ResponseEntity<User> userLoginRequest(@RequestBody UserLoginRequest u) {

		User user = userService.findByEmailAndPassword(u.getEmail(), u.getPassword());

		if (user == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		} else {
			System.out.println(user);
			return new ResponseEntity(user, HttpStatus.OK);

		}

	}

	@PutMapping("/changepassword")
	public ResponseEntity<User> changePassword(@RequestBody ChangePasswordPayload pass) {

		User u = userService.findByEmail(pass.getEmail());
		System.out.println(u);
		u.setPassword(pass.getNewPassword());
		userService.updatePasswordByid(u.getPassword(), u.getId());
		return new ResponseEntity(u, HttpStatus.OK);

	}

}
