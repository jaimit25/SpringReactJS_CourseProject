package com.springapi.server.model;


public class loginData {
	public String email,password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public loginData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public loginData(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
}
