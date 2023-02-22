package com.springapi.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springapi.server.model.Course;
import com.springapi.server.model.User;


public interface courseService {
			
	public List<Course> getCourses();
	
	public Course getSingleCourse(long id);
	
	public Boolean insertCourse(Course course);
	
	public Boolean updateCourse(long id, Course course);
	
	public Boolean deleteCourse(long id);
	
	public List<User> getUsers();
	
	public User getSingleUser(long id);
	
	public Boolean insertUser(User user);
	
	public User login(String email, String password);
	
}
