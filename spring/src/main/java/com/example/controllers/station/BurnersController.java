package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.BurnersDao;
import com.example.repositories.station.BurnersRepository;
import com.example.dtos.station.BurnersView;
import com.example.models.station.BurnersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/burners")
public class BurnersController extends BaseController<BurnersEntity, Long, BurnersView>{
    @Autowired
    public BurnersController(BurnersRepository repo) {
        super(repo);
    }


    @Inject
    private BurnersDao dao;

    @Override
    public BaseDao<BurnersEntity,Long> getDao() {
        return dao;
    }
}