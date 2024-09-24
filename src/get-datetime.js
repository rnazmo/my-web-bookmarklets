// Bookmakrlet name:
//     get-datetime
//
// Documentation for user:
//     What is this?:
//         Get the current datetime of with the format "YY-MM-DD-hh-mm"
//         and copy it to your clipboard.
// 
//     Bookmark's title:
//         (If you use the bookmarklet name as it is, it may be too long.)
//         get-time
// 
// Documentation for developer:  
//     TODO:
//
//     Ref:
//         https://qiita.com/QDM/items/f2bd23565909b6a102bf
// 
// ===================== Bookmarklet Start =====================
javascript: (function () {
  const padLeft = (digit) => ("00" + digit).slice(-2);

  const date = new Date();
  const Y = date.getFullYear();
  const M = padLeft(date.getMonth() + 1);
  const D = padLeft(date.getDate());
  const h = padLeft(date.getHours());
  const m = padLeft(date.getMinutes());
  const txtNow = Y + "-" + M + "-" + D + "T" + h + ":" + m;

  navigator.clipboard.writeText(txtNow).then(function () {
      alert('Get the current datetime and copied it to the clipboard.\n' + txtNow);
  }, function () {
      alert('Failed to copy to clipboard.');
  });
})();
// ===================== Bookmarklet End =====================
