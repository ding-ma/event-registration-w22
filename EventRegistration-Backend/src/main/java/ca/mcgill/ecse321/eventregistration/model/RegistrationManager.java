package ca.mcgill.ecse321.eventregistration.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class RegistrationManager {
    private Set<Person> persons;
    private Set<Registration> registrations;
    private Set<Event> events;
    private int id;
    
    @OneToMany(cascade = {CascadeType.ALL})
    public Set<Person> getPersons() {
        return this.persons;
    }
    
    public void setPersons(Set<Person> personss) {
        this.persons = personss;
    }
    
    @OneToMany(cascade = {CascadeType.ALL})
    public Set<Registration> getRegistrations() {
        return this.registrations;
    }
    
    public void setRegistrations(Set<Registration> registrationss) {
        this.registrations = registrationss;
    }
    
    @OneToMany(cascade = {CascadeType.ALL})
    public Set<Event> getEvents() {
        return this.events;
    }
    
    public void setEvents(Set<Event> eventss) {
        this.events = eventss;
    }
    
    @Id
    public int getId() {
        return this.id;
    }
    
    public void setId(int value) {
        this.id = value;
    }
}
