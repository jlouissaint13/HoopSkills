package com.backend.Authentication;

import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private final LoginRepo loginRepo;
    public LoginService(LoginRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    public boolean Login(String email,String password) {
        return this.loginRepo.findByEmail(email).equals(password);
    }
}
