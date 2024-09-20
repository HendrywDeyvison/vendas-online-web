import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);

    const returnData = await axios({
      method: 'get',
      url: url,
    })
      .then((result) => result?.data)
      .catch((error) => alert(error.response.data.message));

    setLoading(false);

    return returnData;
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);

    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((result) => result?.data)
      .catch((error) => alert(error.response.data.message));

    setLoading(false);

    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
