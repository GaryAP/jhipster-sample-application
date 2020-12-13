package com.mycompany.myapp.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Facility.
 */
@Entity
@Table(name = "facility")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Facility implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "facilirty_name", nullable = false)
    private String facilirtyName;

    @OneToMany(mappedBy = "facility")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Room> rooms = new HashSet<>();

    @OneToMany(mappedBy = "facility")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Resident> residents = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFacilirtyName() {
        return facilirtyName;
    }

    public Facility facilirtyName(String facilirtyName) {
        this.facilirtyName = facilirtyName;
        return this;
    }

    public void setFacilirtyName(String facilirtyName) {
        this.facilirtyName = facilirtyName;
    }

    public Set<Room> getRooms() {
        return rooms;
    }

    public Facility rooms(Set<Room> rooms) {
        this.rooms = rooms;
        return this;
    }

    public Facility addRoom(Room room) {
        this.rooms.add(room);
        room.setFacility(this);
        return this;
    }

    public Facility removeRoom(Room room) {
        this.rooms.remove(room);
        room.setFacility(null);
        return this;
    }

    public void setRooms(Set<Room> rooms) {
        this.rooms = rooms;
    }

    public Set<Resident> getResidents() {
        return residents;
    }

    public Facility residents(Set<Resident> residents) {
        this.residents = residents;
        return this;
    }

    public Facility addResident(Resident resident) {
        this.residents.add(resident);
        resident.setFacility(this);
        return this;
    }

    public Facility removeResident(Resident resident) {
        this.residents.remove(resident);
        resident.setFacility(null);
        return this;
    }

    public void setResidents(Set<Resident> residents) {
        this.residents = residents;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Facility)) {
            return false;
        }
        return id != null && id.equals(((Facility) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Facility{" +
            "id=" + getId() +
            ", facilirtyName='" + getFacilirtyName() + "'" +
            "}";
    }
}
