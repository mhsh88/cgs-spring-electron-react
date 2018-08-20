package com.example.repositories.station;

import com.example.models.station.PipeSpecificationsEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Repository
public interface PipeSpecificationsRepository extends BaseRepository<PipeSpecificationsEntity, Long> {
}