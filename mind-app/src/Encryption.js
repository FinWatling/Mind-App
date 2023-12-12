import CryptoJS from "crypto-js";

export const Encryption = () => {
  function encrypt(data, password) {
    return CryptoJS.AES.encrypt(data, password).toString();
  }

  function decrypt(data, password) {
    const bytes = CryptoJS.AES.decrypt(data, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  return {
    encrypt,
    decrypt,
  };
};