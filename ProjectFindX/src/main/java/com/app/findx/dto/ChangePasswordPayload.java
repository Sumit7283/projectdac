package com.app.findx.dto;

public class ChangePasswordPayload {

	private String newPassword;
	private String email;

	public ChangePasswordPayload(String newPassword, String email) {
		super();
		this.newPassword = newPassword;
		this.email = email;
	}

	public ChangePasswordPayload() {
		super();

	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	
}
