## Create two tables, influencers and brands, with at least 3 sample rows each. Use a FULL OUTER JOIN to list all influencers and brands, showing influencer_name and brand_name, matching on city. If there is no match, display NULL for the missing side

    SELECT influencer.influencer_name, brands.brand_name FROM influencer LEFT JOIN brands ON influencer.city = brands.city UNION SELECT influencer.influencer_name, brands.brand_name FROM influencer RIGHT JOIN brands ON influencer.city = brands.city;

<br><br><em><strong>Hint:</strong> Use LEFT JOIN, RIGHT JOIN, and UNION if your SQL dialect does not support FULL OUTER JOIN directly.</em>

## Given a table called playlists with columns (id, playlist_name, parent_playlist_id), write a SELF JOIN query to display each playlist alongside its parent playlist's name, similar to how Spotify might nest playlists

    SELECT p.playlist_name AS playlist,parent.playlist_name AS parent_playlist FROM playlists p LEFT JOIN playlists parent ON p.parent_playlist_id = parent.id;

## Create two tables: users and offers. Write a CROSS JOIN query to generate all possible combinations of users and offers, displaying user_name and offer_title. Explain in a comment how this could be used for a Flipkart-style personalized offer campaign

    SELECT sales_user.user_name, offers.offer_title FROM sales_user CROSS JOIN offers;

## You have an employees table with columns (id, name, manager_id). Write a SELF JOIN to display each employee's name along with their manager's name. Then, modify your query to only show employees who do not have a manager (i.e., top-level managers)

    SELECT e.name AS employee_name,m.name AS manager_name FROM employee e LEFT JOIN employee m ON e.manager_id = m.id;

## Use ChatGPT or Copilot to help you write a SQL query that finds all pairs of users from a users table who live in the same city (excluding pairs where the user is compared with themselves). Paste the query and briefly describe how the AI helped you improve or debug it

    SELECT u1.username AS user1,u2.username AS user2,u1.city  FROM users u1 INNER JOIN users u2 ON u1.city = u2.city AND u1.user_id < u2.user_id;

    -- AI helped me understand how to use a SELF JOIN and
    -- the condition u1.user_id < u2.user_id to avoid comparing
    -- a user with themselves and to prevent duplicate pairs.