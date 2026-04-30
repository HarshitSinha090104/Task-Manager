package com.example.taskmanager.service;

import com.example.taskmanager.entity.User;
import com.example.taskmanager.repository.UserRepository;
import com.example.taskmanager.config.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repo;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;


    public String signup(User user) {


        if (user.getEmail() == null || user.getPassword() == null || user.getName() == null) {
            throw new RuntimeException("All fields are required");
        }


        if (repo.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }


        user.setEmail(user.getEmail().trim());
        user.setName(user.getName().trim());


        user.setPassword(passwordEncoder.encode(user.getPassword().trim()));

        repo.save(user);

        return "User created successfully";
    }


    public String login(String email, String password) {

        if (email == null || password == null) {
            throw new RuntimeException("Email or Password missing");
        }

        User user = repo.findByEmail(email.trim())
                .orElseThrow(() -> new RuntimeException("User not found"));

        
        if (!passwordEncoder.matches(password.trim(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(user.getEmail(), user.getRole().name());
    }
}