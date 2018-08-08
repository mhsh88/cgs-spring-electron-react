package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.BurnersHasStateEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface BurnersHasStateRepository extends BaseRepository<BurnersHasStateEntity, Long> {
}