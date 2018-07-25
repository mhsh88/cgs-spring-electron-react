package com.example.daos.station;

import com.hosSein.core.ebean.BaseDao;
import com.example.models.station.CityGateStationEntity;
import javax.inject.Singleton;
import org.springframework.stereotype.Component;

@Singleton
@Component
public class CityGateStationDao extends BaseDao<CityGateStationEntity, Long> {
}