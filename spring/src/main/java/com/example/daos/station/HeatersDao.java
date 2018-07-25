package com.example.daos.station;

import com.hosSein.core.ebean.BaseDao;
import com.example.models.station.HeatersEntity;
import javax.inject.Singleton;
import org.springframework.stereotype.Component;

@Singleton
@Component
public class HeatersDao extends BaseDao<HeatersEntity, Long> {
}