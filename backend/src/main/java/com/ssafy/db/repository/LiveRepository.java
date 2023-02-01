package com.ssafy.db.repository;

import com.ssafy.db.entity.Live;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LiveRepository extends JpaRepository<Live, Long> {
    Optional<List<Live>> findByUser_IdAndIsLiveFalseOrderByCreatedAtDesc(long sellerId);
}
