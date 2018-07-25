package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.GasDao;
import com.example.repositories.station.GasRepository;
import com.example.dtos.station.GasView;
import com.example.models.station.GasEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newgass")
public class NewGasController extends BaseController<GasEntity, Long, GasView>{
    @Autowired
    public NewGasController(GasRepository repo) {
        super(repo);
    }


    @Inject
    private GasDao dao;

    @Override
    public BaseDao<GasEntity,Long> getDao() {
        return dao;
    }
}