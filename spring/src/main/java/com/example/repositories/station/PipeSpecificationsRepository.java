package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.PipeSpecificationsEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface PipeSpecificationsRepository extends BaseRepository<PipeSpecificationsEntity, Long> {
}