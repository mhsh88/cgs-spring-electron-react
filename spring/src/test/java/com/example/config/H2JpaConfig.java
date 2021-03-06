package com.example.config;


import com.example.daos.station.BurnersDao;
import com.example.daos.station.HeatersDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;


//@Configuration
//@EnableJpaRepositories(basePackages = {"com.example.repositories","com.example.daos"})
//@PropertySource("persistence-generic-entity.properties")
//@EnableTransactionManagement
public class H2JpaConfig {

    @Autowired
    private Environment env;

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(env.getProperty("jdbc.driverClassName"));
        dataSource.setUrl(env.getProperty("jdbc.url"));
        dataSource.setUsername(env.getProperty("jdbc.user"));
        dataSource.setPassword(env.getProperty("jdbc.pass"));

        return dataSource;
    }

    @Bean
    public HeatersDao heatersDao(){
        return new HeatersDao();
    }
    @Bean
    public BurnersDao burnersDao(){
        return new BurnersDao();
    }
}
