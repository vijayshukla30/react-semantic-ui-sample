/* eslint-disable import/no-anonymous-default-export */
const isAuthenticated = () => {
  console.log("localStorage :>> ", localStorage);
  return !!localStorage.token;
};

export default isAuthenticated;
