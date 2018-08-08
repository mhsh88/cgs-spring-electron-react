package com.example.daos.station;

import core.hosSein.core.ebean.BaseDao;
import com.example.models.station.AfterHeaterEntity;
import javax.inject.Singleton;
import org.springframework.stereotype.Component;

@Singleton
@Component
public class AfterHeaterDao extends BaseDao<AfterHeaterEntity, Long> {
}