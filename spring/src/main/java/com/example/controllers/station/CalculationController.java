package com.example.controllers.station;

import com.example.daos.station.CalculationDao;
import com.example.daos.station.CollectorDao;
import com.example.dtos.station.CalculationView;
import com.example.dtos.station.CollectorView;
import com.example.models.station.CalculationEntity;
import com.example.models.station.CollectorEntity;
import com.example.repositories.station.CalculationRepository;
import com.example.repositories.station.CollectorRepository;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/calculations")
public class CalculationController extends BaseController<CalculationEntity, Long, CalculationView>{
    @Autowired
    public CalculationController(CalculationRepository repo) {
        super(repo);
    }


    @Inject
    private CalculationDao dao;

    @Override
    public BaseDao<CalculationEntity,Long> getDao() {
        return dao;
    }
}