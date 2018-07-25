package com.example.daos.station;

import com.hosSein.core.ebean.BaseDao;
import com.example.models.station.PipeSizeEntity;
import javax.inject.Singleton;
import org.springframework.stereotype.Component;

@Singleton
@Component
public class PipeSizeDao extends BaseDao<PipeSizeEntity, Long> {
}