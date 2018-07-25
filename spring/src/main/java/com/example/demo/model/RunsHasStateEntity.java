package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "runs_has_state", schema = "cgs", catalog = "")
public class RunsHasStateEntity {
    private int id;
    private Double debi;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
        RunsHasStateEntity that = (RunsHasStateEntity) o;
        return id == that.id &&
                Objects.equals(debi, that.debi);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, debi);
    }
}
