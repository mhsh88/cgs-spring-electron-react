package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.BurnersHasStateDao;
import com.example.repositories.station.BurnersHasStateRepository;
import com.example.dtos.station.BurnersHasStateView;
import com.example.models.station.BurnersHasStateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/burnershasstates")
public class BurnersHasStateController extends BaseController<BurnersHasStateEntity, Long, BurnersHasStateView>{
    @Autowired
    public BurnersHasStateController(BurnersHasStateRepository repo) {
        super(repo);
    }


    @Inject
    private BurnersHasStateDao dao;

    @Override
    public BaseDao<BurnersHasStateEntity,Long> getDao() {
        return dao;
    }
}