package com.app.findx.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.findx.dto.Userdto;
import com.app.findx.entities.FoundProduct;
import com.app.findx.services.FoundProductService;

import antlr.collections.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")

public class FoundProductController {
	@Autowired
	private FoundProductService FoundProductService;

	@PostMapping("/add")
	public FoundProduct saveFoundProduct(@RequestBody FoundProduct product) {

		return FoundProductService.addNewFoundProduct(product);
	}

	@GetMapping("/getproduct")
	public java.util.List<FoundProduct> getAllProducts() {
		return FoundProductService.getAllFoundProduct();

	}


}
