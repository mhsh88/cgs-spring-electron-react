package com.example.repositories.station;

import core.hosSein.core.ebean.BaseRepository;
import com.example.models.station.BeforeHeaterEntity;
import org.springframework.stereotype.Repository;


@Repository
public interface BeforeHeaterRepository extends BaseRepository<BeforeHeaterEntity, Long> {
}