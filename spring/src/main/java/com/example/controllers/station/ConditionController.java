package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.ConditionDao;
import com.example.repositories.station.ConditionRepository;
import com.example.dtos.station.ConditionView;
import com.example.models.station.ConditionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/conditions")
public class ConditionController extends BaseController<ConditionEntity, Long, ConditionView>{
    @Autowired
    public ConditionController(ConditionRepository repo) {
        super(repo);
    }


    @Inject
    private ConditionDao dao;

    @Override
    public BaseDao<ConditionEntity,Long> getDao() {
        return dao;
    }
}