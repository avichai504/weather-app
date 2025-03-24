-- src/app/db/schema.sql

CREATE TABLE weather_history (
  id SERIAL PRIMARY KEY,
  city VARCHAR(100) NOT NULL,
  temperature FLOAT NOT NULL,
  humidity INTEGER NOT NULL,
  "windSpeed" FLOAT NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50) NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
