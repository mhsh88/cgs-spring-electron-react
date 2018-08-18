package com.example.daos.station;

import com.example.models.station.HeatersEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
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
