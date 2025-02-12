package com.example.rico_vehicles.service;

import com.example.rico_vehicles.dto.VehicleDto;

import java.util.List;

public interface VehicleService {

    VehicleDto createVehicle(VehicleDto vehicleDto);

    VehicleDto getVehicleById(Long vehicleId);

    List<VehicleDto> getAllVehicles();

    VehicleDto updateVehicle(Long vehicleId, VehicleDto updatedVehicle);

    void deleteVehicle(Long vehicleId);
}
