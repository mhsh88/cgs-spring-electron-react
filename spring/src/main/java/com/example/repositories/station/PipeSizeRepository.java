package com.example.repositories.station;

import com.hosSein.core.ebean.BaseRepository;
import com.example.models.station.PipeSizeEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface PipeSizeRepository extends BaseRepository<PipeSizeEntity, Long> {
}