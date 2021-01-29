const responseHelper = (code, data) => {

    var mensaje = "";
    if (code == 1) {
      mensaje = "Successful";
    } else if (code == 2) {
      mensaje = "Data not found";
    } else if (code == 3) {
      mensaje = "Contact the administrator";
    }else if (code == 4) {
      mensaje = "Alredy is exists";
    }
    json = {
      code: code,
      message: mensaje,
      result: data
    };
    return json;
  };
  
  module.exports = {
    responseHelper,
  };
  