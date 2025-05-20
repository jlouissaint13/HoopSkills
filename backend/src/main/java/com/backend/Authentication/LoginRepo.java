package com.backend.Authentication;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface LoginRepo extends CrudRepository<LoginModel,Long> {

    //Returns password from email
    @Query("select l.password from LoginModel l where l.email = :email ")
    String findByEmail(@Param("email")String email);


    //Returns password from username
    @Query("select l.password from LoginModel l where l.username = :username")
    String findByUsername(@Param("username")String username);

    //Remember to use the object when returning all
    List<LoginModel> findAllByEmail(String email);
}
