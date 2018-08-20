package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.PipeSizeDao;
import com.example.repositories.station.PipeSizeRepository;
import com.example.dtos.station.PipeSizeView;
import com.example.models.station.PipeSizeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/pipesizes")
public class PipeSizeController extends BaseController<PipeSizeEntity, Long, PipeSizeView>{
    @Autowired
    public PipeSizeController(PipeSizeRepository repo) {
        super(repo);
    }


    @Inject
    private PipeSizeDao dao;

    @Override
    public BaseDao<PipeSizeEntity,Long> getDao() {
        return dao;
    }
}