package com.example.daos.station;

import com.example.CGSApplication;
import com.example.models.station.HeatersEntity;
import javafx.application.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase.*;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

//@RunWith(SpringRunner.class)
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CGSApplication.class)
@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
public class HeatersDaoTest {

    @Autowired
    HeatersDao heatersDao;

    @Test
    public void getDataWithFilter(){
        HeatersEntity heatersEntity = getHeaterEntity();
        HeatersEntity savedToDb = heatersDao.save(heatersEntity);
        HeatersEntity getFromDb = heatersDao.findOne(savedToDb.getId());

        assertThat(getFromDb).isEqualTo(savedToDb);

    }

    private HeatersEntity getHeaterEntity() {
        return null;
    }
}
