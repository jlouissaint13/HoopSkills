package com.backend.Authentication;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Login")
public class LoginController {
    private final LoginService loginService;
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("Request")
    public ResponseEntity loginRequest(String email) {

        //TODO put real func here
        if (this.loginService.Login("jared@gmail.com","password")) return new ResponseEntity<>(HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }



}
