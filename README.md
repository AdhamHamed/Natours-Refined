# Natours Refined

Natours Refined is a MERN-stack application that allows users to book and manage tours. The app features user authentication, automated tour generation, payment integration, and more, providing a seamless experience for users and administrators.

## Features

- **User Authentication**: Ability to login/signup with JWT (only login is implemented).
- **Automated Tour Generation**: Fully automated generation of tours by fetching data from a MongoDB database.
- **Payment Integration**: Integrated with Stripe for secure payments.
- **Booked Tours Page**: A separate, fully automated page for booked tours, also pulling data from the database.
- **Password Management**: Users can change their passwords.
- **Profile Management**: Full user profile page available with photo rendering.
- **Admin Privileges**: Additional privileges for admin users (admin tools' pages not implemented).
- **Password Reset**: Ability to send a password reset request that gets sent to email using SendGrid.

## Technologies Used

- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Express.js**: Web application framework for Node.js.
- **Node.js**: JavaScript runtime for server-side development.
- **Webpack**: Module bundler for JavaScript applications.
- **Jade (Pug)**: Template engine for rendering HTML.
- **SendGrid**: Service for sending emails.

## Installation and Setup

To get your local environment up and running, follow these steps:

- Clone the repository using:
  ```bash
  git clone https://github.com/AdhamHamed/Natours-Refined.git
