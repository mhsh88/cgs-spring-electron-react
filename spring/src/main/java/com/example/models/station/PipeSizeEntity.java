package com.example.models.station;

import com.example.dtos.station.PipeSizeView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "pipe_size")
public class PipeSizeEntity extends BaseEntity {

    private String name;
    private Double outerDiameter;
    private Double wallThickness;


    @JsonView({PipeSizeView.class})
    @OneToMany(mappedBy="pipeSize")
    public List<PipeSpecificationsEntity> pipeSpecifications;

    @JsonView
    @OneToMany(mappedBy = "pipeSize")
    public List<RunsEntity> runs;

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @Basic
    @Column(name = "outer_diameter")
    public Double getOuterDiameter() {
        return outerDiameter;
    }

    public void setOuterDiameter(Double outerDiameter) {
        this.outerDiameter = outerDiameter;
    }

    @Basic
    @Column(name = "wall_thickness")
    public Double getWallThickness() {
        return wallThickness;
    }

    public void setWallThickness(Double wallThickness) {
        this.wallThickness = wallThickness;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PipeSizeEntity that = (PipeSizeEntity) o;
        return id == that.id &&
                Objects.equals(outerDiameter, that.outerDiameter) &&
                Objects.equals(wallThickness, that.wallThickness);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, outerDiameter, wallThickness);
    }
}
