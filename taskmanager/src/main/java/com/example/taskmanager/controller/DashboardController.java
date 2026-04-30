package com.example.taskmanager.controller;

import com.example.taskmanager.entity.TaskStatus;
import com.example.taskmanager.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final TaskRepository repo;

    @GetMapping
    public Map<String, Long> stats() {

        Map<String, Long> map = new HashMap<>();

        map.put("total", repo.count());
        map.put("completed", repo.countByStatus(TaskStatus.COMPLETED));
        map.put("pending", repo.countByStatus(TaskStatus.TODO));
        map.put("overdue",
                repo.countByDueDateBeforeAndStatusNot(LocalDate.now(), TaskStatus.COMPLETED));

        return map;
    }
}