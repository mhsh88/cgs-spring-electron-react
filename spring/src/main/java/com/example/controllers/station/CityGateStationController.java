package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.CityGateStationDao;
import com.example.repositories.station.CityGateStationRepository;
import com.example.dtos.station.CityGateStationView;
import com.example.models.station.CityGateStationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newcitygatestations")
public class NewCityGateStationController extends BaseController<CityGateStationEntity, Long, CityGateStationView>{
    @Autowired
    public NewCityGateStationController(CityGateStationRepository repo) {
        super(repo);
    }


    @Inject
    private CityGateStationDao dao;

    @Override
    public BaseDao<CityGateStationEntity,Long> getDao() {
        return dao;
    }
}