package ca.mcgill.ecse321.eventregistration.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Person {
    @Id
    private String name;
}
