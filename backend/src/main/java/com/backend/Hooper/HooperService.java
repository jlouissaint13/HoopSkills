package com.backend.Hooper;

import org.springframework.stereotype.Service;

@Service
public class HooperService {

    private final HooperRepo hooperRepo;

    public HooperService(HooperRepo hooperRepo) {
        this.hooperRepo = hooperRepo;
    }

}


