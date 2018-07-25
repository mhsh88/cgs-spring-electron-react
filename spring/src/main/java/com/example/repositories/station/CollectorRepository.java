package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.CollectorEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface CollectorRepository extends BaseRepository<CollectorEntity, Long> {
}