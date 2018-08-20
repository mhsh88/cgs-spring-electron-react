package com.example.repositories.station;

import com.example.models.station.CollectorEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CollectorRepository extends BaseRepository<CollectorEntity, Long> {
}