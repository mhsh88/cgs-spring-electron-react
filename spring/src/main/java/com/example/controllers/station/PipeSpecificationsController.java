package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.PipeSpecificationsDao;
import com.example.repositories.station.PipeSpecificationsRepository;
import com.example.dtos.station.PipeSpecificationsView;
import com.example.models.station.PipeSpecificationsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/pipespecificationss")
public class PipeSpecificationsController extends BaseController<PipeSpecificationsEntity, Long, PipeSpecificationsView>{
    @Autowired
    public PipeSpecificationsController(PipeSpecificationsRepository repo) {
        super(repo);
    }


    @Inject
    private PipeSpecificationsDao dao;

    @Override
    public BaseDao<PipeSpecificationsEntity,Long> getDao() {
        return dao;
    }
}