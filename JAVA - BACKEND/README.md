# Java Servlet

This repository contains the source code for a Java Servlet that implements a simple REST API for a fintech B2B Invoice Management Application. The servlet is deployed on a Tomcat server and provides endpoints for creating, reading, updating, and deleting invoices. It also provides endpoints for generating reports and performing other related tasks.

---

## Project Structure
The project is structured as follows:

- <b>Main</b> : This directory contains the Java source code for the servlet.
- <b>Requirements</b> : This file lists the required things like Tomcat server, sql connector, etc.
- <b>README.md</b> : This file provides an overview of the project and its objectives.
- <b>Servers</b> : This directory contains the Tomcat server.

## Requirements
The project requires the following things to be installed:

- Eclipse IDE
- Tomcat Server
- MySQL Server
- MySQL Connector
- Postman

## Project Overview
The project consists of several steps. Each milestone focuses on a specific task and builds upon the previous one. The milestones are as follows:

1. <b>[Database Setup]</b>: In this milestone, we create a database and tables for storing invoice data. We also populate the tables with sample data.

2. <b>[Servlet Setup]</b>: This milestone involves setting up the servlet and configuring it to connect to the database. We also create a Java class for representing an invoice and perform CRUD operations on the database using the servlet.

3. <b>[API Endpoints]</b>: In this milestone, we create REST API endpoints for performing CRUD operations on the invoices. We also create endpoints for generating reports and performing other related tasks.

## Conclusion
This project demonstrates how to create a Java Servlet and implement a REST API for performing CRUD operations on a database. It also shows how to deploy the servlet on a Tomcat server and test the API endpoints using Postman.