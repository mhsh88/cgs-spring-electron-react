package com.example.daos.station;

import core.hosSein.core.ebean.BaseDao;
import com.example.models.station.RunsHasConditionEntity;
import javax.inject.Singleton;
import org.springframework.stereotype.Component;

@Singleton
@Component
public class RunsHasConditionDao extends BaseDao<RunsHasConditionEntity, Long> {
}