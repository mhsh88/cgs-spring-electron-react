package com.example.daos.users;

import com.example.models.users.PermissionEntity;
import com.hosSein.core.ebean.BaseDao;
import org.springframework.stereotype.Component;

import javax.inject.Singleton;

/**
 * Developer: Payam Mostafaei
 * Creation Time: 2017/Feb/09 - 10:00
 */

@Singleton
@Component
public class PermissionDao extends BaseDao<PermissionEntity, Long> {
}