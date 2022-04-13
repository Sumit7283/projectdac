package com.app.findx.entities;

//import java.sql.Blob;
import java.util.Date;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Table;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@javax.persistence.Table(name="product")
public class FoundProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String productName;
	private String lostLocation;
	private String catagory;
	private String lostDate;
	private int userPostId;
	private String Url;

	
	
	public FoundProduct(int id, String productName, String lostLocation, String catagory, String lostDate,
			int userPostId, String url) {
		super();
		this.id = id;
		this.productName = productName;
		this.lostLocation = lostLocation;
		this.catagory = catagory;
		this.lostDate = lostDate;
		this.userPostId = userPostId;
		Url = url;
	}

	public FoundProduct() {
		super();
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getLostLocation() {
		return lostLocation;
	}

	public void setLostLocation(String lostLocation) {
		this.lostLocation = lostLocation;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public String getLostDate() {
		return lostDate;
	}

	public void setLostDate(String lostDate) {
		this.lostDate = lostDate;
	}

	public int getUserPostId() {
		return userPostId;
	}

	public void setUserPostId(int userPostId) {
		this.userPostId = userPostId;
	}

	public String getUrl() {
		return Url;
	}

	public void setUrl(String url) {
		Url = url;
	}

	@Override
	public String toString() {
		return "FoundProduct [id=" + id + ", productName=" + productName + ", lostLocation=" + lostLocation
				+ ", catagory=" + catagory + ", lostDate=" + lostDate + ", userPostId=" + userPostId + ", Url=" + Url
				+ "]";
	}
	
	
	
	
}
