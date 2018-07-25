package com.example.models.station;

import com.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "pipe_size", schema = "cgs", catalog = "")
public class PipeSizeEntity extends BaseEntity {
    private Double outerDiameter;
    private Double wallThickness;


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
