package com.example.models.station;

import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "runs_has_condition")
public class RunsHasConditionEntity extends BaseEntity {
    private Double debi;


    @Basic
    @Column(name = "debi")
    public Double getDebi() {
        return debi;
    }

    public void setDebi(Double debi) {
        this.debi = debi;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RunsHasConditionEntity that = (RunsHasConditionEntity) o;
        return id == that.id &&
                Objects.equals(debi, that.debi);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, debi);
    }
}
