package com.example.rico_vehicles.repository;

import com.example.rico_vehicles.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
