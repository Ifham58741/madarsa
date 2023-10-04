// Import required modules and initialize Passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Export the Passport instance
// ... Previous code ...

// Configure the Local Strategy
passport.use(new LocalStrategy(
    {
      usernameField: 'username', // Replace with the field name for the username in your form
      passwordField: 'password', // Replace with the field name for the password in your form
    },
    async (username, password, done) => {
      try {
        // Replace this with your actual database query to find an admin by username
        const admin = await AdminModel.findOne({ username });
  
        // Check if the admin exists and validate the password (add your password validation logic)
        if (!admin || !admin.isValidPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }
  
        // If the admin is found and password is valid, return the admin
        return done(null, admin);
      } catch (error) {
        return done(error);
      }
    }
  ));
  // ... Previous code ...

// Serialize the admin user
passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });
  
  // Deserialize the admin user
  passport.deserializeUser(async (id, done) => {
    try {
      // Replace this with your actual database query to find an admin by id
      const admin = await AdminModel.findById(id);
  
      if (!admin) {
        return done(null, false);
      }
  
      // If the admin is found, return the admin
      return done(null, admin);
    } catch (error) {
      return done(error);
    }
  });
  const LocalStrategy = require('passport-local').Strategy;

// Use the Local Strategy for admin login
passport.use(
  'admin-local',
  new LocalStrategy(
    {
      usernameField: 'username', // The field name for the username in your form
      passwordField: 'password', // The field name for the password in your form
    },
    async (username, password, done) => {
      try {
        // Replace this with your actual database query to find an admin by username
        const admin = await AdminModel.findOne({ username });

        if (!admin) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        // Verify the password
        const passwordMatch = await admin.comparePassword(password);

        if (!passwordMatch) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        // If the username and password are correct, return the admin user
        return done(null, admin);
      } catch (error) {
        return done(error);
      }
    }
  )
);
// Serialize the admin user to store in the session
passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });
  
  // Deserialize the admin user from the session
  passport.deserializeUser(async (id, done) => {
    try {
      // Replace this with your actual database query to find an admin by ID
      const admin = await AdminModel.findById(id);
  
      if (!admin) {
        return done(null, false);
      }
  
      return done(null, admin);
    } catch (error) {
      return done(error);
    }
  });
  
  const LocalStrategy = require('passport-local').Strategy;

  passport.use(
    'admin-local',
    new LocalStrategy(
      {
        usernameField: 'username', // Adjust these field names based on your form
        passwordField: 'password',
      },
      async (username, password, done) => {
        try {
          // Replace this with your actual database query to find an admin by username
          const admin = await AdminModel.findOne({ username });
  
          if (!admin) {
            return done(null, false, { message: 'Incorrect username' });
          }
  
          const isPasswordValid = await admin.comparePassword(password);
  
          if (!isPasswordValid) {
            return done(null, false, { message: 'Incorrect password' });
          }
  
          return done(null, admin);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  
// ... Continue with previous code ...

  // ... Export Passport as before ...
  
  
  // ... Export Passport as before ...
  
module.exports = passport;
