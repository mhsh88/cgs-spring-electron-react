package com.example.models.station;

import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "runs_has_condition")
public class RunsHasConditionEntity extends BaseEntity {
    private Double debi;


    @JsonView
    @ManyToMany(mappedBy = "runsHasCondition")
    public List<RunsEntity> runs;

    @Basic
    @Column(name = "debi")
    public Double getDebi() {
        return debi;
    }

    public void setDebi(Double debi) {
        this.debi = debi;
    }

    @Basic
    @Column(name="text")
    public String getText(){
        return String.valueOf(Math.round(this.debi));
    }
    public void setText(String text){

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
