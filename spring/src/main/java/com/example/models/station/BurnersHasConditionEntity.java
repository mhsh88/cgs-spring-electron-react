package com.example.models.station;

import com.example.constants.station.BurnersHasConditionConstants;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "burners_has_condition", schema = "cgs", catalog = "")
public class BurnersHasConditionEntity extends BaseEntity implements BurnersHasConditionConstants {
    private Double oxygenPercent;
    private Double flueGasTemprature;


    @Basic
    @Column(name = "oxygen_percent")
    public Double getOxygenPercent() {
        return oxygenPercent;
    }

    public void setOxygenPercent(Double oxygenPercent) {
        this.oxygenPercent = oxygenPercent;
    }

    @Basic
    @Column(name = "flue_gas_temprature")
    public Double getFlueGasTemprature() {
        return flueGasTemprature;
    }

    public void setFlueGasTemprature(Double flueGasTemprature) {
        this.flueGasTemprature = flueGasTemprature;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BurnersHasConditionEntity that = (BurnersHasConditionEntity) o;
        return id == that.id &&
                Objects.equals(oxygenPercent, that.oxygenPercent) &&
                Objects.equals(flueGasTemprature, that.flueGasTemprature);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, oxygenPercent, flueGasTemprature);
    }
}
