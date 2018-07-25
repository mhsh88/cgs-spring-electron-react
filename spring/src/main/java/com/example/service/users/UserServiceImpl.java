package com.example.service.users;

import com.example.models.users.RoleEntity;
import com.example.models.users.UserEntity;
import com.example.repositories.users.RoleRepository;
import com.example.repositories.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserEntity findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserEntity findUserByUsername(String userName) {
        return userRepository.findByUsername(userName);
    }

    @Override
    public void saveUser(UserEntity user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.password));
        user.active = true;
        RoleEntity userRole = roleRepository.findByName("ADMIN");
        user.setRoles(new ArrayList<RoleEntity>(Arrays.asList(userRole)));
        userRepository.save(user);
    }

}
