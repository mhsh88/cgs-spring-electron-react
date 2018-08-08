package com.example.repositories.users;

import com.example.models.users.OrganizationEntity;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface OrganizationRepository extends BaseRepository<OrganizationEntity, Long> {

    OrganizationEntity findByName(String organization);

}