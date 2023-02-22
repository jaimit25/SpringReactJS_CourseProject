//to run jar file in the target folder, instead of compiling this whole app
// cd desktop && sudo java -jar server-0.0.1-SNAPSHOT.jar 

package com.springapi.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapi.server.model.Course;
import com.springapi.server.model.User;
import com.springapi.server.model.loginData;
import com.springapi.server.service.courseService;

import java.awt.PageAttributes.MediaType;
import java.util.*;

@CrossOrigin({"http://localhost:3000"})
@RestController
@RequestMapping("api/v1/")
public class HttpController {
	
	
	courseService service;
	
	@Autowired
	public HttpController(courseService service) {
		this.service = service;
	}
	
	
	
	@GetMapping("/")
	public String home(){
		return "This is Default EndPoint";		
	}
	
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.service.getCourses();
	}
	
	@GetMapping("/courses/{id}")
	public Course getSingleCourse(@PathVariable long id) {
		return this.service.getSingleCourse(id);
	}
	
	@PostMapping("/course")
	public Boolean insertCourse(@RequestBody Course course) {
		return this.service.insertCourse(course);
	}
	
	@PutMapping("/course")
	public Boolean updateCourse( @RequestBody Course course) {
		return this.service.updateCourse(course.getId(),course);
	}
	
	@DeleteMapping("/courses/{id}")
	public Boolean deleteCourse(@PathVariable long id) {
		return this.service.deleteCourse(id);
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.service.getUsers();
	}
	
	@GetMapping("/users/{id}")
	public User getSingleUser(@PathVariable long id) {
			return this.service.getSingleUser(id);
	}
	
	@PostMapping("/user")
	public Boolean insertUser( @RequestBody User user) {
		return this.service.insertUser(user);
	}	
	
	@PostMapping(value="/user/login")
//	@ResponseBody
	public User insertUser( @RequestBody loginData data) {
		User user = this.service.login(data.email, data.password);		
		return user;
	}
	
	
	
	
	
	
	
	
	
	
	
	
//For reference
	
//	@GetMapping("/home")
//	public String home(){
//		return "This is Home Page";		
//	}
//
//	@GetMapping("/courses")
//	public List<Course> getCourses(){
//		return this.service.getCourses();
//	}
//	
//	@GetMapping("/courses/{id}")
//	public Course getSingleCourse( @PathVariable long id ){
//				return this.service.getSingleCourse(id);
//	}
//	
//	@PostMapping("/course")
//	public Boolean insertCourse( @RequestBody Course course ){
//		return this.service.insertCourse(course);
//	}
	
	
	
}
 