import API_CONSTANTS from '../API_CONSTANTS';
import API_STAGE from './API_STAGE';
import Error from '../../inputtypes/Error';
import AppConstants from '../../AppConstants';
import ApiClient from './ApiClient';

const {
  PENDING,
  FULFILLED,
  REJECTED,
} = API_STAGE;

const APIResponse =  (action, apiStage, data = null) => {
  return {
    type: `${action}${apiStage}`,
    payload: data,
  }
};

const APIService = async (dispatch, action, apiURL, configObj) => {
  const {
    baseURL,
  } = API_CONSTANTS;
  const url = baseURL + apiURL;

  try {

    dispatch(APIResponse(action, PENDING));

    const config = {
      url,
      timeout: AppConstants.API_TIMEOUT,
      ...configObj
    };

    const response = await ApiClient(config);

    const { data } = response || {};

    if (data && data.errors) {
      dispatch(APIResponse(action, REJECTED, response));

    } 
    else if (data && data.name && data.name === 'MongoError') {
      dispatch(APIResponse(action, REJECTED, response));
    } 
    else {
      dispatch(APIResponse(action, FULFILLED, response));
    }
    
  } catch (error) {
    dispatch(APIResponse(action, REJECTED, error));
  }
  
};

export default APIService;