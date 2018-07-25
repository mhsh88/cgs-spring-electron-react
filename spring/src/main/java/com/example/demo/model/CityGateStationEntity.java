package com.example.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "city_gate_station", schema = "cgs", catalog = "")
public class CityGateStationEntity {
    private int id;
    private String province;
    private String city;
    private String state;
    private String region;
    private Double nominalCapacity;
    private String address;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "province")
    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    @Basic
    @Column(name = "city")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "state")
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Basic
    @Column(name = "region")
    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    @Basic
    @Column(name = "nominal_capacity")
    public Double getNominalCapacity() {
        return nominalCapacity;
    }

    public void setNominalCapacity(Double nominalCapacity) {
        this.nominalCapacity = nominalCapacity;
    }

    @Basic
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CityGateStationEntity that = (CityGateStationEntity) o;
        return id == that.id &&
                Objects.equals(province, that.province) &&
                Objects.equals(city, that.city) &&
                Objects.equals(state, that.state) &&
                Objects.equals(region, that.region) &&
                Objects.equals(nominalCapacity, that.nominalCapacity) &&
                Objects.equals(address, that.address);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, province, city, state, region, nominalCapacity, address);
    }
}
