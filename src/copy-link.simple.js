// ===================== Bookmarklet Start =====================
javascript: (function () {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    const markdownLink = `[${pageTitle}](${pageUrl})`;

    navigator.clipboard.writeText(markdownLink).then(function () {
        alert('Copied the markdown link to the clipboard.\n' + markdownLink);
    }, function () {
        alert('Failed to copy to clipboard.');
    });
})();
// ===================== Bookmarklet End =====================
