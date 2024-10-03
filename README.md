# Natours Refined

Natours Refined is a MERN-stack application that allows users to book and manage tours. The app features user authentication, automated tour generation, payment integration, and more, providing a seamless experience for users and administrators. This project is a portfolio project provided from Jonas Schmedtmann's [Node.js Course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=LETSLEARNNOWPP). It's really a helpful course and very versatile.

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

- Open in VSCode
```
cd natours-refined
code .
npm install
npm run start:dev
```
- In config.env, add your MongoDB link for it to generate the data.

## File Structure
```
natours-refined/
│
├── bin/                           # Directory for executable files
│   └── www                        # Entry point for starting the application
│
├── controllers/                   # Application controllers
│   ├── authEnController.js        
│   ├── bookingController.js        
│   ├── errorController.js          
│   ├── handlerFactory.js           
│   ├── reviewController.js         
│   ├── tourController.js           
│   ├── userController.js           
│   └── viewController.js           
│
├── models/                        # Data models
│   ├── bookingModel.js            
│   ├── reviewModel.js             
│   ├── tourModel.js               
│   └── userModel.js               
│
├── public/                        # Public assets (CSS, images, etc.)
│   ├── stylesheets/
│   │   └── style.css              
│   ├── images/
│   │   ├── tours/                 
│   │   ├── users/                 
│   │   └── logos/                 
│   └── javascripts/
│       ├── alert.js               
│       ├── bundle.js              
│       ├── login.js               
│       ├── stripe.js              
│       └── updateSettings.js       
│
├── routes/                        # Express routes
│   ├── tourRoutes.js              
│   ├── userRoutes.js              
│   ├── bookingRoutes.js           
│   ├── configRoutes.js            
│   ├── reviewRoutes.js            
│   └── viewRoutes.js              
│
├── utils/                         # Utility functions
│   ├── apiFeatures.js             
│   ├── appError.js                
│   ├── catchAsync.js              
│   └── email.js                   
│
├── views/                         # Template files
│   ├── emails/                    # Email templates
│   │   ├── _style.pug             
│   │   ├── baseEmail.pug          
│   │   ├── passwordReset.pug      
│   │   └── welcome.pug            
│   ├── _footer.pug                
│   ├── _header.pug                
│   ├── _reviewCard.pug            
│   ├── account.pug                
│   ├── base.pug                   
│   ├── error.pug                  
│   ├── login.pug                  
│   ├── overview.pug               
│   └── tour.pug                   
│
├── config.env                     # Environment variables configuration file
├── .babelrc                       # Babel configuration file
├── webpack.config.js              # Webpack configuration file
├── .gitignore                     # Git ignore file
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Lock file for installed dependencies
├── app.js                         # Main application file
├── README.md                      # Project documentation
```

## Usage

## License
This project is licensed under the MIT License.
