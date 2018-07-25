package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "runs", schema = "cgs", catalog = "")
public class RunsEntity {
    private int id;
    private Double length;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
