package ca.mcgill.ecse321.eventregistration.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Event {
    private String name;
    private Date date;
    private Time startTime;
    private Time endTime;
    
    @Id
    public String getName() {
        return this.name;
    }
    
    public void setName(String value) {
        this.name = value;
    }
    
    public Date getDate() {
        return this.date;
    }
    
    public void setDate(Date value) {
        this.date = value;
    }
    
    public Time getStartTime() {
        return this.startTime;
    }
    
    public void setStartTime(Time value) {
        this.startTime = value;
    }
    
    public Time getEndTime() {
        return this.endTime;
    }
    
    public void setEndTime(Time value) {
        this.endTime = value;
    }
}
