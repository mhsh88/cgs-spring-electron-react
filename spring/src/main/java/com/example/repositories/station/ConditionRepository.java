package com.example.repositories.station;

import com.example.models.station.ConditionEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ConditionRepository extends BaseRepository<ConditionEntity, Long> {
}