package com.example.controllers.station;

import com.example.service.users.CustomUserDetails;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.CityGateStationDao;
import com.example.repositories.station.CityGateStationRepository;
import com.example.dtos.station.CityGateStationView;
import com.example.models.station.CityGateStationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.io.IOException;

@RestController
@RequestMapping("/citygatestations")
public class CityGateStationController extends BaseController<CityGateStationEntity, Long, CityGateStationView>{
    @Autowired
    public CityGateStationController(CityGateStationRepository repo) {
        super(repo);
    }


    @Inject
    private CityGateStationDao dao;

    @Override
    public BaseDao<CityGateStationEntity,Long> getDao() {
        return dao;
    }

    @Override
    public ResponseEntity<String> create(@RequestBody(required = false) CityGateStationEntity json) throws IOException {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        json.user = userDetails.getUser();
        return super.create(json);
    }
}