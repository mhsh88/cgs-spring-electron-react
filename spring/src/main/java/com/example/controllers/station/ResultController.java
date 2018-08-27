package com.example.controllers.station;

import com.example.daos.station.CalculationDao;
import com.example.dtos.station.CalculationView;
import com.example.models.station.CalculationEntity;
import com.example.repositories.station.CalculationRepository;
import com.example.service.station.ResultService;
import com.fasterxml.jackson.core.JsonProcessingException;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("/results")
public class ResultController extends BaseController<CalculationEntity, Long, CalculationView>{
    @Autowired
    public ResultController(CalculationRepository repo) {
        super(repo);
    }
    @Autowired
    private ResultService resultService;


    @Inject
    private CalculationDao dao;

    @Override
    public BaseDao<CalculationEntity,Long> getDao() {
        return dao;
    }

    @Override
    @RequestMapping(value="/{id}", method= RequestMethod.GET)
    public ResponseEntity<String> get(@PathVariable Long id) throws JsonProcessingException {
        CalculationEntity calculationEntity = getDao().findOne(id);
        if(calculationEntity!=null){
            resultService.getCalculationResult(calculationEntity);
        }
        return super.get(id);
    }
}