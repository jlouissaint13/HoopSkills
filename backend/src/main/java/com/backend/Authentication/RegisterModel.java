package com.backend.Authentication;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
    @Entity
    @Getter
    @Setter
    @Table(name = "hoopers")
    public class RegisterModel {
        @Id
        private long hooperID;

        @JsonProperty("firstName")
        @Column(name = "first_name")
        private String firstName;

        @JsonProperty("lastName")
        @Column(name = "last_name")
        private String lastName;

        @Column(name = "email")
        private String email;

        @Column(name = "password")
        private String password;

        @Column(name = "username")
        private String username;

        @Column(name = "position")
        private String position;

        @Column(name = "archetype")
        private String archetype;

    }


