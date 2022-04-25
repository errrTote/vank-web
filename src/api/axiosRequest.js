import axios from "axios";
import { baseUrl } from "../config";
const handleError = (err = {}) => {
  const requestMessage = err.response?.data?.message;
  if (requestMessage) return { error: requestMessage };
  
  let error = "";
  const status = err.response?.status;
  switch (status) {
    case 400:
      error = "Datos incorrectos en la consulta";
      break;
    case 401:
      error = "Debe autenticarse para realizar esta consulta";
      break;
    case 403:
      error = "No posee los permisos para realizar esta consulta";
      break;
    case 404:
      error = "No se encontro resultados para esta consulta";
      break;
    default:
      error = "Error desconocido en la consulta";
  }
  return { error };
};

export const request = async ({ method = "GET", data, url, headers, params }) => {
  const config = {
    baseURL: baseUrl,
    method,
    url,
    data,
    headers,
    params
  };

  try {
    const response = await axios(config);
    return {data: response.data};
  } catch (error) {
    return handleError(error);
  }
};
