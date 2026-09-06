## Write an SQL query to find the top 5 highest-rated restaurants in Koramangala, showing their name, average rating, and number of votes

    SELECT name, rating, votes FROM Restaurants WHERE location = 'Koramangala' ORDER BY rating DESC LIMIT 5;

## Using the Zomato Bangalore dataset, create an SQL query that lists all unique cuisines available in Indiranagar along with the count of restaurants offering each cuisine

    SELECT cuisine, COUNT(*) AS restaurant_count FROM Restaurants WHERE location = 'Indiranagar' GROUP BY cuisine;

## Write an SQL query to calculate the average cost for two people for each restaurant type (such as 'Cafe', 'Casual Dining', etc.) and order the results from most to least expensive

    SELECT restaurant_type, AVG(cost_for_two) AS avg_cost FROM Restaurants GROUP BY restaurant_type ORDER BY avg_cost DESC;

## Find all restaurants that have a rating below 3.0 but more than 200 votes, and suggest a possible marketing action for these based on your findings

    SELECT name, rating, votes FROM Restaurants WHERE rating < 3.0 AND votes > 200;

## Use ChatGPT to generate an SQL query that segments restaurants into three market categories: 'Budget' (cost for two < 500), 'Mid-range' (500-1500), and 'Premium' (>1500). Test and run the query on your dataset, and paste the working query in your submission

    SELECT name, cost_for_two, CASE WHEN cost_for_two < 500 THEN 'Budget' WHEN cost_for_two <= 1500 THEN 'Mid-range' ELSE 'Premium' END AS market_category FROM Restaurants;