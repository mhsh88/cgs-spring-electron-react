package com.example.models.station;

import com.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "heaters", schema = "cgs", catalog = "")
public class HeatersEntity extends BaseEntity {
    private Double efficiency;


    @Basic
    @Column(name = "Efficiency")
    public Double getEfficiency() {
        return efficiency;
    }

    public void setEfficiency(Double efficiency) {
        this.efficiency = efficiency;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HeatersEntity that = (HeatersEntity) o;
        return id == that.id &&
                Objects.equals(efficiency, that.efficiency);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, efficiency);
    }
}
