package com.example.controllers.users;

import com.example.daos.users.RoleDao;
import com.example.dtos.users.RoleView;
import com.example.models.users.RoleEntity;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Developer: Payam Mostafaei
 * Creation Time: 2017/Jun/03 - 11:25
 */
@RestController
@RequestMapping("/roles")
public class RoleController extends
        BaseController<RoleEntity, Long, RoleView> {

    @Inject
    private RoleDao dao;

    @Autowired
    public RoleController(BaseRepository<RoleEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<RoleEntity , Long> getDao() {
        return dao;
    }
}