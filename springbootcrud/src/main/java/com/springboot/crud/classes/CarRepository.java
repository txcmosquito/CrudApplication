package com.springboot.crud.classes;

import org.springframework.data.jpa.repository.JpaRepository;

// CarRepository.java
public interface CarRepository extends JpaRepository<Car, Long> {
}

