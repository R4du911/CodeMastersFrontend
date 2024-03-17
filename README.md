# MHP Desk Booking App

## 🚀 Description

This is an application that allows employees to book desks and meeting rooms at the office. Once logged in, they can see a map of the office and choose the desired booking location by simply clicking on it and choosing from one of the available time slots. Users can also view their booking history, while the administrator has access to the information of all employees.

## 🖥️ Technologies
* `Angular`
* `Typescript`
* `HTML & SCSS`
* `Spring Boot`
* `SQL Server`
* `Java`
* `Python`

## 🛠️ Prerequisites:

Java 11 or higher

Node.js and npm installed

Angular CLI installed


## 🗝️ Backend architecture


* 2 Microservices
   * Java - responsible for the business logic and interacting with the   frontend
   * Python - integrates AI component through an endpoint called in the Java 
microservice

     
## 🗝️ API architecture


The following is the top-level directory structure:
* Domain
   * Entities - persist information in the database
   * Mapper - converts entities to models and reverse
   * Models - consist of Data Transfer Objects
* Repository - store models in database
* Service - consist in business logic layer
* Controller - this is presentation layer,where are defined endpoints
* Config - contain the configuration files for the entire application
	
⚙️ Database layer: The database layer stores data in a structured format that can be easily accessed and queried by the application layer.The application layer sends requests for data to the database layer through the data access layer. 

⚙️ Data layer: The data access layer is responsible for interacting with the data storage system, such as a database or file system.This will contain all entities, enums, exceptions, interfaces, types and logic specific to this layer.It provides an interface for the application layer to read and write data to the storage system.

⚙️ Business logic layer: This layer is responsible for implementing the business logic of the software system. It receives data from the presentation layer, processes it, and sends it to the data access layer for storage.This contains the interfaces of the services, that are used in the API layer, the services implementation, all the helpers classes, custom exceptions, guard clauses, domain events, handlers, basically all the business of the application.

⚙️ Presentation layer: The presentation layer is the topmost layer of a software system, responsible for rendering user interfaces and interacting with users. It communicates with the business logic layer to receive and send data.

⚙️ Client: The client refers to the user interface or the front-end of the application. It is responsible for presenting data and information to the user and for accepting user inputs.



## 🗝️ WEB architecture
The following is the top-level directory structure:

* Assets - global static assets like photos, svgs
* App - contains following folders:
    * Apps:contains all the components from the application,organized in modules, which enables lazy loading.
    * Auth:contains the login and register component
    * Core:contains the layout with the header and routing to all components
    * Utils:contains the error handling, interceptor and guard


![alt text](https://github.com/Piciorus/Photos/blob/main/diagram1.png)<br/><br/><br/>
