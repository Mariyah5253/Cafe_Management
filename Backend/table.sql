use cafe;
describe user;
select * from user;

UPDATE user SET status='true' WHERE id=3;

create table category(id int NOT NULL auto_increment, name varchar(255) NOT NULL, primary key(id));
desc category;
select * from category;
UPDATE category SET name='Teaa' WHERE id=2;

create table product(
id int NOT NULL auto_increment,
name varchar(255) NOT NULL,
categoryId integer NOT NULL,
description varchar(255),
price integer,
status varchar(20),
primary key(id)
);

desc product; 
select * from product;

create table bill(
    id int NOT NULL auto_increment,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key(id)
);

desc bill;

select * from product;
select * from bill;
select * from category;
select * from user;

UPDATE user 
SET 
    password = 'admin@123'
WHERE
    id = 1;
    
    
delete from category where id=4;
select * from category;


use cafe;
select * from user; 

delete from user where id=2;
delete from user where id=3;
delete from user where id=5;
delete from user where id=6;
delete from user where id=7;