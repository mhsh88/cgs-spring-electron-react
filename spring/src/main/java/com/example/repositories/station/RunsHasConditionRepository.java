package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.RunsHasConditionEntity;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RunsHasConditionRepository extends BaseRepository<RunsHasConditionEntity, Long> {
    List<RunsHasConditionEntity> findByIdIn(List<Long> ids);
}