package com.example.daos.station;

import com.example.models.station.HeatersEntity;
import core.hosSein.core.criteria.Operator;
import core.hosSein.core.dto.FilterDto;
import core.hosSein.core.dto.PageDto;
import core.hosSein.core.ebean.PageResult;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;

//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = CGSApplication.class)


//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(
//        classes = { H2JpaConfig.class },
//        loader = AnnotationConfigContextLoader.class)
//@DataJpaTest
//@EnableJpaRepositories(basePackages="com.example.repositories.*")
//@EntityScan(basePackages ={"com.*","controllers.*","models.*","repositories.*","service.*","core.hosSein.core.model.*","daos.*","config"},basePackageClasses = BaseEntity.class)
//@Transactional
public class HeatersDaoTest {

    @Autowired
    HeatersDao heatersDao;

//    @Test
    public void getDataWithFilter() throws Exception {
        HeatersEntity heatersEntity = getHeaterEntity();
        HeatersEntity savedToDb = heatersDao.save(heatersEntity);
        HeatersEntity getFromDb = heatersDao.findOne(savedToDb.getId());
        FilterDto filterDto = new FilterDto();
        filterDto.setField("heaters.id");
        filterDto.setOperator(Operator.IN);
        filterDto.setValue("1,2,3");
        PageDto pageDto = new PageDto();
        pageDto.getFilters().add(filterDto);
        PageResult<HeatersEntity> result = heatersDao.findData(pageDto);

        assertThat(getFromDb).isEqualTo(savedToDb);

    }

    private HeatersEntity getHeaterEntity() {
        HeatersEntity heatersEntity = new HeatersEntity();
        heatersEntity.setEfficiency(80.0);
        return heatersEntity;
    }
}
