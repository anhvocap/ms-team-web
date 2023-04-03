import axios from "axios";
import * as FormData from "form-data";

const linkToken = "https://login.microsoftonline.com/f055188a-0916-40fd-aeed-2ba499834c94/oauth2/v2.0/token";
const headers = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};

const getAccessToken = async function() {
  try {
    const formData = new FormData();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "f50bebee-b729-43fd-b01b-a3da4bc77250");
    formData.append("client_secret", "HKq8Q~2MDu42ARyeocQXzJzkvhUnLlf7cU46lcno");
    formData.append("scope", "https://graph.microsoft.com/.default");

    const res = await axios.post(linkToken, formData, headers);
    const { token_type, expires_in, not_before, expires_on, resource, access_token } = res.data;
    return { token_type, expires_in, access_token };
  } catch (err) {
    console.log("ERROR: getAccessToken has error !");
    throw err;
  }
};

export default {
  getAccessToken
};
