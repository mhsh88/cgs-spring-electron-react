package com.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

//    @RequestMapping(value = "/")
//    public String index() {
//        return "index.html";
//    }
    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("index");
    }

}