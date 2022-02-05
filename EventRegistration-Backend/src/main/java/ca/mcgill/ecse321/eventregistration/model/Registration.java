package ca.mcgill.ecse321.eventregistration.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
public class Registration {
    @Id
    private int id;
    
    @ManyToOne(optional = false)
    private Person person;
    
    @ManyToOne(optional = false)
    private Event event;
}
