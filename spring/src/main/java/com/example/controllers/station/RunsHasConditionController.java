package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.RunsHasConditionDao;
import com.example.repositories.station.RunsHasConditionRepository;
import com.example.dtos.station.RunsHasConditionView;
import com.example.models.station.RunsHasConditionEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/runshasconditions")
public class RunsHasConditionController extends BaseController<RunsHasConditionEntity, Long, RunsHasConditionView>{
    @Autowired
    public RunsHasConditionController(RunsHasConditionRepository repo) {
        super(repo);
    }


    @Inject
    private RunsHasConditionDao dao;

    @Override
    public BaseDao<RunsHasConditionEntity,Long> getDao() {
        return dao;
    }
}