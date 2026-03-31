# ExploreNow

ExploreNow is a backend REST API for searching and booking adventure tours. The backend is built with Node.js, Express, and MongoDB. The app implements modern REST API practices, JWT authentication, and advanced features like filtering, sorting, pagination, and virtual population.

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Email Service:** Nodemailer (Mailtrap for development/testing)
- **Environment Variables:** dotenv, cross-env
- **Linting & Formatting:** ESLint (Airbnb + Prettier)
- **Security:** helmet, rate-limit

---

## Features

- User signup and login with JWT authentication
- Password reset functionality with reset tokens and email notifications
- CRUD operations
- Advanced API features:
  - Filtering, advanced filtering, sorting
  - Field limiting and pagination
  - Aliasing endpoints (e.g., top 5 cheap tours)
- Aggregation pipelines for statistics and monthly plans
- Virtual properties and virtual populate for `reviews`
- Role-based access control: `user`, `guide`, `lead-guide`, `admin`
- Data validation and custom validators
- Protected routes and authorization middleware
- Security:
  - Rate limiting
  - HTTP headers with Helmet

- Server-Side Rendering (SSR)
  - Dynamic rendering using Pug templates
  - Fully rendered HTML pages delivered from the serve

---

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/explorenow.git

2. cd explorenow

3. Install dependencies: npm install

4. Create a .env file in the root folder:

PORT=3001
USERNAME=<YOUR_USERNAME>
DATABASE=<YOUR_MONGO_CONNECTION_STRING>
DATABASE_PASSWORD=<YOUR_DB_PASSWORD>
JWT_SECRET=<YOUR_SECRET_KEY>
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USERNAME=<MAILTRAP_USERNAME>
EMAIL_PASSWORD=<MAILTRAP_PASSWORD>

4. Start the program: npm run start

5. Open in browser: http://localhost:3001

---

## Postman Collection

You can test the API using this Postman collection:

[Path to collection(json) inside the project:](/dev-data/postman/explorenow_postman_collection.json)

How to use:

1. Import the collection into Postman
2. Set your base URL (e.g. http://localhost:3001)
3. Use login to get JWT token
4. Use protected routes with Authorization header:

Authorization: Bearer <your_token>
