## Create a table called Orders with columns: order_id, user_id, order_amount, and app_name (e.g., 'Zomato', 'Swiggy', 'Flipkart'). Insert at least 10 sample records with different users and apps. Write an SQL query using the OVER() function to display each order's amount along with the total order amount for all orders

    CREATE TABLE orders(
    order_id int AUTO_INCREMENT primary key,
    user_id varchar(255),
    order_amount varchar(255),
    app_name varchar(255)
    );

    INSERT into orders (user_id,order_amount,app_name)VALUES(301, 450, 'Swiggy'),(302, 850, 'Zomato'),(303, 1200, 'Uber Eats'),(304, 650, 'EatSure'),(305, 990, 'Dominos'),(306, 300, 'Pizza Hut'),(307, 1450, 'McDonalds'),(308, 720, 'KFC'),(309, 1100, 'FreshMenu'),(310, 550, 'Box8');

    select order_amount , sum(order_amount) over(order by order_amount) as sum_of_amount from orders;

   
    
## Using the Orders table, write an SQL query to show each user's order_id, order_amount, and the average order_amount for that user using the OVER(PARTITION BY user_id) clause 

    SELECT user_id,order_id,order_amount,AVG(order_amount) OVER(PARTITION BY user_id) AS avg_order_amount FROM orders;




## Suppose you have a table called Playlist with columns: song_id, user_id, and duration_sec. Write an SQL query to display each song's duration, and the total duration of songs added by each user using SUM(duration_sec) OVER(PARTITION BY user_id)

    SELECT user_id,song_id,duration_sec,SUM(duration_sec) OVER(PARTITION BY user_id) AS total_duration FROM playlist;


## Given a table named MovieRatings with columns: rating_id, user_id, movie_name, and rating (1-5), write an SQL query to show each rating, the average rating per movie, and the difference between the user's rating and the movie's average rating using window functions 

    SELECT rating_id,user_id,movie_name,rating, AVG(rating) OVER(PARTITION BY movie_name) AS avg_movie_rating, rating - AVG(rating) OVER(PARTITION BY movie_name) AS difference FROM movies;