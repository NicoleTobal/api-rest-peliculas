const mysql = require('mysql');
const { settings } = require('../settings/settings');

let connection = null;

const initializeConnection = () => {
  connection = mysql.createConnection(settings.databaseData);
  connection.connect();
}

const closeConnection = () => {
  connection.end();
}

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection,
    initializeConnection,
    closeConnection
}