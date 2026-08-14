## Open your SQL editor and run a query to select all columns from a table named restaurants using SELECT * FROM restaurants 

    INSERT INTO restaurant(id,name,location,cuisine,mobile,address)VALUES(1,'The food hub','rajkot','indian',9876546554,'kotecha chowk'),(2,'pizza point','rajkot','italian',8979676556,'kalawad road'),(3,'spice garden','rajkot','chinese',8678657690,'ring road');

![alt text](<Screenshot 2026-08-13 181212.png>)

## display only the name and rating columns from the table zomato_reviews

![alt text](<Screenshot 2026-08-13 182439.png>)

## SQL query to select the movie_name and release_year columns from a table called movies, but rename movie_name as 'Title' and release_year as 'Year Released' in the output using the AS keyword

    SELECT movie_name AS 'title',release_year AS 'year released' from movies;

![alt text](<Screenshot 2026-08-14 180635.png>)

## n a table called products, write an SQL query that selects all columns and add a comment in your SQL code explaining what the query does

    -- this query display all columns from product table
    SELECT * from products;

![alt text](<Screenshot 2026-08-14 181725.png>)