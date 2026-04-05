# ExploreNow

ExploreNow is a full-stack web application for searching and booking adventure tours. It includes a REST API built with Node.js, Express, and MongoDB, implementing modern API practices such as JWT authentication, filtering, sorting, pagination, and virtual population. The application also uses server-side rendering (SSR) with Pug templates to deliver dynamic HTML pages, along with client-side JavaScript bundled using Parcel and Axios for API communication.

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Email Service:** Nodemailer (Mailtrap for development/testing)
- **Environment Variables:** dotenv, cross-env
- **Linting & Formatting:** ESLint (Airbnb + Prettier)
- **Security:** helmet, rate-limit
- **Frontend (Client-side):**Vanilla JavaScript, Axios, Parcel

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
  - Fully rendered HTML pages delivered from the server

- Client-side functionality
  - Form handling and DOM manipulation with JavaScript
  - API communication using Axios
  - Bundling frontend JavaScript using Parcel

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

Path to collection(json) inside the project:
/dev-data/postman/explorenow_postman_collection.json

How to use:

1. Import the collection into Postman
2. Set your base URL (e.g. http://localhost:3001)
3. Use login to get JWT token
4. Use protected routes with Authorization header:

Authorization: Bearer <your_token>
