## Run a SELECT query on a large 'orders' table (at least 10,000 rows) to find all orders for a specific user_id and measure the query execution time

    SELECT * FROM sales_orders WHERE user_id = 67;
    ```
    Showing rows 0 - 24 (114 total, Query took 0.0014 seconds.)
    ```

##  Create an index on the user_id column of the 'orders' table and re-run the same SELECT query to measure the new execution time

    CREATE INDEX idx_user_id ON orders(user_id);
    ```
    (Query took 0.0120 seconds.)
    ```
    SELECT * FROM sales_orders WHERE user_id = 92;
    ```
    (99 total, Query took 0.0020 seconds.)
    ```

## Use the EXPLAIN PLAN command to analyze how your SELECT query runs before and after adding the index, and write down the key differences you observe in the output

    **Before index:

        EXPLAIN SELECT * FROM orders WHERE user_id = 101;
    
    **After create Index:

        EXPLAIN SELECT * FROM orders WHERE user_id = 101;

Before indexing, MySQL scans the whole table. After creating idx_user_id, MySQL uses the index and scans fewer rows, improving query performance

## Write a query for a 'products' table that avoids a full table scan by using an index on the 'category' column to fetch all products in a specific category

    CREATE INDEX idx_category ON products(category);
    SELECT * FROM products WHERE category = 'Electronics';

## Suppose your SELECT query on the 'orders' table is still slow even after adding an index. Use EXPLAIN PLAN and research at least one more optimization technique (other than indexing) using an AI tool like ChatGPT or Copilot, and describe how you would apply it

    EXPLAIN SELECT * FROM orders WHERE user_id = 101;

- I used ChatGPT to research another optimization technique. It suggested selecting only required columns instead of using SELECT *, which reduces unnecessary data retrieval and can improve query performance
