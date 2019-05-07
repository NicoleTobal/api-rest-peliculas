const getSettings = () => {
    const settings = require("./development.json");
    settings.databaseData.password = process.env.mysql_password;
    return settings;
} 

module.exports = {
    settings: getSettings()
}