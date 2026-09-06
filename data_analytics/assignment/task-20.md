## Download a sample IPL match data CSV file and load it into a new SQL table called ipl_matches using your preferred SQL tool (MySQL Workbench, DBeaver, or Azure Data Studio)

    create table ipl_matches(
    match_id INT auto_increment primary key,
    team VARCHAR(50),
    opponent VARCHAR(50),
    match_year INT,
    result VARCHAR(20),
    runs INT
    );

## Write a SQL query to select all matches where the team 'Mumbai Indians' played, then export the query results as a CSV file named mi_matches.csv

    SELECT * FROM ipl_matches WHERE team = 'Mumbai Indians';