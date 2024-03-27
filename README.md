[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_sj3YxiR)
# Homework Assignment: Country Quiz Backend API

## Learning Objectives

This assignment will give you hands-on experience designing and documenting a backend API using Node.js, Express.js, and SwaggerHub. You will learn to analyze existing code, define user stories, design API specifications, and create a sequence diagram.

## Technologies

 - Node.js & Express.js
 - RESTcountries API: https://restcountries.com/#api-endpoints-using-this-project
 - SwaggerHub
 - Draw.io (or anything similar)

## Introduction

Backend APIs power modern web and mobile applications, providing data and functionality. A well-structured quiz application relies on a backend API to serve quiz questions, validate user responses, and potentially manage user scores and progress.

## Instructions

1.  **App Requirements: Analyze the Express.js File (HW2.js)**

   Carefully study the provided files & identify the following:
    - API routes (endpoints) and their HTTP methods
    - The purpose of each middleware function
    - The general logic for generating quiz questions and validating answers
   **Write a user story for each endpoint.**



2. **REST Architecture: SwaggerHub Documentation**

   1. Document only the second endpoint  --POST request--  in SwaggerHub. Create a new document in SwaggerHub.
   2. **Carefully** specify the following for each endpoint:
      - HTTP Method
      - Path
      - Parameters
      - Request body
      - Response structures
   3. Verify that your document is error and warning-free.

3. **Sequence Diagrams**

   Provide the sequence diagram of only the second endpoint  --``POST request``--. Your diagram should represent both success and error scenarios for the endpoint. 
Create a sequence diagram that illustrates the flow of interactions between the user, the model, the view, and the controller. Keep in mind that middleware functions are part of the controller and should be represented as self-call(s)


## Deliverables & Submission

 - 2 user stories, 1 sequence diagram, 1 endpoint/Express route documentation.
 - Create a file  containing:
   - The user stories
   - Shareable link to your SwaggerHub documentation.
   - Sequence diagram files (.drawio) or an exported image.
 - Add that file to your GitHub repo
 - Submit your repo to GradeScope
 
## Additional Notes

Consider enhancing the ``error-handling`` in the provided Express.js file for more robust API responses by creating a schema for errors.

## Grading

Your assignment will be evaluated based on the following:

 - User stories written from the perspective of the user
 - Clarity, conciseness, and understandability of the user story
 - How easily can one derive acceptance criteria from the user stories
 - Accuracy and completeness of SwaggerHub documentation
 - Clarity and correctness of the sequence diagram
 - Overall demonstration of understanding of API concepts
