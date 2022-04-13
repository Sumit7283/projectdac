package com.app.findx.dto;

import org.apache.coyote.http11.Http11AprProtocol;
import org.springframework.http.HttpStatus;

public class StatusResponse {
	private HttpStatus status;
	private String message;
	
	
	public StatusResponse(HttpStatus status, String message) {
		super();
		this.status = status;
		this.message = message;
	}
	
	public StatusResponse() {
		super();
		
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "StatusResponse [status=" + status + ", message=" + message + "]";
	}

	


	


	
	
}
