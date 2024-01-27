package com.springboot.crud;

import com.springboot.crud.classes.Car;
import com.springboot.crud.classes.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// CarController.java
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);
        return optionalCar.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        Car savedCar = carRepository.save(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car car) {
        if (!carRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        car.setId(id);
        Car updatedCar = carRepository.save(car);
        return ResponseEntity.ok(updatedCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        if (!carRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        carRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

