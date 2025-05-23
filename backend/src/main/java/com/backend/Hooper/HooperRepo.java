package com.backend.Hooper;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HooperRepo extends CrudRepository<HooperModel,Long> {

    List<HooperModel> findAllByEmail(String email);



}
