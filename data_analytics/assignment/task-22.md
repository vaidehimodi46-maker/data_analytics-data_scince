## Use pandas' read_sql() function to load all records from a 'restaurants' table (with columns like name, cuisine, rating) in your local SQLite database into a DataFrame, then display the first 5 rows

    SELECT * FROM restaurants;

## In a Jupyter Notebook, use the %sql magic command to run a SQL query that selects all movies with a rating above 8 from a 'movies' table, and display the results in the notebook

    SELECT * FROM movies WHERE rating > 8;

## Combine SQL and Python to analyze Zomato-style order data: use pandas read_sql() to load the last 100 orders from an 'orders' table, then use DataFrame methods to find the top 3 most ordered food items

    SELECT * FROM orders ORDER BY order_id DESC LIMIT 100;

    SELECT food_item, COUNT(*) AS total_orders FROM orders GROUP BY food_item ORDER BY total_orders DESC LIMIT 3;

## Use ChatGPT or Copilot to help you write a Jupyter Notebook cell that connects to a SQLite database, runs a SQL query to fetch all users who have placed more than 5 orders, and loads the result into a pandas DataFrame

    SELECT user_id, COUNT(*) AS total_orders FROM orders GROUP BY user_id HAVING COUNT(*) > 5;
    