package com.example.models.station;

import com.example.dtos.station.CalculationView;
import com.example.dtos.station.CityGateStationView;
import com.example.dtos.station.PipeSpecificationsView;
import com.example.dtos.users.UserView;
import com.example.models.users.UserEntity;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

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

    @JsonView({CityGateStationView.class, CalculationView.class, PipeSpecificationsView.class})
    @ManyToOne
    @JoinColumn(name = "after_heater")
    public PipeSpecificationsEntity afterHeater;

    @JsonView({CityGateStationView.class, CalculationView.class, PipeSpecificationsView.class})
    @ManyToOne
    @JoinColumn(name = "before_heater")
    public PipeSpecificationsEntity beforeHeater;

    @JsonView({CityGateStationView.class, CalculationView.class, PipeSpecificationsView.class})
    @ManyToOne
    @JoinColumn(name = "collector")
    public PipeSpecificationsEntity collector;


    @JsonView(CityGateStationView.class)
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="station_heater"
            , joinColumns={
            @JoinColumn(name="station_id", nullable=false)
    }
            , inverseJoinColumns={
            @JoinColumn(name="heater_id", nullable=false)
    })
    @LazyCollection(LazyCollectionOption.FALSE)
    public List<HeatersEntity> heaters;

    @JsonView({CityGateStationView.class, CalculationView.class})
    @ManyToOne
    @JoinColumn(name = "runs")
    @LazyCollection(LazyCollectionOption.FALSE)
    public RunsEntity runs;

    

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

    @JsonView(CityGateStationView.class)
    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }
    @JsonView(CityGateStationView.class)
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
    @JsonView(CityGateStationView.class)
    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }
    @JsonView(CityGateStationView.class)
    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }
    @JsonView(CityGateStationView.class)
    public Double getNominalCapacity() {
        return nominalCapacity;
    }

    public void setNominalCapacity(Double nominalCapacity) {
        this.nominalCapacity = nominalCapacity;
    }
    @JsonView(CityGateStationView.class)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    @JsonView(CityGateStationView.class)
    public PipeSpecificationsEntity getAfterHeater() {
        return afterHeater;
    }

    public void setAfterHeater(PipeSpecificationsEntity afterHeater) {
        this.afterHeater = afterHeater;
    }
    @JsonView(CityGateStationView.class)
    public PipeSpecificationsEntity getBeforeHeater() {
        return beforeHeater;
    }

    public void setBeforeHeater(PipeSpecificationsEntity beforeHeater) {
        this.beforeHeater = beforeHeater;
    }
    @JsonView(CityGateStationView.class)
    public PipeSpecificationsEntity getCollector() {
        return collector;
    }

    public void setCollector(PipeSpecificationsEntity collector) {
        this.collector = collector;
    }
    @JsonView(CityGateStationView.class)
    public List<HeatersEntity> getHeaters() {
        return heaters;
    }

    public void setHeaters(List<HeatersEntity> heaters) {
        this.heaters = heaters;
    }
    @JsonView(CityGateStationView.class)
    public RunsEntity getRuns() {
        return runs;
    }

    public void setRuns(RunsEntity runs) {
        this.runs = runs;
    }
    @JsonView
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
    @JsonView(CityGateStationView.class)
    public List<GasEntity> getGasEntities() {
        return gasEntities;
    }

    public void setGasEntities(List<GasEntity> gasEntities) {
        this.gasEntities = gasEntities;
    }
    @JsonView
    public List<CalculationEntity> getCalculationEntities() {
        return calculationEntities;
    }

    public void setCalculationEntities(List<CalculationEntity> calculationEntities) {
        this.calculationEntities = calculationEntities;
    }
}
