package com.FacebookExperiment.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class URLController {

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
    String home() {
        return "index";
    }
	
}