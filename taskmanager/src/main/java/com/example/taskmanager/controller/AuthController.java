package com.example.taskmanager.controller;

import com.example.taskmanager.dto.LoginRequest;
import com.example.taskmanager.entity.User;
import com.example.taskmanager.repository.UserRepository;
import com.example.taskmanager.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService service;
    private final UserRepository userRepository;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return service.signup(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest request) {

        String token = service.login(request.getEmail(), request.getPassword());

        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();

        return Map.of(
                "token", token,
                "role", user.getRole().name()
        );
    }
}