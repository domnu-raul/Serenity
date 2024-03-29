package com.hackaton.serenity.repository;


import com.hackaton.serenity.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    public Optional<UserModel> findByEmail(String email);
    public Optional<UserModel> findById(Long id);
    public UserModel getById(Long id);
    boolean existsByEmail(String email);
}