package com.example.models.station;

import com.example.dtos.station.RunsView;
import com.fasterxml.jackson.annotation.JsonView;
import core.hosSein.core.model.BaseEntity;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "runs")
public class RunsEntity extends BaseEntity {
    private Double length;

    @JsonView
    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
            name="runs_condition"
            , joinColumns={
            @JoinColumn(name="runs_id", nullable=false)
    }
            , inverseJoinColumns={
            @JoinColumn(name="condition_id", nullable=false)
    })
    @LazyCollection(LazyCollectionOption.FALSE)
    public List<RunsHasConditionEntity> runsHasCondition;

    @JsonView(RunsView.class)
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RunsEntity that = (RunsEntity) o;
        return id == that.id &&
                Objects.equals(length, that.length);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, length);
    }
}
