package com.backend.Video;

import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@Repository
public interface VideoRepo extends CrudRepository<VideoModel,Long> {

@Query("select v.video_url from VideoModel v where v.position = :position")
List<String> findAllByPosition(@Param("position")String position);

}
