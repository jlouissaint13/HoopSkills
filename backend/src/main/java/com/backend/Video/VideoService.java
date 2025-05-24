package com.backend.Video;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VideoService {
    private final VideoRepo videoRepo;
    public VideoService(VideoRepo videoRepo) {
        this.videoRepo = videoRepo;
    }

    public ResponseEntity<List<String>> returnVideoUrls(String position) {
        if (this.videoRepo.findAllByPosition("pg").isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.ok(this.videoRepo.findAllByPosition("pg"));

    }
}
