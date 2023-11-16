import CryptoJS from "crypto-js";
export const Encryption = () => {
  function encrypt(data, password) {
    return CryptoJS.AES.encrypt(data, password);
  }

  function decrypt(data, password) {
    return CryptoJS.AES.decrypt(data, password);
  }

  return {
    encrypt,
    decrypt,
  };
};
