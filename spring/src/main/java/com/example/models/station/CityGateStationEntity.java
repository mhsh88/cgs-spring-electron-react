package com.example.models.station;

import com.example.models.users.UserEntity;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "city_gate_station", schema = "cgs", catalog = "")
public class CityGateStationEntity extends BaseEntity {
    @JsonView
    @Size(max = 255)
    public String province;
    @JsonView
    @Size(max = 255)
    public String city;
    @JsonView
    @Size(max = 255)
    public String state;
    @JsonView
    @Size(max = 255)
    public String region;
    @JsonView
    public Double nominalCapacity;
    @JsonView
    @Lob
    public String address;

    @JsonView
    @ManyToOne
    @JoinColumn(name = "user_id")
    public UserEntity user;
}
