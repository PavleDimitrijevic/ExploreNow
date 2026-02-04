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

---

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/explorenow.git
cd explorenow

2. Install dependencies: npm install

3. Create a .env file in the root folder:

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
