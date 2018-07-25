package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.HeatersDao;
import com.example.repositories.station.HeatersRepository;
import com.example.dtos.station.HeatersView;
import com.example.models.station.HeatersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newheaterss")
public class NewHeatersController extends BaseController<HeatersEntity, Long, HeatersView>{
    @Autowired
    public NewHeatersController(HeatersRepository repo) {
        super(repo);
    }


    @Inject
    private HeatersDao dao;

    @Override
    public BaseDao<HeatersEntity,Long> getDao() {
        return dao;
    }
}