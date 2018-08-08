package com.example;

import core.hosSein.core.model.BaseEntity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages={"com.*", "core.*"})//{"models","controllers", "com.payAm.core.ebean"})
@EnableJpaAuditing
@PropertySource("classpath:application.properties")
@ComponentScan(basePackages = {"com","core"}, basePackageClasses = {com.example.daos.users.UserDao.class})
@EntityScan(basePackages ={"com.*","controllers.*","models.*","repositories.*","service.*","core.hosSein.core.model.*","daos.*","config"},basePackageClasses = BaseEntity.class)
@EnableJpaRepositories(basePackages = {"com.*","core.*"}, basePackageClasses = {org.springframework.data.jpa.repository.support.QueryDslJpaRepository.class, com.example.daos.users.UserDao.class}/*, entityManagerFactoryRef="emf"*/)
public class CGSApplication {
    public static void main (String[] args){

        SpringApplication.run(CGSApplication.class, args);
    }

}





