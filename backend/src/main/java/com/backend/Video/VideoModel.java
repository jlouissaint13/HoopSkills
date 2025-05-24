package com.backend.Video;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "video_urls")
@Getter
@Setter
public class VideoModel {
    @Id
    long id;

    String video_url;

    String position;

    String archetype;
}