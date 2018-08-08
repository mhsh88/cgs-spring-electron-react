package com.example.models.station;

import core.hosSein.core.model.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "burners", schema = "cgs", catalog = "")
public class BurnersEntity extends BaseEntity {

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BurnersEntity that = (BurnersEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
