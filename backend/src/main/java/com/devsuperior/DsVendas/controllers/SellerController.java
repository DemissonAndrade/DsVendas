package com.devsuperior.DsVendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.DsVendas.dto.SellerDTO;
import com.devsuperior.DsVendas.service.SellerService;

@RestController
@RequestMapping(value ="/sellers")
public class SellerController {
	
	@Autowired
	private SellerService service;
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> finAll() {
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}

}
