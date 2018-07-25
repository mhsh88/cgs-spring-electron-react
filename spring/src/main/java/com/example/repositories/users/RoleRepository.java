package com.example.repositories.users;

import com.example.models.users.RoleEntity;
import com.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends BaseRepository<RoleEntity, Long> {

    RoleEntity findByName(String role_user);

}