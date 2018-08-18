package com.example.daos.station;

import com.example.CGSApplication;
import com.example.config.H2JpaConfig;
import com.example.models.station.HeatersEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase.*;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = CGSApplication.class)


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(
        classes = { H2JpaConfig.class },
        loader = AnnotationConfigContextLoader.class)
@DataJpaTest
@Transactional
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
