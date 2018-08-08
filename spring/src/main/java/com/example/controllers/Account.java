package com.example.controllers;

import com.example.daos.users.TokenActionDao;
import com.example.daos.users.UserDao;
import com.example.dtos.users.UserView;
import com.example.models.users.TokenActionEntity;
import com.example.models.users.UserEntity;
import com.example.repositories.users.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.BaseRepository;
import core.hosSein.core.ebean.PageResult;
import core.hosSein.core.i18n.CoreMessagesCodes;
import enumerations.security.ActionTokenType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Created by Payam Mostafaei
 * Creation Time: 2015/Nov/14 - 9:43 AM
 */
@RestController
@RequestMapping("/account")
public class Account extends BaseController<UserEntity, Long, UserView> {

    @Inject
    UserDao userDao;

    @Inject
    TokenActionDao tokenActionDao;

    @Autowired
    public Account(BaseRepository<UserEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao getDao() {
        return userDao;
    }

    @Autowired
    UserRepository repository;


    @RequestMapping(value = "/login", method=RequestMethod.POST)
    public ResponseEntity doLogin(@RequestBody UserEntity user) throws JsonProcessingException {
//        UserEntity user = new UserEntity();
//        user.username = request().body().asJson().get("username").asText();
//        user.password = request().body().asJson().get("password").asText();
//        UserEntity user = Json.fromJson(request().body().asJson(), UserEntity.class);
//        user = super.repo.f.repo.findByUsernamePassword(user);
        PageResult pageResult = new PageResult();

        user = repository.findByUsernameAndPassword(user.username, user.password);
        if (user == null) {
            return new ResponseEntity<>(CoreMessagesCodes.ERROR_LOGIN_NOT_FOUND, HttpStatus.UNAUTHORIZED);
        }
        try {
        TokenActionEntity tokenAction = tokenActionDao.create(ActionTokenType.ACCESS, TokenActionDao.generateToken(), user);


            pageResult.addData(tokenAction);
            pageResult.setMessage(CoreMessagesCodes.SUCCESSFUL_LOAD_MODEL);
            return ResponseEntity.ok().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
        catch (Exception e) {
            pageResult.unsuccessfulOperation(e.getMessage());
            return ResponseEntity.badRequest().body(mapper.writerWithView(getViewClass()).writeValueAsString(pageResult));
        }
//        return ResponseEntity.ok().body(tokenAction);//ok(Json.toJson(tokenAction));
    }
}