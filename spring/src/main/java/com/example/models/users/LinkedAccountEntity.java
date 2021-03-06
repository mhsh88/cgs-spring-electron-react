package com.example.models.users;

import com.example.constants.users.LinkedAccountConstants;
import com.example.dtos.users.LinkedAccountView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by Payam Mostafaei
 * Creation time: 2017/May/07 - 2:56 PM
 */

@Entity
@Table(name="linked_account")
@EntityListeners({AuditingEntityListener.class})
public class LinkedAccountEntity extends BaseEntity implements LinkedAccountConstants {
    private static final long serialVersionUID = 1L;

    @JsonView(LinkedAccountView.class)
    @ManyToOne
    @JoinColumn(name="user_id")
    public UserEntity user;

    @JsonView(LinkedAccountView.class)
    @Column(name = "provider_user_id")
    @NotNull(message = ERROR_PROVIDER_USER_ID_REQUIRED)
    public String providerUserId;

    @JsonView(LinkedAccountView.class)
    @Column(name = "provider_key")
    @NotNull(message = ERROR_PROVIDER_KEY_REQUIRED)
    public String providerKey;
}
