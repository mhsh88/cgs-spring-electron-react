package com.example.controllers.station;

import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.AfterHeaterDao;
import com.example.repositories.station.AfterHeaterRepository;
import com.example.dtos.station.AfterHeaterView;
import com.example.models.station.AfterHeaterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/afterheaters")
public class AfterHeaterController extends BaseController<AfterHeaterEntity, Long, AfterHeaterView>{
    @Autowired
    public AfterHeaterController(AfterHeaterRepository repo) {
        super(repo);
    }


    @Inject
    private AfterHeaterDao dao;

    @Override
    public BaseDao<AfterHeaterEntity,Long> getDao() {
        return dao;
    }
}