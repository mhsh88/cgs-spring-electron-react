package com.example.models.station;


import com.example.constants.station.CalculationConstants;
import com.example.dtos.station.CalculationView;
import com.example.dtos.station.CityGateStationView;
import com.example.dtos.station.GasView;
import com.example.dtos.station.ConditionView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "calculation")
public class CalculationEntity extends BaseEntity implements CalculationConstants {

    @JsonView({CalculationView.class, CityGateStationView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @NotNull
    public CityGateStationEntity cityGateStation;

    @JsonView({CalculationView.class, ConditionView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @NotNull
    public ConditionEntity condition;

    @JsonView({CalculationView.class, GasView.class})
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @NotNull
    public GasEntity gas;
}
