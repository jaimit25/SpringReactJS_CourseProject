package com.springapi.server.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.springapi.server.dao.mongoRepo.CourseMongoRepo;
import com.springapi.server.dao.mongoRepo.UserMongoRepo;
import com.springapi.server.model.Course;
import com.springapi.server.model.User;



//check src/main/resources/application.properties for database connection

@Repository("mongodb")
public class DaoMongoImpl implements Dao {
	
	
	//To access database we can use interface -"MongoRepository" stored in com.springapi.server.dao.mongoRepo
	@Autowired
	private CourseMongoRepo courseRepo;
	@Autowired
	private UserMongoRepo userRepo;			
	
	public DaoMongoImpl() {
		System.out.print("MONGO DB DATABASE IS INITIALIZED");
	}

	@Override
	public List<Course> getCourses() {
		
		
		List<Course> course_list = courseRepo.findAll();	
		return course_list;
	}

	@Override
	public Course getSingleCourse(long id) {
		Course course = this.courseRepo.findById(id).get();
		if(course == null ) return null;		
		return course;
	}

	@Override
	public Boolean insertCourse(Course course) {
		
		try {
			//return object when successfully
			Course cr = this.courseRepo.save(course);
			if(cr != null){
				return true;
			}
			}
			catch(Exception e) {
				return false;
			}							
		
		return false;
	}

	
	
	@Override
	public Boolean updateCourse(long id, Course course) {
		
		Course cr = this.courseRepo.findById(id).get();
		
		//If document does not exist
		if(cr == null) return false;	
		
		//If Exist
		courseRepo.save(course);						
		return true;
	}

	@Override
	public Boolean deleteCourse(long id) {
		courseRepo.deleteById(id);
		return true;
	}

	@Override
	public List<User> getUsers() {
		
		List<User> user_list = this.userRepo.findAll();		
		return user_list;
	}

	@Override
	public User getSingleUser(long id) {
	
		User usr = this.userRepo.findById(id).get();
		if(usr == null ) return null;		
		return usr;
	}
	
	@Override
	public Boolean insertUser(User user) {		
		try {
			//return object when successfully
			User usr = this.userRepo.save(user);
			if(usr != null){
				return true;
				}
			}
			catch(Exception e) {
				return false;
			}									
		return false;
	}

	@Override
	public User login(String email, String password) {
		List<User> user_list = userRepo.findAll();	
		int n = user_list.size();
		
		System.out.println("Email to Check : "+email);
		for(int i = 0 ; i < n ; i++) {
			User user = user_list.get(i);
			String chkEmail =user.getEmail();	
			if(chkEmail.equals(email)) {
				System.out.println("Email received : "+user.getEmail());
				System.out.println("************************"+user.getName()+"****************");		
				return user;
			}
		}
		System.out.println("************************NULL**********************");		
		return null;
		
	}

}
