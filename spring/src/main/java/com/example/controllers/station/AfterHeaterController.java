package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.AfterHeaterDao;
import com.example.repositories.station.AfterHeaterRepository;
import com.example.dtos.station.AfterHeaterView;
import com.example.models.station.AfterHeaterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newafterheaters")
public class NewAfterHeaterController extends BaseController<AfterHeaterEntity, Long, AfterHeaterView>{
    @Autowired
    public NewAfterHeaterController(AfterHeaterRepository repo) {
        super(repo);
    }


    @Inject
    private AfterHeaterDao dao;

    @Override
    public BaseDao<AfterHeaterEntity,Long> getDao() {
        return dao;
    }
}