package com.example.config;

import com.example.service.users.UserService;
import com.example.service.users.UserServiceImpl;
import core.hosSein.core.util.excel.ExcelPOIHelper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.service.users.CustomUserDetailsService;

//@Lazy
@Eager
@Configuration
public class AppConfig {

    @Bean
    public ExcelPOIHelper excelPOIHelper() {
        return new ExcelPOIHelper();
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    public UserService userService(){
        return (UserService) new UserServiceImpl();
    }

    @Bean
    public CustomUserDetailsService customUserDetailsService(){
        return new CustomUserDetailsService();
    }


}


