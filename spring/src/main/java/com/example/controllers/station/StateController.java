package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.StateDao;
import com.example.repositories.station.StateRepository;
import com.example.dtos.station.StateView;
import com.example.models.station.StateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/states")
public class StateController extends BaseController<StateEntity, Long, StateView>{
    @Autowired
    public StateController(StateRepository repo) {
        super(repo);
    }


    @Inject
    private StateDao dao;

    @Override
    public BaseDao<StateEntity,Long> getDao() {
        return dao;
    }
}