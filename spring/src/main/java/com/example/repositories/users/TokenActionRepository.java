package com.example.repositories.users;

import com.example.models.users.TokenActionEntity;
import com.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenActionRepository extends BaseRepository<TokenActionEntity, Long> {
}
