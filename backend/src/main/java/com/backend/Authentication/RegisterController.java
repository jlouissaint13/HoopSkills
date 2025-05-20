package com.backend.Authentication;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//TODO Validation
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("Registration")
public class RegisterController {
    private final RegisterService registerService;
    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    //TODO implement return for on failure
    @PostMapping("Request")
    public ResponseEntity registerRequest(@RequestBody RegisterModel registerModel) {
        this.registerService.registration(registerModel);
        return new ResponseEntity(HttpStatus.OK);
    }

}
