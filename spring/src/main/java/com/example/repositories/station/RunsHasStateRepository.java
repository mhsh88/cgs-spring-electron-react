package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.RunsHasStateEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface RunsHasStateRepository extends BaseRepository<RunsHasStateEntity, Long> {
}