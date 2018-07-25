package com.example.repositories.users;

import com.example.models.users.UserEntity;
import com.hosSein.core.ebean.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<UserEntity, Long> {

    UserEntity findByUsernameAndPassword(String username, String password);

    UserEntity findByEmail(String email);

    UserEntity findByUsername(String username);
}