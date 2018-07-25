package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.BurnersHasStateEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface BurnersHasStateRepository extends BaseRepository<BurnersHasStateEntity, Long> {
}