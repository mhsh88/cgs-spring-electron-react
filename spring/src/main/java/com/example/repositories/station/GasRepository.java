package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.GasEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface GasRepository extends BaseRepository<GasEntity, Long> {
}