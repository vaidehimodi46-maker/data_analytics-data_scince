## Write an SQL query using the WITH clause to create a temporary result set called TopArtists that selects the top 3 most-followed artists from a table SpotifyArtists (columns: artist_id, name, followers), then select all rows from TopArtists

    WITH TopArtists AS (SELECT * FROM SpotifyArtists ORDER BY followers DESC
    LIMIT 3)SELECT * FROM TopArtists;

## Using a table named FlipkartOrders (columns: order_id, user_id, order_date, total_amount), write a query with a CTE called MonthlyTotals that calculates the total sales amount for each month in 2023, then select the month with the highest total sales from MonthlyTotals

    WITH MonthlyTotals AS (SELECT MONTH(order_date) AS month,SUM(total_amount) AS total_sales FROM FlipkartOrders WHERE YEAR(order_date) = 2023 GROUP BY MONTH(order_date)) SELECT * FROM MonthlyTotals ORDER BY total_sales DESC LIMIT 1;

## Create a recursive CTE to generate a list of dates for the next 7 days starting from today in a table called CalendarDays (columns: day_date)

    WITH RECURSIVE CalendarDays AS (SELECT CURDATE() AS day_date UNION ALL SELECT day_date + INTERVAL 1 DAY FROM CalendarDays WHERE day_date < CURDATE() + INTERVAL 6 DAY)SELECT * FROM CalendarDays;

## Given a table called ZomatoRestaurants (columns: id, name, city, rating), use a CTE to find the average rating for each city, then select all restaurants in cities where the average rating is above 4.0

    WITH CityRatings AS (SELECT city, AVG(rating) AS avg_rating FROM ZomatoRestaurants GROUP BY city) SELECT z.name, z.city, z.rating FROM ZomatoRestaurants z JOIN CityRatings c ON z.city = c.city WHERE c.avg_rating > 4.0;

## Use ChatGPT or Copilot to help you write an SQL query with a CTE that, given a table IPLMatches (columns: match_id, team, runs, match_year), calculates the total runs scored by each team in 2023 and lists only teams with more than 2000 runs

    WITH TeamRuns AS (SELECT team, SUM(runs) AS total_runs FROM IPLMatches WHERE match_year = 2023 GROUP BY team) SELECT team, total_runs FROM TeamRuns WHERE total_runs > 2000;

    ```
    ChatGPT helped me create the CTE, use SUM() and GROUP BY to calculate team-wise runs, and add the condition to show teams scoring more than 2000 runs

    ```
