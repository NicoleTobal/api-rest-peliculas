const selectQuery = ({pageNumber, pageSize, filter}, table, orderColumnName, filterColumnName) => {
  let offsetClause = '';
  let limitClause = '';
  let filterClause = '';
  if (pageNumber && pageSize) {
      offsetClause = ' OFFSET ' + ((pageNumber - 1) * pageSize);
      limitClause = ' LIMIT ' + pageSize;
  }
  if (filter) {
      filterClause = ' WHERE ' + filterColumnName + ' LIKE "%' + filter + '%"';
  }
  return 'SELECT * FROM ' + table + filterClause + ' order by ' + orderColumnName + ' ASC' + limitClause + offsetClause;
}

const deleteQuery = (table, columnName, value) => {
  return 'DELETE FROM ' + table + ' WHERE ' + columnName + '=' + value;
};

const updateQuery = (table, columnName, columnValue, newData) => {
  const columns = Object.keys(newData);
  let setClause = columns[0] + "='" + newData[columns[0]] + "'";
  if (columns.length > 1) {
    for (let i = 1; i < columns.length; i++) {
      setClause += ", " + columns[i] + "='" + newData[columns[i]] + "'";
    }
  }
  return 'UPDATE ' + table + ' SET ' + setClause + ' WHERE ' + columnName + '=' + columnValue;
}

const formatArrayToSqlArray = (originalArray) => {
  let sqlArray = '(';
  for (let i = 0; i < originalArray.length; i++) {
    sqlArray += "'" + originalArray[i] + "',";
  }
  return sqlArray.substr(0, sqlArray.length - 1) + ")";
};

module.exports = {
  selectQuery,
  deleteQuery,
  updateQuery,
  formatArrayToSqlArray
}