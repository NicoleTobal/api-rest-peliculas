const validateParams = (params) => {
  const notExpectedParams = Object.keys(params).filter(param =>
      !['pageSize', 'pageNumber', 'filter'].includes(param)).length !== 0;
  const bothParams =
    (!params.pageSize && !params.pageNumber) ||
    (params.pageSize && params.pageNumber);
  if (notExpectedParams) {
    throw Error('Wrong Params');
  }
  if (!bothParams) {
    throw Error('Both Params');
  }
  if (params.pageSize) {
    if(isNaN(params.pageSize)) {
      throw Error('Wrong Data type');
    }
  }
  if (params.pageNumber) {
    if(isNaN(params.pageNumber)) {
      throw Error('Wrong Data type');
    }
  }
  if (params.filter) {
    if(params.filter.match(/^[A-Za-z]+$/)) {
      throw Error('Wrong Data type');
    }
  }
}

module.exports = {
  validateParams
}
