package com.springapi.server.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.springapi.server.dao.Dao;
import com.springapi.server.model.Course;
import com.springapi.server.model.User;


@Service
public class CourseServiceImpl implements courseService{
		
	Dao dao;
	
	List<Course> course_list;
	List<User> user_list;
	
	@Autowired // use mongo-db dao object bean
	public CourseServiceImpl(@Qualifier("mongodb") Dao dao) {
		this.dao = dao;		
	}
	@Override
	public List<Course> getCourses() {		
		return this.dao.getCourses();
	}

	@Override
	public Course getSingleCourse(long id) {		
		return this.dao.getSingleCourse(id);
	}

	@Override
	public Boolean insertCourse(Course course) {		
		return this.dao.insertCourse(course);
	}

	@Override
	public Boolean updateCourse(long id, Course course) {	
		return this.dao.updateCourse(id, course);
	}

	@Override
	public Boolean deleteCourse(long id) {
	
		return this.dao.deleteCourse(id);
	}

	@Override
	public List<User> getUsers() {
		
		return this.dao.getUsers();
	}

	@Override
	public User getSingleUser(long id) {
		
		return this.dao.getSingleUser(id);
	}

	@Override
	public Boolean insertUser(User user) {		
		return this.dao.insertUser(user);
	}
	@Override
	public User login(String email, String password) {
		// TODO Auto-generated method stub
		return this.dao.login(email, password);
	}

}