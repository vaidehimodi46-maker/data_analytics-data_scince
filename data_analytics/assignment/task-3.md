## SQL query to select all restaurants from a table named 'restaurants' where the rating is greater than or equal to 4.5

    select * from restaurant where rating >= 4.5;

## In a table called 'movies', filter and display only the movies released after 2020 and with genre 'Action' using the WHERE clause and AND operator

    SELECT * from movies WHERE released_year > 2022 AND gener='action';

## Given a table 'products' with columns (id, name, price, category), write a query to find all products not in the 'Electronics' category or with a price less than 500

    SELECT * FROM products WHERE category <> 'Electronics' OR price < 500;

## Write an SQL query for a table 'users' to show all users who are NOT from 'Ahmedabad' and have more than 1000 followers

    SELECT * FROM users WHERE city <> 'Ahmedabad' AND followers > 1000;