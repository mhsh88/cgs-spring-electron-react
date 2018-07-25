package com.example.controllers.users;

import com.example.daos.users.LinkedAccountDao;
import com.example.dtos.users.LinkedAccountView;
import com.example.models.users.LinkedAccountEntity;
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
@RequestMapping("/linkedaccounts")
public class LinkedAccountController extends
        BaseController<LinkedAccountEntity, Long, LinkedAccountView> {

    @Inject
    private LinkedAccountDao dao;

    @Autowired
    public LinkedAccountController(BaseRepository<LinkedAccountEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<LinkedAccountEntity, Long> getDao() {
        return dao;
    }
}