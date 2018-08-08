package com.example.models.users;

//import be.objectify.deadbolt.java.models.Role;

import com.example.constants.users.RoleConstants;
import com.example.dtos.users.PermissionView;
import com.example.dtos.users.RoleView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "security_role")
@EntityListeners({AuditingEntityListener.class})
public class RoleEntity extends BaseEntity implements RoleConstants/*, Role*/ {
    private static final long serialVersionUID = 1L;

    @JsonView(RoleView.class)
    @NotNull(message = ERROR_NAME_REQUIRED)
    @Size(max = 255, message = ERROR_NAME_MAX_LENGTH)
    public String name;

    @JsonView(RoleView.class)
    @NotNull(message = ERROR_TITLE_REQUIRED)
    public String title;

    @JsonView({RoleView.class, PermissionView.class})
    //bi-directional many-to-many association to PermissionEntity
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
        name = "role_permission",
        joinColumns = {@JoinColumn(name = "role_id", nullable = false)},
        inverseJoinColumns = {@JoinColumn(name = "permission_id", nullable = false)}
    )
    public List<PermissionEntity> permissions;

    @JsonView
    //bi-directional many-to-many association to UserEntity
    @ManyToMany(mappedBy = "roles")
    public List<UserEntity> users;

//    @Override
//    public String getName() {
//        return this.name;
//    }

}