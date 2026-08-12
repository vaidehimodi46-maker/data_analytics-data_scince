# What is  SQL and database ?

## what is SQL ?

- A SQL stands for structured query language
- A SQL is used to create a database and table structured 
- A SQL is used to create a structured data 
- A SQL is case-insenstive language
- insenstive language examples : INSERT | insert | Insert 


# what is Database ? 

- A database is used to stored an infomations i.e called database 
- List out 5 name of database 
1. oracle
2. mysql 
3. sqlite 
4. sql server
5. mongoDB


## how to open xampp 

1. xampp=>control panel=>start 

2. localhost/phpmyadmin

![alt text](image.png)

![alt text](image-1.png)


## how to open mySQLworkbench8.0

1. https://dev.mysql.com/downloads/workbench/
2. open mysqlworkbench
3. create an database instance

![alt text](image-2.png)



## what is difference b/w SQL and MYSQL 

## SQL

1. sql is an structured query language 
2. sql is case insenstive language
3. sql is create database and tables structured 

## MySQL

1. mysql is an database 
2. mysql is case senstive language
3. mysql is used to stored data 


# what is DBMS ? 
1. DBMS stands for database management system 
2. DBMS is used to manage databases 
1. oracle
2. mysql 
3. sqlite 
4. sql server
5. mongoDB

# what is RDBMS ? 
1. RDBMS stands for relational database managment system 
2. RDBMS provides relations b/w database and its tables 
3. RDBMS manage GUI of database 


## types SQL commands 

- DDL (data definition langauge)
- DML (data manipulation language)
- DQL (data query language)
- TCL (transanctional control language)


## DDL (data definition language) : 

- A DDL is used to create database and table definition 
- A DDL is used to create database name and table name and its structures 
- A DDL query are ....

1. create
2. alter 
3. rename
4. change
5. drop 
6. truncate 

## how to create database ? 

**syntax**

```
create database databasename;
or
create database db_app; 
``` 

## how to create table  ?

**table datatype and size structures**

# SQL Table Structure

| Column Name | Data Type | Size | Description |
|-------------|-----------|------|-------------|
| ID | INT | 11 | Primary Key (auto_increment) |
| FirstName | VARCHAR | 0-255 | Employee first name |
| LastName | VARCHAR | 0-255 | Employee last name |
| Email | VARCHAR | 255 | Email address |
| Phone | VARCHAR | 20 | Contact number |
| DateOfBirth | DATE | - | Birth date |
| Salary | DECIMAL | 10,2 | Employee salary |
| IsActive | BIT | 1 | Active status |
| CreatedDate | DATETIME | - | Record creation date |
| UpdatedDate | DATETIME | - | Last update date |
| address     | text     |  for more text   |
| multiple choice | enum |  for multiple choices |
| mobile | bigInt | 20 | for bigInt   |
| photo  | blob   | bigsize           |


**syntax**

```
create table tablename(
id int auto_increment primary key,
name varchar(255),
password varchar(255),
mobile bigInt,
address text,
appointmentdate_time datetime
);
or

create table users(
id int auto_increment primary key,
name varchar(255),
password varchar(255),
mobile bigInt,
address text,
appointmentdate_time datetime
);

or

create table employee(
empid int AUTO_INCREMENT primary key,
name varchar(255),
password varchar(255),
gender varchar(255),
hobby varchar(255),
address text,
phone bigint    

)
``` 

## alter

1. alter is used to add new column in a table
2. alter is used to modify or add or update new column in tables
3. alter also create a unique key in column.
4. alter tables add column | modify column | update column in tables

**syntax**

```
alter table tablename add columnname datatype(size)
or
alter table employee add country varchar(255)
or
alter table employee add state varchar(255)
or
alter table employee add photo blob after name;
or
alter table employee change phone mobile bigint;
or
alter table employee add unique(`mobile`)
or 
alter table 

```
## drop : 
    
    1. drop is used to drop any database and table structure and database structures
    2. drop is delete structure of database and table 
    3. after drop we never rollback structure and data
    
    ** syntax**

    ```
    drop database databasename
    or 
    drop database db_app;

    drop table tablename 
    or
    drop table employee
    or
    drop table user

    ```
## truncate :

    1. truncate is used to delete or remove all data from tables
    2. truncate is used to empty all data from tables
    3. after truncate we never rollback data

    **syntax**
    
    ```
    truncate table tablename
    or 
    truncate table employee

    ```
## rename:

1. rename is used to change any table name

** syntax **
```

## revised...
** create a table tbl_reviews with following column name** 
tbl_reviews

rid
name
email
phone
rating - enum('*','**','***','****','*****')
comment

## DML : data manipulation language

1. DML is used to manipulate data in tables
2. DML is used to insert| delete | update data in tables
3. DML use for manipulation of data

** query used in DML**

1. insert
2. delete
3. update

## how to insert data in tables
** syntax**

```
insert into tablename(columnme)values('value')
or 
insert into tbl_employee(name,photo,password,address,phone)VALUES('kumar','kumar.jpg','k51476','male','read,playing','150 feet ring road rajkot',646636476,'india','gujrat')


## how can we delete data

    1. all data delete from tables

        ```
        delete from tablename
        or
        delete from tbl_employee;
        ```

    2. delete one rows from table

        ```
        delete from tablename where id=1;
        or
        delete from tbl_employee where empid=1;

    3. delete two rows from table

        ```
        delete from tablename where empid IN(5,6)
        
        ```


    4 delete range of data from table

        ```
        delete from tablename where empid between 5,12;

        ```
    5. delete from name column data from table
        ```
        delete from tbl_country where cname = 'india';
        
        ```
    6. delete data or rows using limit
        ```
        delete from tbl_country where cid > 0 limit 4;

        ```
 
 ##  update a data or rows

    1. update rows
        ```
        
        ```

## DQL :

    1. data query language
    2. DQL is used  to select data or fetch data

## DQL query

    1. select

        ```
        ** fetch data or select data**
        - select * from tbl_employee;
        ```
select * from tbl_employee;
```

- select particular one data from tables

```
select * from tbl_employee where empid=5;
```


- select particular alternate data  from tables

```
select * from tbl_employee where empid in (5,6,9);
```

- select particular range of data   from tables

```
select * from tbl_employee where empid between 1 and 100;
```


- select particular columns of  data  from tables

```
select empid,name,email from tbl_employee;
```


- select particular data using limit  from tables

```
select empid,name,hobby from tbl_employee where limit 3,5;
or
select * from tbl_country where cid limit 4,1;
```

# order by : 

1. order by is used to filter data in asc and desc order

```
select * from tbl_country order by cid;
or
select * from tbl_country order by cid asc;
or 
select * from tbl_country order by cid desc;


```

# group by :

1. group by is used to grouping or filters data on group of columns 

```
select sum(salary),department as sumof_salary from tbl_employee group by department;
```
        
    



