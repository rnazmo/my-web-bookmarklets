// Bookmakrlet name:
//     shorten-amazon-url
//
// Documentation for user:
//     What is this?:
//         Move to Amazon canonical URL.
//
//     Bookmark's title:
//         (If you use the bookmarklet name as it is, it may be too long.)
//         shorten-amazon-url
//
// Documentation for developer:
//     TODO:
//         Refactor
//
//     Ref:
//         [Bookmarklet という一番身近な自動化技術 | blog.jxck.io](https://blog.jxck.io/entries/2018-01-12/let-it-bookmarklet.html#canonical)
//
// ===================== Bookmarklet Start =====================
javascript: (function () {
    const asin = document.getElementById('ASIN').value;
    if (asin) {
        const shortUrl = 'https://amazon.jp/dp/' + asin;
        location.href = shortUrl;
    } else {
        alert('ASIN not found, please run it on the amazon.co.jp product page.');
    }
})();
// ===================== Bookmarklet End =====================
