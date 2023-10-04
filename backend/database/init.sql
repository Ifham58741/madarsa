-- Create the 'students' table for personal and academic information
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT,
  grade_level INTEGER,
  current_courses TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'subadmins' table for subadmin information
CREATE TABLE subadmins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'student_results' table for student result information
CREATE TABLE student_results (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  subject VARCHAR(255) NOT NULL,
  marks INTEGER,
  exam_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'expenses' table for expense records
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  expense_type VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  date DATE NOT NULL,
  receipt_image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'expense_update_requests' table for expense update requests
CREATE TABLE expense_update_requests (
  id SERIAL PRIMARY KEY,
  expense_id INTEGER REFERENCES expenses(id),
  updated_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'subadmin_details' table with their user id and password
CREATE TABLE subadmin_details (
  id SERIAL PRIMARY KEY,
  subadmin_id INTEGER REFERENCES subadmins(id),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone_number VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'annual_reports' table for annual report information
CREATE TABLE annual_reports (
  id SERIAL PRIMARY KEY,
  year INTEGER,
  month INTEGER,
  report_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'donations' table for donation records
CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  donor_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  donation_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'student_id_cards' table for student ID card information
CREATE TABLE student_id_cards (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  card_image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'admins' table with their user id and password
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'programs_and_courses' table with fees structure
CREATE TABLE programs_and_courses (
  id SERIAL PRIMARY KEY,
  program_name VARCHAR(255) NOT NULL,
  description TEXT,
  fees DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'admission_details' table for admission information
CREATE TABLE admission_details (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  program_id INTEGER REFERENCES programs_and_courses(id),
  payment_status BOOLEAN DEFAULT FALSE,
  admission_confirmation_letter TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'chat_req_history' table for storing user-submitted chatbot details
CREATE TABLE chat_req_history (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- CREATE TABLE expense_update_requests (
--     id SERIAL PRIMARY KEY,
--     expenseId INTEGER REFERENCES expenses(id),
--     updatedData JSONB,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--   );
  