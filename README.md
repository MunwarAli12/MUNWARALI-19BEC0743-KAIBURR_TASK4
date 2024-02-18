# Problem Statement

Create a basic web UI frontend for an application for task-1.The application allows users to interact with server records, including creating, displaying, and deleting them.

## Requirements

1. **UI Framework**: Choose any UI framework of your choice to build the frontend. Popular options include React.js, Angular, Vue.js.

2. **Functionality**: The frontend should provide the following functionalities:
   - Create a new server record by providing details such as name, ID, language, and framework.
   - Display all server records with their details.
   - Delete a server record by its ID.

3. **Integration**: The frontend should communicate with the backend Java REST API to perform CRUD (Create, Read, Update, Delete) operations on server records stored in the MongoDB database.


#### NOTE:
> I have developed task-1, You can find the repository for the backend application at [task-1 Backend Application Source Code](https://github.com/MunwarAli12/model-java_REST-API_web_application-).

## WEB UI Overview

- I have Developed a user-friendly web application using the Angular framework.
- Created to provide an intuitive interface for interacting with the backend Application REST API, available at [Backend Application](https://github.com/MunwarAli12/model-java_REST-API_web_application-).
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
crud operator: http:localhost:8080
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

  
### Final Overview Of Application:

#### ADD SERVER,

- Implemented application structured around components. Upon submission of all parameters, the data is sent to the backend where it triggers a process to store it in the databases.

![Add _Server](https://user-images.githubusercontent.com/126280146/228459705-4564a6d0-022a-49f3-aad3-6244855518d3.png)

#### DELETE SERVER,

- When all parameters are submitted, the data is forwarded to the backend, initiating a process to store it in the databases. For deletion process a delete mapping is initiated at the backend, all saved servers are displayed on the screen in card forms, providing users with the option to delete them. 

![Delete_Server](https://user-images.githubusercontent.com/126280146/228459748-63a07dff-8e40-497d-9051-4e085fb22c07.png)

#### SEARCH_SERVER,

- Upon initiating a search for servers, a GET mapping is utilized to retrieve relevant data from the backend. The retrieved information is then displayed on the screen, facilitating users in locating specific servers based on their search criteria.

![Search_server](https://user-images.githubusercontent.com/126280146/228459797-e25c0000-a387-4713-8219-c10e26df5c63.png)

#### DATASTORED,

- When all parameters are submitted, the application forwards the data to the backend, which initiates a process to store it in MongoDB. This involves establishing a connection to the MongoDB database and inserting the submitted data into the appropriate collection. Once the data is successfully stored, the backend sends a response to confirm the operation's completion.

![Saved_Server with diff ID](https://user-images.githubusercontent.com/126280146/228459888-bff32e02-68cf-4fb4-a961-53d99cbfe6a5.png)

##### Developed a full stack application.
