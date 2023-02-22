package com.springapi.server.dao.mongoRepo;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.springapi.server.model.User;

public interface UserMongoRepo extends MongoRepository<User, Long>  {

}
