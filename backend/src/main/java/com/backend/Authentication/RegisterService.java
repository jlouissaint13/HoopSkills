package com.backend.Authentication;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final RegisterRepo registerRepo;

    public RegisterService(RegisterRepo registerRepo) {
        this.registerRepo = registerRepo;
    }

    public void registration(RegisterModel registerModel) {
        this.registerRepo.save(registerModel);
    }
}
