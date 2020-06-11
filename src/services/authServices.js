class AuthServices {
  loggedIn = (token) => {
    if (token) {
      localStorage.setItem("TOKEN", JSON.stringify(token.accessToken));
      localStorage.setItem("Time", JSON.stringify(new Date().getTime()));
    }
  };

  chekingLiveToken = () => {
    return localStorage.getItem("TOKEN") &&
      ((new Date().getTime() - localStorage.getItem("Time")) < 3600000);
  };
}

const authServices = new AuthServices();

export default authServices;
