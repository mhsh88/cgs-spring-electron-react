package com.example.controllers.users;

import com.example.daos.users.UserDao;
import com.example.dtos.users.UserView;
import com.example.models.users.UserEntity;
import com.example.service.users.CustomUserDetails;
import com.fasterxml.jackson.core.JsonProcessingException;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @RequestMapping("/currentuser")
    @ResponseBody
    public ResponseEntity currentUser() throws JsonProcessingException {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return super.get(userDetails.getUser().getId());

    }

}