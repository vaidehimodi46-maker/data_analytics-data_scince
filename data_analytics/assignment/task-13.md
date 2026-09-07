## Create a table called Orders with columns: order_id, user_id, order_amount, and app_name (e.g., 'Zomato', 'Swiggy', 'Flipkart'). Insert at least 10 sample records with different users and apps. Write an SQL query using the OVER() function to display each order's amount along with the total order amount for all orders

    CREATE table res_orders(
    order_id int AUTO_INCREMENT PRIMARY key,
    user_id int,
    order_amount varchar(255),
    app_name varchar(255)
    );

    
    INSERT into res_orders(order_id,user_id,order_amount,app_name)VALUES(1, 101, 450, 'Zomato'),(2, 102, 700, 'Swiggy'), (3, 103, 1200, 'Flipkart'),(4, 104, 350, 'Zomato'),(5, 105, 850, 'Swiggy'),(6, 106, 1500, 'Flipkart'),(7, 107, 600, 'Zomato'), (8, 108, 950, 'Swiggy'),(9, 109, 2000, 'Flipkart'),(10, 110, 550, 'Zomato');

    SELECT order_id,user_id,order_amount,app_name,SUM(order_amount) OVER() AS total_order_amount FROM res_orders;



## Using the Orders table, write an SQL query to show each user's order_id, order_amount, and the average order_amount for that user using the OVER(PARTITION BY user_id) clause




## Suppose you have a table called Playlist with columns: song_id, user_id, and duration_sec. Write an SQL query to display each song's duration, and the total duration of songs added by each user using SUM(duration_sec) OVER(PARTITION BY user_id)




## Given a table named MovieRatings with columns: rating_id, user_id, movie_name, and rating (1-5), write an SQL query to show each rating, the average rating per movie, and the difference between the user's rating and the movie's average rating using window functions