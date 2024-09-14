const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? process.env.LOCAL_API_BASE_URL
    : process.env.PROD_API_BASE_URL;
};

export default getBaseUrl;
