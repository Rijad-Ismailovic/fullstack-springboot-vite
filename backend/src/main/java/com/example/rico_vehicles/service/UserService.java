package com.example.rico_vehicles.service;

import com.example.rico_vehicles.dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);

    UserDto getUserByEmail(String email);

    boolean authenticateUser(String email, String password);
}
