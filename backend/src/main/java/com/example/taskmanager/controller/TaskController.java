package com.example.taskmanager.controller;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.entity.TaskStatus;
import com.example.taskmanager.entity.User;
import com.example.taskmanager.repository.TaskRepository;
import com.example.taskmanager.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskRepository repo;
    private final UserRepository userRepository;

    @PostMapping
    public Task create(@RequestBody Task t) {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        t.setAssignedTo(user);

        return repo.save(t);
    }


    @PutMapping("/{id}/status")
    public Task updateStatus(@PathVariable Long id, @RequestParam String status) {
        Task task = repo.findById(id).orElseThrow();

        task.setStatus(TaskStatus.valueOf(status));

        return repo.save(task);
    }


    @GetMapping
    public List<Task> getAll() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        var authorities = SecurityContextHolder.getContext()
                .getAuthentication()
                .getAuthorities()
                .toString();


        if (authorities.contains("ADMIN")) {
            return repo.findAll();
        }


        return repo.findByAssignedToEmail(email);
    }
}