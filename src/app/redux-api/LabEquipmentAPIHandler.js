import api from '../../config/AxiosClient';

/***************************************************************
 * This handler allows you to make Magna API requests 
 * and send back the response.
 ***************************************************************/


const LabEquipmentAPIHandler = (requestURL, requestType, requestBody ) => {
    //By default method will be GET unless untill there's some requestType
    let method = requestType ? requestType : 'GET';

    //only POST requests contain body
    let data = requestBody.data ? requestBody.data: '';

    return api({
        method,
        url: requestURL,
        data,
    }).then((response) => { 
          return response;
    });
}

export default LabEquipmentAPIHandler;