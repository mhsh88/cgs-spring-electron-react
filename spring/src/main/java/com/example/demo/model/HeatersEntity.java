package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "heaters", schema = "cgs", catalog = "")
public class HeatersEntity {
    private int id;
    private Double efficiency;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
