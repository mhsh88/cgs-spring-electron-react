package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.HeatersEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface HeatersRepository extends BaseRepository<HeatersEntity, Long> {
}