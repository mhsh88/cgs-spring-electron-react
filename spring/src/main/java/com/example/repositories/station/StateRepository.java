package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.StateEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface StateRepository extends BaseRepository<StateEntity, Long> {
}