## Create a SQL view named TopRatedRestaurants that selects the restaurant name, average rating, and total number of reviews from a table of Zomato-style restaurant reviews, showing only restaurants with an average rating above 4.0

    CREATE VIEW TopRatedRestaurants AS SELECT restaurant_name, AVG(rating) AS avg_rating, COUNT(*) AS total_reviews FROM RestaurantReviews GROUP BY restaurant_name HAVING AVG(rating) > 4.0;

## Update the TopRatedRestaurants view to also include the city column from the original restaurants table by joining the relevant tables

    CREATE OR REPLACE VIEW TopRatedRestaurants AS SELECT r.restaurant_name, r.city, AVG(rv.rating) AS avg_rating FROM Restaurants r INNER JOIN RestaurantReviews rv ON r.restaurant_name = rv.restaurant_name GROUP BY r.restaurant_name, r.city HAVING AVG(rv.rating) > 4;

## Try to update the average rating column directly through the TopRatedRestaurants view and observe what error or limitation occurs. Write down the exact error message and explain why this happens based on SQL view limitations

    UPDATE TopRatedRestaurants SET avg_rating = 5 WHERE restaurant_name = 'ABC';
    ```
    - ERROR 1288 (HY000): The target table 'TopRatedRestaurants' of the UPDATE is not updatable
    - The view cannot be updated directly because it contains aggregate functions like AVG() and GROUP BY, making it a non-updatable view
    ```

## Create a view called DailyOrderSummary that shows, for each date, the total number of food orders and the total revenue from a Swiggy-style orders table. Ensure the view only includes dates from the last 30 days

    CREATE VIEW DailyOrderSummary AS SELECT order_date, COUNT(*) AS total_orders,SUM(total_amount) AS total_revenue FROM FoodOrders WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) GROUP BY order_date;

## List 3 good practices you should follow when creating SQL views for analytics dashboards, and for each, give a one-line example related to a Flipkart sales reporting scenario

1. Use meaningful column names – Example: total_sales for total Flipkart sales

2. Filter unnecessary data – Example: WHERE order_date >= '2026-01-01' to show recent sales

3. Avoid duplicate calculations – Example: Create a view with SUM(amount) once and use it in the dashboard