package com.example.taskmanager.controller;

import com.example.taskmanager.entity.*;
import com.example.taskmanager.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectRepository repo;

    @PostMapping
    public Project create(@RequestBody Project project) {

        project.setStatus(ProjectStatus.TODO);

        return repo.save(project);
    }

    @GetMapping
    public List<Project> getAll() {
        return repo.findAll();
    }

    @PutMapping("/{id}/status")
    public Project updateStatus(@PathVariable Long id,
                                @RequestParam String status) {

        Project project = repo.findById(id).orElseThrow();

        project.setStatus(ProjectStatus.valueOf(status));

        return repo.save(project);
    }
}