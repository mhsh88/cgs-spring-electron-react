package com.example.models.station;

import com.example.dtos.station.HeatersView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "heaters", schema = "cgs", catalog = "")
public class HeatersEntity extends BaseEntity {
    private Double efficiency;

//    @JsonView(HeatersView.class)
//    @OneToMany(mappedBy = "heaters", cascade = CascadeType.PERSIST,fetch = FetchType.EAGER)
//    public List<BurnersEntity> burners;


    @JsonView
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
    @JoinTable(
            name="heater_burner"
            , joinColumns={
            @JoinColumn(name="heater_id", nullable=false)
    }
            , inverseJoinColumns={
            @JoinColumn(name="burner_id", nullable=false)
    })
    public List<BurnersEntity> burners;


    @JsonView(HeatersView.class)
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
