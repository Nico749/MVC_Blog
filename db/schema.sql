DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

USE techblog_db;

SET FOREIGN_KEY_CHECKS = 0;
drop table if exists note;
drop table if exists usertable;

SET FOREIGN_KEY_CHECKS = 1;
