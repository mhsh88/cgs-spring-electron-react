package com.example.models.station;

import com.example.dtos.station.BurnersView;
import com.example.dtos.station.HeatersView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "burners", schema = "cgs", catalog = "")
public class BurnersEntity extends BaseEntity {

    private Double oxygenPercent;
    private Double flueGasTemprature;


    @JsonView(BurnersView.class)
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public HeatersEntity heater;

    @JsonView({BurnersView.class, HeatersView.class})
    @Basic
    @Column(name = "oxygen_percent")
    public Double getOxygenPercent() {
        return oxygenPercent;
    }

    public void setOxygenPercent(Double oxygenPercent) {
        this.oxygenPercent = oxygenPercent;
    }
    @JsonView({BurnersView.class, HeatersView.class})
    @Basic
    @Column(name = "flue_gas_temprature")
    public Double getFlueGasTemprature() {
        return flueGasTemprature;
    }

    public void setFlueGasTemprature(Double flueGasTemprature) {
        this.flueGasTemprature = flueGasTemprature;
    }

}
