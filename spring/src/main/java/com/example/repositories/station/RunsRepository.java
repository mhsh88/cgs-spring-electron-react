package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.RunsEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface RunsRepository extends BaseRepository<RunsEntity, Long> {
}