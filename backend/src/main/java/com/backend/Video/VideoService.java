package com.backend.Video;

import java.util.List;

public class VideoService {
    private final VideoRepo videoRepo;
    public VideoService(VideoRepo videoRepo) {
        this.videoRepo = videoRepo;
    }

    public List<String> returnVideoUrls(String position) {
        return this.videoRepo.findAllByPosition(position);
    }
}
