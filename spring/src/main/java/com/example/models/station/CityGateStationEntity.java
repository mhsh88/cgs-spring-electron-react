package com.example.models.station;

import com.example.dtos.station.CityGateStationView;
import com.example.dtos.users.UserView;
import com.example.models.users.UserEntity;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "city_gate_station")
public class CityGateStationEntity extends BaseEntity {
    @JsonView(CityGateStationView.class)
    @Size(max = 255)
    public String province;
    @JsonView(CityGateStationView.class)
    @Size(max = 255)
    public String city;
    @JsonView(CityGateStationView.class)
    @Size(max = 255)
    public String state;
    @JsonView(CityGateStationView.class)
    @Size(max = 255)
    public String region;
    @JsonView(CityGateStationView.class)
    public Double nominalCapacity;
    @JsonView(CityGateStationView.class)
    @Lob
    public String address;

    @JsonView({CityGateStationView.class, UserView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public UserEntity user;
}
