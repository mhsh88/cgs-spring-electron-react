package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.RunsHasConditionEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface RunsHasConditionRepository extends BaseRepository<RunsHasConditionEntity, Long> {
}