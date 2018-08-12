package com.example.daos.station;

import com.example.models.station.CalculationEntity;
import core.hosSein.core.ebean.BaseDao;
import org.springframework.stereotype.Component;

import javax.inject.Singleton;

@Singleton
@Component
public class CalculationDao extends BaseDao<CalculationEntity, Long> {
}