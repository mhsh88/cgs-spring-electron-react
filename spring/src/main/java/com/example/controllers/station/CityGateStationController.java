package com.example.controllers.station;

import com.example.daos.station.CityGateStationDao;
import com.example.dtos.station.CityGateStationView;
import com.example.models.station.CityGateStationEntity;
import com.example.repositories.station.CityGateStationRepository;
import com.example.repositories.station.HeatersRepository;
import com.example.service.users.CustomUserDetails;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.io.IOException;

@RestController
@RequestMapping("/citygatestations")
public class CityGateStationController extends BaseController<CityGateStationEntity, Long, CityGateStationView>{

    @Autowired
    private HeatersRepository heatersRepository;
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


//            PageResult<CityGateStationEntity> pageResult = new PageResult<>();
//            List<Long> Ids = new ArrayList<>();
//            try {
//                for(HeatersEntity heatersEntity : json.heaters){
//                    Ids.add(heatersEntity.id);
//                }
//                List<HeatersEntity> heatersEntities = heatersRepository.findByIdIn(Ids);
//
//                json.heaters = heatersEntities;
//                json = repo.save(json);
//                pageResult.addData(json);
//                pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
//                return ResponseEntity.ok().header("Content-type", "application/json; charset=utf-8").body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
//            }
//            catch (Exception e) {
//                pageResult.unsuccessfulOperation(e.getMessage());
//                return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
//            }
        return super.create(json);
        }

}