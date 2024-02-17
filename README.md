# Problem Statement

Create a basic web UI frontend for an application that you previously developed using the Java REST API and MongoDB backend. The application allows users to interact with server records, including creating, displaying, and deleting them. You can find the backend source [code](https://github.com/MunwarAli12/model-java_REST-API_web_application-).

## Requirements

1. **UI Framework**: Choose any UI framework of your choice to build the frontend. Popular options include React.js, Angular, Vue.js.

2. **Functionality**: The frontend should provide the following functionalities:
   - Create a new server record by providing details such as name, ID, language, and framework.
   - Display all server records with their details.
   - Delete a server record by its ID.

3. **Integration**: The frontend should communicate with the backend Java REST API to perform CRUD (Create, Read, Update, Delete) operations on server records stored in the MongoDB database.


## WEB UI Overview

- I have Developed a user-friendly web application using the Angular framework.
- Created to provide an intuitive interface for interacting with the backend Application REST API, available at [Backend Source Code](https://github.com/MunwarAli12/model-java_REST-API_web_application-).
- Angular 13 was utilized for building the frontend, ensuring seamless integration with the Spring Boot backend and MongoDB database.
- Users can easily perform common tasks like adding, deleting, and searching for server records.Ensured a clean and simple design for enhanced usability.

### Technologies and Tools Used:
- `Angular Framework:` `Frontend development.`
- `Java:` `Backend REST API implementation.`
- `MongoDB Database:` `Storage for server records.`
- `Visual Studio Code:` `IDE for Angular development.`
- `Postman:` `Testing API endpoints during development.`

##### End Points,

```javascript
crud operator: http:localhost:8080/
```

| Method | Endpoint                           | Description                               |
|--------|------------------------------------|-------------------------------------------|
| GET    | /findAllServers                   | Retrieve all servers                      |
| GET    | /findServerById/{id}              | Retrieve a server by its ID               |
| GET    | /findServerByFramework/{framework}| Retrieve servers by framework             |
| GET    | /findServerByLanguage/{language}  | Retrieve servers by programming language |
| GET    | /findServerByName/{name}          | Retrieve servers by name                  |
| PUT    | /findAllServers1                  | Retrieve all servers (alternative endpoint)|
| POST   | /addServer                        | Add a new server                          |
| DELETE | /deleteServer/{id}                | Delete a server by its ID                 |

  
### Final Overview:

#### ADD SERVER

![Add _Server](https://user-images.githubusercontent.com/126280146/228459705-4564a6d0-022a-49f3-aad3-6244855518d3.png)

#### DELETE SERVER

![Delete_Server](https://user-images.githubusercontent.com/126280146/228459748-63a07dff-8e40-497d-9051-4e085fb22c07.png)

#### SEARCH_SERVER

![Search_server](https://user-images.githubusercontent.com/126280146/228459797-e25c0000-a387-4713-8219-c10e26df5c63.png)

#### DATASTORED

![Saved_Server with diff ID](https://user-images.githubusercontent.com/126280146/228459888-bff32e02-68cf-4fb4-a961-53d99cbfe6a5.png)

##### Developed a full stack application.
