package com.example.models.station;

import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "state", schema = "cgs", catalog = "")
public class StateEntity extends BaseEntity {
    private Double envTempreture;
    private Double windSpeed;
    private Double stationDebi;
    private Double stationInputTemprature;
    private Double stationInputPressure;
    private Double stationOutputTemprature;
    private Double stationOutputPressure;

    @JsonView
    @OneToMany(mappedBy = "state")
    public List<CalculationEntity> calculationEntities;




    @Basic
    @Column(name = "env_tempreture")
    public Double getEnvTempreture() {
        return envTempreture;
    }

    public void setEnvTempreture(Double envTempreture) {
        this.envTempreture = envTempreture;
    }

    @Basic
    @Column(name = "wind_speed")
    public Double getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
    }

    @Basic
    @Column(name = "station_debi")
    public Double getStationDebi() {
        return stationDebi;
    }

    public void setStationDebi(Double stationDebi) {
        this.stationDebi = stationDebi;
    }

    @Basic
    @Column(name = "station_input_temprature")
    public Double getStationInputTemprature() {
        return stationInputTemprature;
    }

    public void setStationInputTemprature(Double stationInputTemprature) {
        this.stationInputTemprature = stationInputTemprature;
    }

    @Basic
    @Column(name = "station_input_pressure")
    public Double getStationInputPressure() {
        return stationInputPressure;
    }

    public void setStationInputPressure(Double stationInputPressure) {
        this.stationInputPressure = stationInputPressure;
    }

    @Basic
    @Column(name = "station_output_temprature")
    public Double getStationOutputTemprature() {
        return stationOutputTemprature;
    }

    public void setStationOutputTemprature(Double stationOutputTemprature) {
        this.stationOutputTemprature = stationOutputTemprature;
    }

    @Basic
    @Column(name = "station_output_pressure")
    public Double getStationOutputPressure() {
        return stationOutputPressure;
    }

    public void setStationOutputPressure(Double stationOutputPressure) {
        this.stationOutputPressure = stationOutputPressure;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StateEntity that = (StateEntity) o;
        return id == that.id &&
                Objects.equals(envTempreture, that.envTempreture) &&
                Objects.equals(windSpeed, that.windSpeed) &&
                Objects.equals(stationDebi, that.stationDebi) &&
                Objects.equals(stationInputTemprature, that.stationInputTemprature) &&
                Objects.equals(stationInputPressure, that.stationInputPressure) &&
                Objects.equals(stationOutputTemprature, that.stationOutputTemprature) &&
                Objects.equals(stationOutputPressure, that.stationOutputPressure);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, envTempreture, windSpeed, stationDebi, stationInputTemprature, stationInputPressure, stationOutputTemprature, stationOutputPressure);
    }
}
