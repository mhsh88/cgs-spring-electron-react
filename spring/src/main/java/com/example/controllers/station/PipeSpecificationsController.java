package com.example.controllers.station;

import com.example.daos.station.PipeSpecificationsDao;
import com.example.dtos.station.PipeSpecificationsView;
import com.example.models.station.PipeSizeEntity;
import com.example.models.station.PipeSpecificationsEntity;
import com.example.repositories.station.PipeSizeRepository;
import com.example.repositories.station.PipeSpecificationsRepository;
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

@RestController
@RequestMapping("/pipespecificationss")
public class PipeSpecificationsController extends BaseController<PipeSpecificationsEntity, Long, PipeSpecificationsView>{
    @Autowired
    public PipeSpecificationsController(PipeSpecificationsRepository repo) {
        super(repo);
    }

    @Autowired
    private PipeSizeRepository pipeSizeRepository;


    @Inject
    private PipeSpecificationsDao dao;

    @Override
    public BaseDao<PipeSpecificationsEntity,Long> getDao() {
        return dao;
    }

    @Override
    public ResponseEntity<String> create(@RequestBody(required = false) PipeSpecificationsEntity json) throws IOException {

        PageResult<PipeSpecificationsEntity> pageResult = new PageResult<>();
        try {
        PipeSizeEntity pipeSizeEntity = pipeSizeRepository.findOne(json.pipeSize.getId());
        json.pipeSize = pipeSizeEntity;

            json = repo.save(json);
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