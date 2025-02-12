package com.example.rico_vehicles.mapper;

import com.example.rico_vehicles.dto.VehicleDto;
import com.example.rico_vehicles.entity.Vehicle;

public class VehicleMapper {
    public static VehicleDto mapToVehicleDto(Vehicle vehicle){
        return new VehicleDto(
            vehicle.getId(),
            vehicle.getTitle(),
            vehicle.getManufacturer(),
            vehicle.getModel(),
            vehicle.getYearOfManufacture()
        );
    }

    public static Vehicle mapToVehicle(VehicleDto vehicleDto){
        return new Vehicle(
                vehicleDto.getId(),
                vehicleDto.getTitle(),
                vehicleDto.getManufacturer(),
                vehicleDto.getModel(),
                vehicleDto.getYearOfManufacture()
        );
    }
}
