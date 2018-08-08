package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.BeforeHeaterDao;
import com.example.repositories.station.BeforeHeaterRepository;
import com.example.dtos.station.BeforeHeaterView;
import com.example.models.station.BeforeHeaterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/beforeheaters")
public class BeforeHeaterController extends BaseController<BeforeHeaterEntity, Long, BeforeHeaterView>{
    @Autowired
    public BeforeHeaterController(BeforeHeaterRepository repo) {
        super(repo);
    }


    @Inject
    private BeforeHeaterDao dao;

    @Override
    public BaseDao<BeforeHeaterEntity,Long> getDao() {
        return dao;
    }
}