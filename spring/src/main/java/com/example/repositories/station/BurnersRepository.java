package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.BurnersEntity;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BurnersRepository extends BaseRepository<BurnersEntity, Long> {
    List<BurnersEntity> findByIdIn(List<Long> burners);

}