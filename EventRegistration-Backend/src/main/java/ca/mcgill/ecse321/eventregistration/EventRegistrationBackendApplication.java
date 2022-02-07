package ca.mcgill.ecse321.eventregistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EventRegistrationBackendApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(EventRegistrationBackendApplication.class, args);
    }
    
    @GetMapping("/")
    public String greeting(){
        return "Hello world from github actions";
    }
}
