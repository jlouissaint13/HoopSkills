package com.backend.Video;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Video")
@CrossOrigin("https://localhost:5173")
public class VideoController {
    private final VideoService videoService;
    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/Request")
    public List<String> getVideoUrls(String position) {
        return this.videoService.returnVideoUrls("pg").getBody();
    }

}
