package com.example.controllers.station;

import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.example.daos.station.BeforeHeaterDao;
import com.example.repositories.station.BeforeHeaterRepository;
import com.example.dtos.station.BeforeHeaterView;
import com.example.models.station.BeforeHeaterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("/u/newbeforeheaters")
public class NewBeforeHeaterController extends BaseController<BeforeHeaterEntity, Long, BeforeHeaterView>{
    @Autowired
    public NewBeforeHeaterController(BeforeHeaterRepository repo) {
        super(repo);
    }


    @Inject
    private BeforeHeaterDao dao;

    @Override
    public BaseDao<BeforeHeaterEntity,Long> getDao() {
        return dao;
    }
}