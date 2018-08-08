package com.example.controllers.users;

import com.example.daos.users.PermissionDao;
import com.example.dtos.users.PermissionView;
import com.example.models.users.PermissionEntity;
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
@RequestMapping("/permissions")
public class PermissionController extends
        BaseController<PermissionEntity, Long, PermissionView> {

    @Inject
    private PermissionDao dao;

    @Autowired
    public PermissionController(BaseRepository<PermissionEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<PermissionEntity,Long> getDao() {
        return dao;
    }
}