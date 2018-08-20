package com.example.models.station;

import com.example.dtos.station.CityGateStationView;
import com.example.dtos.station.PipeSpecificationsView;
import com.example.models.users.UserEntity;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "pipe_specifications")
public class PipeSpecificationsEntity extends BaseEntity {
    private Double length;
    private Double insulationFactor;
    private Double insulationThickness;

    @JsonView({PipeSpecificationsView.class})
    @ManyToOne
    @JoinColumn(name="pipe_size_id")
    public PipeSizeEntity pipeSize;

    @Basic
    @Column(name = "length")
    public Double getLength() {
        return length;
    }

    public void setLength(Double length) {
        this.length = length;
    }

    @Basic
    @Column(name = "insulation_factor")
    public Double getInsulationFactor() {
        return insulationFactor;
    }

    public void setInsulationFactor(Double insulationFactor) {
        this.insulationFactor = insulationFactor;
    }

    @Basic
    @Column(name = "insulation_thickness")
    public Double getInsulationThickness() {
        return insulationThickness;
    }

    public void setInsulationThickness(Double insulationThickness) {
        this.insulationThickness = insulationThickness;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PipeSpecificationsEntity that = (PipeSpecificationsEntity) o;
        return id == that.id &&
                Objects.equals(length, that.length) &&
                Objects.equals(insulationFactor, that.insulationFactor) &&
                Objects.equals(insulationThickness, that.insulationThickness);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, length, insulationFactor, insulationThickness);
    }
}
