import http from "../http-common";

const getAll = () => {
    return http.get("/accountDetails");
}

const AccountDetailsService = {
  getAll  
};

export default AccountDetailsService;