package com.example.controllers.station;

import com.example.daos.station.CalculationDao;
import com.example.dtos.station.CalculationView;
import com.example.models.station.CalculationEntity;
import com.example.repositories.station.CalculationRepository;
import com.example.service.station.ResultService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.PageResult;
import core.hosSein.core.i18n.CoreMessagesCodes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/results")
public class ResultController extends BaseController<CalculationEntity, Long, CalculationView>{
    @Autowired
    public ResultController(CalculationRepository repo) {
        super(repo);
    }
    @Autowired
    private ResultService resultService;


    @Inject
    private CalculationDao dao;

    @Override
    public BaseDao<CalculationEntity,Long> getDao() {
        return dao;
    }

    @Override
    @RequestMapping(value="/{id}", method= RequestMethod.GET)
    public ResponseEntity<String> get(@PathVariable Long id) throws IOException {
        CalculationEntity calculationEntity = getDao().findOne(id);
        PageResult pageResult = new PageResult();
        ObjectNode result = null;

        if(calculationEntity!=null){
            result = resultService.getCalculationResult(calculationEntity);
        }
        try {
            ObjectNode finalResult = result;
            pageResult.setData(new ArrayList(){{add(finalResult);}});
            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
            return ResponseEntity.ok()
                    .header("Content-type", "application/json; charset=utf-8")
                    .header("X-Total-Count",String.valueOf(pageResult.getTotal()))
                    .body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
        catch (Exception e) {
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
    }
}