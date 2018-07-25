package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.CollectorDao;
import com.example.repositories.station.CollectorRepository;
import com.example.dtos.station.CollectorView;
import com.example.models.station.CollectorEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newcollectors")
public class NewCollectorController extends BaseController<CollectorEntity, Long, CollectorView>{
    @Autowired
    public NewCollectorController(CollectorRepository repo) {
        super(repo);
    }


    @Inject
    private CollectorDao dao;

    @Override
    public BaseDao<CollectorEntity,Long> getDao() {
        return dao;
    }
}