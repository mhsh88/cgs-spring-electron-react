package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.CityGateStationEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface CityGateStationRepository extends BaseRepository<CityGateStationEntity, Long> {
}