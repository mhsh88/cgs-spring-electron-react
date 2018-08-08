package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.GasDao;
import com.example.repositories.station.GasRepository;
import com.example.dtos.station.GasView;
import com.example.models.station.GasEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/gass")
public class GasController extends BaseController<GasEntity, Long, GasView>{
    @Autowired
    public GasController(GasRepository repo) {
        super(repo);
    }


    @Inject
    private GasDao dao;

    @Override
    public BaseDao<GasEntity,Long> getDao() {
        return dao;
    }
}