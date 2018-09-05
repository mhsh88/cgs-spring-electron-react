package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.PipeSizeEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;


@Repository
public interface PipeSizeRepository extends BaseRepository<PipeSizeEntity, Long> {
    List<PipeSizeEntity> findByNameIn(ArrayList<PipeSizeEntity> pipeSizeEntities);

    PipeSizeEntity findByNameLike(String pipeSizeEntity);
}