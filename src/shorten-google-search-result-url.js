// Bookmakrlet name:
//     shorten-google-search-result-url
//
// Documentation for user:
//     What is this?:
//         Move to Google search result canonical URL.
//
//     Bookmark's title:
//         (If you use the bookmarklet name as it is, it may be too long.)
//         shorten-google-search-url
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
    const url = location.href;
    if (url.indexOf('google.com/search') > -1) {
        const params = new URLSearchParams(url.split('?')[1]);
        const q = params.get('q');
        const newUrl = 'https://www.google.com/search?q=' + encodeURIComponent(q);
        location.href = newUrl;
    } else {
        alert('This page is not a Google search results page.');
    }
})();
// ===================== Bookmarklet End =====================
