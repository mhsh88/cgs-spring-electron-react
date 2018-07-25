package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.RunsHasStateDao;
import com.example.repositories.station.RunsHasStateRepository;
import com.example.dtos.station.RunsHasStateView;
import com.example.models.station.RunsHasStateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newrunshasstates")
public class NewRunsHasStateController extends BaseController<RunsHasStateEntity, Long, RunsHasStateView>{
    @Autowired
    public NewRunsHasStateController(RunsHasStateRepository repo) {
        super(repo);
    }


    @Inject
    private RunsHasStateDao dao;

    @Override
    public BaseDao<RunsHasStateEntity,Long> getDao() {
        return dao;
    }
}