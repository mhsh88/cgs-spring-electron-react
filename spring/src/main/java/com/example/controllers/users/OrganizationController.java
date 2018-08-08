package com.example.controllers.users;

import com.example.daos.users.OrganizationDao;
import com.example.dtos.users.OrganizationView;
import com.example.models.users.OrganizationEntity;
import com.example.security.Role;
import com.fasterxml.jackson.core.JsonProcessingException;
import core.hosSein.core.ebean.BaseController;
import core.hosSein.core.ebean.BaseDao;
import core.hosSein.core.ebean.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Developer: Payam Mostafaei
 * Creation Time: 2017/Jun/03 - 11:25
 */
@RestController
@RequestMapping("/organizations")
public class OrganizationController extends
        BaseController<OrganizationEntity, Long, OrganizationView> {

    @Inject
    private OrganizationDao dao;

    @Autowired
    public OrganizationController(BaseRepository<OrganizationEntity, Long> repo) {
        super(repo);
    }

    @Override
    public BaseDao<OrganizationEntity,  Long> getDao() {
        return dao;
    }

    @Override
    @PostAuthorize("#id == authentication.principal.organizationId or hasAuthority('"+Role.ROLE_ADMIN +"')")
    public @ResponseBody
    ResponseEntity<String> get(@PathVariable Long id) throws JsonProcessingException {

        return super.get(id);
    }

}