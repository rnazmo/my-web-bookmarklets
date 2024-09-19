// Generate UUID v4
// Ref:
//   [Node.jsでUUIDを生成する（crypto.randomUUID） - Qiita](https://qiita.com/aosho235/items/79a7bb234af047ca5460)
//   [Crypto: randomUUID() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
//   [Crypto | Node.js v14.21.3 Documentation](https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randomuuid_options)
javascript: {
    let copyListener = (event) => {
      document.removeEventListener("copy", copyListener, true);
      event.preventDefault();
      let clipboardData = event.clipboardData;
      clipboardData.clearData();
      const uuid_v4 = crypto.randomUUID();
      clipboardData.setData("text/plain", uuid_v4);
      console.log("Generated UUID v4: " + uuid_v4);
    };
    document.addEventListener("copy", copyListener, true);
    document.execCommand("copy");
  }
  