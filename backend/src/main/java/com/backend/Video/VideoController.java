package com.backend.Video;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Video")
@CrossOrigin("https://localhost:5173")
public class VideoController {
    @PostMapping("/Request")
    public String getVideoUrls() {
        return null;
    }

}
