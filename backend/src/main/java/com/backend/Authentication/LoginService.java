package com.backend.Authentication;

public class LoginService {
    private final LoginRepo loginRepo;
    public LoginService(LoginRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    public boolean Login(String email,String password) {
        return loginRepo.findByEmail(email).toString().equals(password);
    }
}
