package com.example.taskmanager.repository;

import com.example.taskmanager.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    long countByStatus(TaskStatus status);

    long countByDueDateBeforeAndStatusNot(LocalDate date, TaskStatus status);
    List<Task> findByAssignedToEmail(String email);
}