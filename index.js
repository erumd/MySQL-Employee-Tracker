const { questions, department, role, employee } = require("./questions");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306, //sql port is 3306
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "team_db",
});
