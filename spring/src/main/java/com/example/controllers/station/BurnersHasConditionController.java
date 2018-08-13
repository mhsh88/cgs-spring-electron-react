package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.BurnersHasConditionDao;
import com.example.repositories.station.BurnersHasConditionRepository;
import com.example.dtos.station.BurnersHasConditionView;
import com.example.models.station.BurnersHasConditionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/burnershasconditions")
public class BurnersHasConditionController extends BaseController<BurnersHasConditionEntity, Long, BurnersHasConditionView>{
    @Autowired
    public BurnersHasConditionController(BurnersHasConditionRepository repo) {
        super(repo);
    }


    @Inject
    private BurnersHasConditionDao dao;

    @Override
    public BaseDao<BurnersHasConditionEntity,Long> getDao() {
        return dao;
    }
}