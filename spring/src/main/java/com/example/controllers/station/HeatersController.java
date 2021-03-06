package com.example.controllers.station;

import com.example.daos.station.HeatersDao;
import com.example.dtos.station.HeatersView;
import com.example.models.station.BurnersEntity;
import com.example.models.station.HeatersEntity;
import com.example.repositories.station.BurnersRepository;
import com.example.repositories.station.HeatersRepository;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.PageResult;
import core.hosSein.core.i18n.CoreMessagesCodes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/heaters")
public class HeatersController extends BaseController<HeatersEntity, Long, HeatersView>{

    @Autowired
    BurnersRepository burnersRepository;
    @Autowired
    public HeatersController(HeatersRepository repo) {
        super(repo);
    }



    @Inject
    private HeatersDao dao;

    @Override
    public BaseDao<HeatersEntity,Long> getDao() {
        return dao;
    }

    @Override
    public ResponseEntity<String> create(@RequestBody(required = false) HeatersEntity json) throws IOException {

        PageResult<HeatersEntity> pageResult = new PageResult<>();
        List<Long> Ids = new ArrayList<>();
        try {
        for(BurnersEntity burner : json.burners){
            Ids.add(burner.id);
        }
        List<BurnersEntity> burnersEntityList = burnersRepository.findByIdIn(Ids);

        json.burners = burnersEntityList;
        json = repo.save(json);
//        burnersEntityList = burnersRepository.save(burnersEntityList);
//        json.burners = burnersEntityList;


            pageResult.addData(json);
            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
            return ResponseEntity.ok().header("Content-type", "application/json; charset=utf-8").body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
        catch (Exception e) {
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
    }

}