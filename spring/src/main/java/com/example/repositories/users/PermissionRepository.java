package com.example.repositories.users;

import com.example.models.users.PermissionEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissionRepository extends BaseRepository<PermissionEntity, Long> {

    PermissionEntity findByName(String permission);

}