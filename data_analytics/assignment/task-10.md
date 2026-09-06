## Create two tables: AppOrders (for orders placed via a food delivery app like Zomato) and InStoreOrders (for direct restaurant orders), each with columns: order_id, customer_name, amount, and order_date. Insert at least 3 sample records into each table

    CREATE TABLE Apporders (
    order_id INT auto_increment PRIMARY KEY,
    customer_name VARCHAR(100),
    amount varchar(255),
    order_date DATE
    );

        insert into Apporders(order_id,cutomer_name,amount,order_date)VALUES(1, 'Rahul', 450.00, '2026-09-01'),(2, 'Priya', 300.00, '2026-09-02'),(3, 'Amit', 550.00, '2026-09-03');

    CREATE TABLE Instoreorders (
    order_id INT auto_increment PRIMARY KEY,
    customer_name VARCHAR(100),
    amount vatchar(255),
    order_date DATE
    );

        insert into Instoreorder(order_id,customer_name,amount,order_date)VALUES(101, 'Neha', 600.00, '2026-09-01'),(102, 'Karan', 350.00, '2026-09-02'),(103, 'Riya', 700.00, '2026-09-03');

## Write a SQL query using UNION to combine all unique customer names from both AppOrders and InStoreOrders tables into a single list

    SELECT customer_name FROM Apporders UNION SELECT customer_name FROM Instoreorders;

## Write a SQL query using UNION ALL to display every order (including duplicates if any) from both AppOrders and InStoreOrders, showing order_id, customer_name, amount, and order_date

    SELECT order_id, customer_name, amount, order_date FROM Apporders UNION ALL SELECT order_id, customer_name, amount, order_date FROM Instoreorders;

## Demonstrate the difference between UNION and UNION ALL by adding a duplicate customer_name in both tables, then running both queries and noting the difference in the result count

    INSERT INTO Apporders VALUES(4, 'Rahul', 700.00, '2026-09-04');
    INSERT INTO Instoreorders VALUES(104, 'Rahul', 800.00, '2026-09-04');

    ** UNION **
        SELECT customer_name FROM Apporders UNION SELECT customer_name FROM InStoreOrders;

        union duplicate will show rahul only once

    ** UNION ALL **
        SELECT customer_name FROM AppOrders UNION ALL SELECT customer_name FROM InStoreOrders;

        union all will show rahul only twice
