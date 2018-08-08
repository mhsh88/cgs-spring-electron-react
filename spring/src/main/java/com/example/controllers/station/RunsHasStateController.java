package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.RunsHasStateDao;
import com.example.repositories.station.RunsHasStateRepository;
import com.example.dtos.station.RunsHasStateView;
import com.example.models.station.RunsHasStateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/runshasstates")
public class RunsHasStateController extends BaseController<RunsHasStateEntity, Long, RunsHasStateView>{
    @Autowired
    public RunsHasStateController(RunsHasStateRepository repo) {
        super(repo);
    }


    @Inject
    private RunsHasStateDao dao;

    @Override
    public BaseDao<RunsHasStateEntity,Long> getDao() {
        return dao;
    }
}