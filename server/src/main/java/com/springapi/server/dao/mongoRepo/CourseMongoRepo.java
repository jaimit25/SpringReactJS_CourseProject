package com.springapi.server.dao.mongoRepo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.springapi.server.model.Course;
import com.springapi.server.model.User;


public interface CourseMongoRepo extends MongoRepository<Course, Long> {

}




