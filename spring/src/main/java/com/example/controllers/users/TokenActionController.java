package com.example.controllers.users;

import com.example.daos.users.TokenActionDao;
import com.example.dtos.users.TokenActionView;
import com.example.models.users.TokenActionEntity;
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
@RequestMapping("/tokenactions")
public class TokenActionController extends
        BaseController<TokenActionEntity, Long, TokenActionView> {

    @Inject
    private TokenActionDao dao;

    @Autowired
    public TokenActionController(BaseRepository<TokenActionEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<TokenActionEntity, Long> getDao() {
        return dao;
    }

//    @Override
//    @Transactional
//    //@Pattern(Permission.TOKEN_ACTION_UPDATE)
//    public Result insert() {
//        return super.insert();
//    }
//
//    @Override
//    @Transactional
//    //@Pattern(Permission.TOKEN_ACTION_UPDATE)
//    public Result update() {
//        return super.update();
//    }
//
//    @Override
//    @Transactional
//    //@Pattern(Permission.TOKEN_ACTION_DELETE)
//    public Result delete(Long id) {
//        return super.delete(id);
//    }
}