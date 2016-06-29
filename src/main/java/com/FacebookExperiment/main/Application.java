package com.FacebookExperiment.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
@SpringBootApplication
@EnableAutoConfiguration
@Configuration
@Order(6)
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
