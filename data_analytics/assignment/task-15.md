## Write an SQL query using the NOW() function to display the current date and time as 'CurrentDateTime' in your result set

    SELECT NOW() AS CurrentDateTime;

## Suppose you have a table called Orders with a column order_date (DATE type). Write a query to display each order's order_date, the year, month, and day as separate columns using YEAR(), MONTH(), and DAY()

    SELECT order_date,YEAR(order_date) AS year,MONTH(order_date) AS month,DAY(order_date) AS day FROM Orders;

## Imagine you are building a feature like Zomato's order delivery estimate. Given a table Deliveries with a column delivery_date, write a query to show delivery_date and a new column expected_pickup_date which is 2 days before delivery_date using DATE_SUB()

    SELECT delivery_date,DATE_SUB(delivery_date, INTERVAL 2 DAY)
    expected_pickup_date FROM Deliveries;

## You have a table called Subscriptions with columns user_id, start_date, and end_date. Write a query to display user_id, start_date, end_date, and the total number of days of each subscription using DATEDIFF()

    SELECT user_id,start_date,end_date,DATEDIFF(end_date, start_date) AS total_days FROM Subscriptions;

## Create an SQL query for a table named AppLogins (columns: user_id, last_login_date) to find all users who haven't logged in for more than 30 days from today. Use NOW() and DATEDIFF() in your query

    SELECT user_id, last_login_date FROM AppLogins WHERE DATEDIFF(NOW(), last_login_date) > 30;