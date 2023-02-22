package com.springapi.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("courses") // collection name used in mongo db
public class Course {
	@Id
	private long id;
	private String title;
	private String description;
	private String link;
	private String author;
	
	public Course(long id, String title, String description, String link, String author) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.link = link;
		this.author = author;
	}
	

	public Course() {
		super();
		
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	
	
}
