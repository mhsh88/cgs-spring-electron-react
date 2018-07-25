package com.example.config;

import com.example.models.users.OrganizationEntity;
import com.example.models.users.PermissionEntity;
import com.example.models.users.RoleEntity;
import com.example.models.users.UserEntity;
import com.example.repositories.users.OrganizationRepository;
import com.example.repositories.users.PermissionRepository;
import com.example.repositories.users.RoleRepository;
import com.example.repositories.users.UserRepository;
import com.example.security.Permission;
import com.example.security.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PermissionRepository permissionRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private OrganizationRepository organizationRepository;

//    @Autowired
//    public DataLoader(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }

//    public void run(ApplicationArguments args) {
//        userRepository.save(new User("lala", "lala", "lala"));
//    }


    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
        UserEntity userEntity = userRepository.findByUsername("admin");
        if(userEntity == null){
            UserEntity userEntity1 = new UserEntity();
            userEntity1.active = true;
            userEntity1.firstName = "behinesazan";
            userEntity1.lastName = "admin";
            userEntity1.username = "admin";
            userEntity1.password = "$2a$08$qvrzQZ7jJ7oy2p/msL4M0.l83Cd0jNsX6AJUitbgRXGzge4j035ha";/*admin1234*/
            userEntity1.createdDate = new Date();
            userEntity1.mobileActivated = true;
            userEntity1.emailActivated = true;
            userEntity = userRepository.save(userEntity1);
        }
        RoleEntity roleEntity = roleRepository.findByName(Role.ROLE_USER);
        RoleEntity roleEntity1 = roleRepository.findByName(Role.ROLE_ADMIN);
        RoleEntity roleEntity2 = roleRepository.findByName(Role.ROLE_SEC);


        if(roleEntity == null){
            RoleEntity roleEntity0 = new RoleEntity();
            roleEntity0.name = Role.ROLE_USER;
            roleEntity0.title = Role.ROLE_USER;
            roleRepository.save(roleEntity0);
        }
        if(roleEntity1 == null){
            RoleEntity roleEntity0 = new RoleEntity();
            roleEntity0.name = Role.ROLE_ADMIN;
            roleEntity0.title = Role.ROLE_ADMIN;
            roleRepository.save(roleEntity0);
        }
        if(roleEntity2 == null){
            RoleEntity roleEntity0 = new RoleEntity();
            roleEntity0.name = Role.ROLE_SEC;
            roleEntity0.title = Role.ROLE_SEC;
            roleRepository.save(roleEntity0);
        }


        final Class<?> permissionClass = Permission.class;
        Field[] fields = permissionClass.getFields();
        List<PermissionEntity> permissionEntityList = new ArrayList<>();
        
        for(Field field : fields){
            field.setAccessible(true);
            String value = (String) field.get(field.getName());
            PermissionEntity permissionEntity = permissionRepository.findByName(value);
            if(permissionEntity == null){
                PermissionEntity permissionEntity1 = new PermissionEntity();
                permissionEntity1.name = value;
                permissionEntity1.deleted = false;
                permissionEntityList.add(permissionEntity1);

            }


        }
        permissionEntityList = permissionRepository.save(permissionEntityList);

        permissionEntityList = permissionRepository.findAll();


        roleEntity1.permissions = permissionEntityList;
        roleRepository.save(roleEntity1);
        userEntity.roles = new ArrayList<RoleEntity>() {{
            add(roleEntity);
            add(roleEntity1);
        }};

//        roleRepository.save(roleEntity);
        OrganizationEntity organizationEntity = organizationRepository.findByName("behinesazan");
        if(organizationEntity == null){
            OrganizationEntity organizationEntity1 = new OrganizationEntity();
            organizationEntity1.name = "behinesazan";
            organizationEntity = organizationRepository.save(organizationEntity1);
        }
        userEntity.organization = organizationEntity;
        userRepository.save(userEntity);

        UserEntity testUserEntity = userRepository.findByUsername("test");
        if(testUserEntity == null){
            UserEntity userEntity1 = new UserEntity();
            userEntity1.active = true;
            userEntity1.firstName = "test";
            userEntity1.lastName = "test";
            userEntity1.username = "test";
            userEntity1.password = "$2a$08$qvrzQZ7jJ7oy2p/msL4M0.l83Cd0jNsX6AJUitbgRXGzge4j035ha";/*admin1234*/
            userEntity1.createdDate = new Date();
            userEntity1.mobileActivated = true;
            userEntity1.emailActivated = true;
            testUserEntity = userRepository.save(userEntity1);
        }

        OrganizationEntity testOrganizationEntity = organizationRepository.findByName("test");
        if(testOrganizationEntity == null){
            OrganizationEntity organizationEntity1 = new OrganizationEntity();
            organizationEntity1.name = "test";
            testOrganizationEntity = organizationRepository.save(organizationEntity1);
        }
        testUserEntity.organization = testOrganizationEntity;
        userRepository.save(testUserEntity);


    }
}