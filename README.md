E-Commerce Platform
Description:
The E-Commerce Platform is a fully-featured online shopping application designed to provide a seamless and engaging shopping experience for users. It allows customers to browse products, add items to their cart, and complete purchases. The platform supports user authentication, order management, and integrates with various payment gateways for secure transactions.

Key Features:

User Authentication: Users can sign up, log in, and manage their accounts with secure authentication mechanisms.
Product Catalog: A comprehensive catalog of products with search, filter, and sorting capabilities.
Shopping Cart: Users can add, remove, and update items in their cart before proceeding to checkout.
Order Management: Users can view their order history and track the status of their current orders.
Payment Integration: Integration with payment gateways for processing transactions securely.
Technologies Used:

Frontend:

Vite: Build tool to create a quick and easy React project. Offers compatibility with JS and TS and is framework-agnostic, doesn't have to React. This is an alternative to create-react-app which is becoming less popular.
React: A JavaScript library for building the user interface, providing a responsive and dynamic experience.
Redux: For state management, helping manage the application state across different components.
Bootstrap or Material-UI: For styling and responsive design, ensuring a polished and user-friendly interface.

Backend:

Axios: Sends GET requests for authentication to test Express
Node.js: JavaScript runtime used to build the server-side application, handling business logic and API requests.
Express.js: A web framework for Node.js that simplifies the creation of server-side routes and middleware.
PostgreSQL: A powerful, open-source relational database used for storing product information, user data, and order details.
JWT (JSON Web Tokens): For secure user authentication and authorization.
Docker:

Testing:

Nodemon: Restarts the server after changes are made to the code. Used as an alternative to "node" when running js file.
Postman: Offers an easy to use interface for testing API GET requests, I primarily used with authentication requests.

Docker: Used to containerize the application, ensuring consistency across development, testing, and production environments.
Deployment:

Amazon ECS (Elastic Container Service): For deploying and managing Docker containers in the cloud, providing scalability and ease of management.
CI/CD:

GitHub Actions: For automating the build, test, and deployment processes, enabling continuous integration and continuous deployment.
Additional Tools:

Nginx: Used as a reverse proxy and load balancer to distribute incoming traffic and improve performance.
Redis: Optional, used for caching frequently accessed data to improve response times.
Summary:
The E-Commerce Platform is built to deliver a scalable, maintainable, and high-performance online shopping experience. By leveraging modern technologies like React for the frontend and Node.js for the backend, along with Docker for containerization and ECS for deployment, the project ensures reliability and ease of management.
