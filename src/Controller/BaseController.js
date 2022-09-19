function returnSuccess(message = 'success', data = null) {
  if(data==null){
    return {
      "code": 200,
      "result": "Success",
      "message": message
    };

  }
  return {
    "code": 200,
    "result": "Success",
    "message": message ,
    "data" : data
  };
}

function returnError(message = 'error') {
  return {
    "code": 400,
    "status":"status",
    // "result": "Error",
    "message": message,
    "data":null
  };
}

module.exports = {
  returnSuccess,
  returnError
}