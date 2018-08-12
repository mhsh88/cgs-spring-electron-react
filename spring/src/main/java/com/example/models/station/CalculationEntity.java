package com.example.models.station;


import com.example.constants.station.CalculationConstants;
import com.example.dtos.station.CalculationView;
import com.example.dtos.station.CityGateStationView;
import com.example.dtos.station.GasView;
import com.example.dtos.station.StateView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "calculation")
public class CalculationEntity extends BaseEntity implements CalculationConstants {

    @JsonView({CalculationView.class, CityGateStationView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public CityGateStationEntity cityGateStation;

    @JsonView({CalculationView.class, StateView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public StateEntity state;

    @JsonView({CalculationView.class, GasView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    public GasEntity gas;
}
