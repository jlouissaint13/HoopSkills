package com.backend.Authentication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepo extends CrudRepository<RegisterModel,Long> {

    @Override
    <S extends RegisterModel> S save(S entity);
}
