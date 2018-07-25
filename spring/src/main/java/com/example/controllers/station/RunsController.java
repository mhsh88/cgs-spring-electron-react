package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.RunsDao;
import com.example.repositories.station.RunsRepository;
import com.example.dtos.station.RunsView;
import com.example.models.station.RunsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newrunss")
public class NewRunsController extends BaseController<RunsEntity, Long, RunsView>{
    @Autowired
    public NewRunsController(RunsRepository repo) {
        super(repo);
    }


    @Inject
    private RunsDao dao;

    @Override
    public BaseDao<RunsEntity,Long> getDao() {
        return dao;
    }
}