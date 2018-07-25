package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.StateDao;
import com.example.repositories.station.StateRepository;
import com.example.dtos.station.StateView;
import com.example.models.station.StateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newstates")
public class NewStateController extends BaseController<StateEntity, Long, StateView>{
    @Autowired
    public NewStateController(StateRepository repo) {
        super(repo);
    }


    @Inject
    private StateDao dao;

    @Override
    public BaseDao<StateEntity,Long> getDao() {
        return dao;
    }
}