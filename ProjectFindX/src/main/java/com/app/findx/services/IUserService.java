//package com.app.findx.services;
//
//import javax.transaction.Transactional;
//
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//
//import com.app.findx.entities.User;
//
//public interface IUserService {
////new user registration
//User registerNewUser( User newUser);	
////Checking user exist or not for login
//User findByEmailAndPassword(String email, String Password);
////  change passwprd
//User findByEmail(String email);
//@Modifying
//@Transactional
//@Query("UPDATE User SET password = :password WHERE id = :id")
//User updatePasswordById(String password, int id );
//
//
//}
