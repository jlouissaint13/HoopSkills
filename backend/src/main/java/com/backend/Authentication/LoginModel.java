package com.backend.Authentication;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "hoopers")
@Getter
@Setter
public class LoginModel {

    //temporary until we implement real authentication
    private static String userEmail;



    @Id
    private Long hooperID;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "username")
    private String username;



     static void setUserEmail(String userEmail) {
        LoginModel.userEmail = userEmail;
    }
    static String getUserEmail() {
         return userEmail;
    }
}

