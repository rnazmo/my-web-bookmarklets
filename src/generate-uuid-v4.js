// Bookmakrlet name:
//     generate-uuid-v4
//
// Documentation for user:
//     What is this?:
//         Generate UUID v4 and copy it to your clipboard.
//
//     Bookmark's title:
//         (If you use the bookmarklet name as it is, it may be too long.)
//         gen-uuidv4
//
// Documentation for developer:  
//     TODO:
//
//     Ref:
//         [Node.jsでUUIDを生成する（crypto.randomUUID） - Qiita](https://qiita.com/aosho235/items/79a7bb234af047ca5460)
//         [Crypto: randomUUID() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
//         [Crypto | Node.js v14.21.3 Documentation](https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randomuuid_options)
//
// ===================== Bookmarklet Start =====================
javascript: (function () {
  const uuidV4 = crypto.randomUUID();

  navigator.clipboard.writeText(uuidV4).then(function () {
      alert('Generated a new UUID (v4) and copied it to the clipboard.\n' + uuidV4);
  }, function () {
      alert('Failed to copy to clipboard.');
  });
})();
// ===================== Bookmarklet End =====================
