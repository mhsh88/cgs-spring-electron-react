package com.example.models.station;

import core.hosSein.core.model.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "runs", schema = "cgs", catalog = "")
public class RunsEntity extends BaseEntity {
    private Double length;


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
