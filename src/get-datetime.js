// Name:
//   get-datetime
// Description:
//   Get the current datetime of with the format "YY-MM-DD-hh-mm"
// Ref:
//   https://qiita.com/QDM/items/f2bd23565909b6a102bf
// TODO:
//   末尾に -JST 付ける？
//   e.g. 2022-09-17-11-19-JST

// ---------- Bookmarklet Start ----------
javascript: {
    let padLeft = (digit) => ("00" + digit).slice(-2);
    let composeData = () => {
      const date = new Date();
      const Y = date.getFullYear();
      const M = padLeft(date.getMonth() + 1);
      const D = padLeft(date.getDate());
      const h = padLeft(date.getHours());
      const m = padLeft(date.getMinutes());
      let txtNow = Y + "-" + M + "-" + D + "-" + h + "-" + m;
      return txtNow
    }
    let copyListener = (event) => {
      document.removeEventListener("copy", copyListener, true);
      event.preventDefault();
      let clipboardData = event.clipboardData;
      clipboardData.clearData();
      txtNow = composeData()
      clipboardData.setData("text/plain", txtNow);
      console.log("current datetime: " + txtNow);
    };
  
    let main = () => {
      document.addEventListener("copy", copyListener, true);
      document.execCommand("copy");
    };
    main();
  }
  // ---------- Bookmarklet End ----------
  