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
    List<LoginModel> findByEmail(@Param("email")String email);


    //Returns password from username
    @Query("select l.password from LoginModel l where l.username = :username")
    LoginModel findByUsername(@Param("username")String username);
}
