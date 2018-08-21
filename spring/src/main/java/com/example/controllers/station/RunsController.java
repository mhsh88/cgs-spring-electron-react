package com.example.controllers.station;

import com.example.models.station.RunsHasConditionEntity;
import com.example.repositories.station.RunsHasConditionRepository;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import com.example.daos.station.RunsDao;
import com.example.repositories.station.RunsRepository;
import com.example.dtos.station.RunsView;
import com.example.models.station.RunsEntity;
import core.hosSein.core.ebean.PageResult;
import core.hosSein.core.i18n.CoreMessagesCodes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/runss")
public class RunsController extends BaseController<RunsEntity, Long, RunsView>{
    @Autowired
    public RunsController(RunsRepository repo) {
        super(repo);
    }

    @Autowired
    private RunsHasConditionRepository runsHasConditionRepository;


    @Inject
    private RunsDao dao;

    @Override
    public BaseDao<RunsEntity,Long> getDao() {
        return dao;
    }

    @Override
    public ResponseEntity<String> create(@RequestBody(required = false) RunsEntity json) throws IOException {

        PageResult<RunsEntity> pageResult = new PageResult<>();
        List<Long> Ids = new ArrayList<>();
        try {
            for(RunsHasConditionEntity runsHasCondition : json.runsHasCondition){
                Ids.add(runsHasCondition.id);
            }
            List<RunsHasConditionEntity> runsHasConditionEntities = runsHasConditionRepository.findByIdIn(Ids);

            json.runsHasCondition = runsHasConditionEntities;
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