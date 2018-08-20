package com.example.models.station;

import com.example.dtos.station.CalculationView;
import com.example.dtos.station.CityGateStationView;
import com.example.dtos.users.UserView;
import com.example.models.users.UserEntity;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

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
    @Column(name = "conditions")
    public String condition;

    @JsonView(CityGateStationView.class)
    @Size(max = 255)
    public String region;
    @JsonView(CityGateStationView.class)
    public Double nominalCapacity;
    @JsonView(CityGateStationView.class)
    @Lob
    public String address;

    @JsonView({CityGateStationView.class, CalculationView.class})
    @ManyToOne
    @JoinColumn(name = "after_heater")
    public PipeSpecificationsEntity afterHeater;

    @JsonView({CityGateStationView.class, CalculationView.class})
    @ManyToOne
    @JoinColumn(name = "before_heater")
    public PipeSpecificationsEntity beforeHeater;

    @JsonView({CityGateStationView.class, CalculationView.class})
    @ManyToOne
    @JoinColumn(name = "collector")
    public PipeSpecificationsEntity collector;

    

    @JsonView({CityGateStationView.class, UserView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public UserEntity user;

    @JsonView
    @OneToMany(mappedBy = "cityGateStation")
    public List<GasEntity> gasEntities;

    @JsonView
    @OneToMany(mappedBy = "cityGateStation")
    public List<CalculationEntity> calculationEntities;

}
