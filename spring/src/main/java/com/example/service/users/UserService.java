package com.example.service.users;

import com.example.models.users.UserEntity;

public interface UserService {
    public UserEntity findUserByEmail(String email);
    public UserEntity findUserByUsername(String userName);
    public void saveUser(UserEntity user);
}
