package com.example.rico_vehicles.service.impl;

import com.example.rico_vehicles.dto.VehicleDto;
import com.example.rico_vehicles.entity.Vehicle;
import com.example.rico_vehicles.exception.ResourceNotFoundException;
import com.example.rico_vehicles.mapper.VehicleMapper;
import com.example.rico_vehicles.repository.VehicleRepository;
import com.example.rico_vehicles.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private VehicleRepository vehicleRepository;

    @Override
    public VehicleDto createVehicle(VehicleDto vehicleDto) {
        Vehicle vehicle = VehicleMapper.mapToVehicle(vehicleDto);
        Vehicle savedVehicle = vehicleRepository.save(vehicle);
        return VehicleMapper.mapToVehicleDto(savedVehicle);
    }

    @Override
    public VehicleDto getVehicleById(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle with given ID does not exist: " + vehicleId));
        return VehicleMapper.mapToVehicleDto(vehicle);
    }

    @Override
    public List<VehicleDto> getAllVehicles(){
        List<Vehicle> vehicles = vehicleRepository.findAll();
        return vehicles.stream()
                .map( (vehicle) -> VehicleMapper.mapToVehicleDto(vehicle))
                .collect(Collectors.toList());
    }

    @Override
    public VehicleDto updateVehicle(Long vehicleId, VehicleDto updatedVehicle) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle with given ID does not exist: " + vehicleId));

        vehicle.setTitle(updatedVehicle.getTitle());
        vehicle.setManufacturer(updatedVehicle.getManufacturer());
        vehicle.setModel(updatedVehicle.getModel());
        vehicle.setYearOfManufacture(updatedVehicle.getYearOfManufacture());

        Vehicle updatedVehicleObj = vehicleRepository.save(vehicle);

        return VehicleMapper.mapToVehicleDto(updatedVehicleObj);

    }

    @Override
    public void deleteVehicle(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle with given ID does not exist: " + vehicleId));
        vehicleRepository.deleteById(vehicleId);
    }
}
