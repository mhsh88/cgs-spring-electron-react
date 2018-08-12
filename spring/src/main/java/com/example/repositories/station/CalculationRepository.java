package com.example.repositories.station;

import com.example.models.station.CalculationEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CalculationRepository extends BaseRepository<CalculationEntity, Long> {
}