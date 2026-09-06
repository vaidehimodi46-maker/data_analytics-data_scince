## Create two tables in your SQL database: Users (user_id, username, city) and Orders (order_id, user_id, product, amount). Insert at least 3 users and 5 orders, making sure some users have no orders

    CREATE TABLE Users (
    user_id auto_increment INT PRIMARY KEY,
    username VARCHAR(100),
    city VARCHAR(50)
    );

    INSERT INTO Users(user_id,username,city) VALUES(1, 'Rahul', 'Ahmedabad'),(2, 'Priya', 'Rajkot'),(3, 'Amit', 'Surat');

    CREATE TABLE Orders (
    order_id INT auto_increment PRIMARY KEY,
    user_id INT,
    product VARCHAR(100),
    amount varchar(100),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
    );

    INSERT INTO Orders (order_id,user_id,product,amount) VALUES(101, 1, 'Laptop', 50000),(102, 1, 'Mouse', 800),(103, 2, 'Shoes', 2500),(104, 2, 'Watch', 1500),(105, 1, 'Keyboard', 1200);

## Write an SQL query using INNER JOIN to list all usernames and their ordered products, showing only users who have placed at least one order

    SELECT users.username, orders.product FROM users INNER JOIN orders ON users.user_id = orders.user_id;

## Write an SQL query using LEFT JOIN to display all usernames along with their ordered products. For users who haven't placed any orders, show NULL for the product

    SELECT users.username, orders.product FROM users LEFT JOIN orders ON users.user_id = orders.user_id;

## Write an SQL query using RIGHT JOIN to show all orders and the corresponding username for each order. If an order has a user_id that doesn't exist in the Users table, display NULL for the username

    SELECT orders.order_id, users.username FROM users RIGHT JOIN orders ON users.user_id = orders.user_id;


<br><br><em><strong>Hint:</strong> Try deleting one user and keeping their order to test this case.</em>

## Suppose you want to analyze food delivery data like Zomato. Create a CustomerSegments table (segment_id, segment_name), and link it to Users with a foreign key. Write an SQL query to show each username, their segment name, and total order amount (use JOINs as needed)

    SELECT users.username,customer_segment.segment_name,SUM(orders.amount) AS total_order_amount FROM users LEFT JOIN customer_segment ON users.segment_id = customer_segment.segment_id LEFT JOIN orders ON users.user_id = orders.user_id GROUP BY users.user_id, users.username, customer_segment.segment_name
