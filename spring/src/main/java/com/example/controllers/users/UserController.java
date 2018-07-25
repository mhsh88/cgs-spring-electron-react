package com.example.controllers.users;

import com.example.daos.users.UserDao;
import com.example.dtos.users.UserView;
import com.example.models.users.UserEntity;
import com.hosSein.core.ebean.BaseController;
import com.hosSein.core.ebean.BaseDao;
import com.hosSein.core.ebean.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Developer: Payam Mostafaei
 * Creation Time: 2017/Jun/03 - 11:25
 */
@RestController
@RequestMapping("/users")
public class UserController extends
        BaseController<UserEntity, Long, UserView> {

    @Inject
    private UserDao dao;
//    @Inject
//    private PlayAuthenticate auth;

    @Autowired
    public UserController(BaseRepository<UserEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<UserEntity, Long> getDao() {
        return dao;
    }

}