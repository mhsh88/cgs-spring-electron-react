package com.example.models.station;

import com.example.constants.station.BurnersConstants;
import com.example.dtos.station.BurnersView;
import com.example.dtos.station.HeatersView;
import com.example.dtos.station.StandardView;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "burner",uniqueConstraints={@UniqueConstraint(columnNames ={"text"})})
@EntityListeners({AuditingEntityListener.class})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class BurnersEntity extends BaseEntity implements BurnersConstants {


    @JsonView({BurnersView.class,HeatersView.class})
    @Lob
    public String text;

    @JsonView({BurnersView.class, HeatersView.class})
    @Column(name = "oxygen_percent")
    public Double oxygenPercent;
    @JsonView({BurnersView.class, HeatersView.class})
    @Column(name = "flue_gas_temprature")
    public Double flueGasTemprature;

    @JsonView
    @ManyToOne
    @JoinColumn(name="heaters_id", referencedColumnName = "id")
    public HeatersEntity heaters;



}
