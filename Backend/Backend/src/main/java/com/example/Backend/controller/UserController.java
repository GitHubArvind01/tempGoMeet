package com.example.Backend.controller;

import com.example.Backend.model.User;
import com.example.Backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

        @PostMapping("/signup")
        public String signup(@RequestBody User user) {
        System.out.println("Received signup: " + user.getEmail());

        User existing = userRepository.findByEmail(user.getEmail());
        if (existing != null) {
            return "Email already exists";
        }
        userRepository.save(user);
        return "Signup successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return "Login successful";
        }
        return "Invalid email or password";
    }
}
