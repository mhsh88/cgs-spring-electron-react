package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.BurnersEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface BurnersRepository extends BaseRepository<BurnersEntity, Long> {
}