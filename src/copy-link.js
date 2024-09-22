// Bookmakrlet name:
//     copy-link
//
// Documentation for user:
//     What is this?:
//         Copy the page's link (= title + URL) in markdown format
//         to your clipboard.
//
//     Prerequisites:
//         (Latest web browser ?)
//         (JavaScript version: ">=ES2021" ?)
//
//     Output:
//         Format:
//             [title](url)
//         Example:
//             [rnazmo / assets · GitLab](https://gitlab.com/rnazmo/assets)
// 
//     Bookmark's title:
//         (If you use the bookmarklet name as it is, it may be too long.)
//         copy-link
//
// Documentation for developer:  
//     TODO:
//         RemoveTagFromTitleOfQiita
//             Tag in title is confusing and verbose. Remove it.
//             Example:
//                    [結局 Git のブランチ戦略ってどうすればいいの？ #git-flow - Qiita]
//                 => [結局 Git のブランチ戦略ってどうすればいいの？ - Qiita]
//         RemoveDescriptionFromTitleOfGitHub
//             Repository description in title is verbose. Remove it.
//             Example:
//                    [rnazmo/proper7y: Tiny Bash script to print basic system information in consistent format for my own use.](https://github.com/rnazmo/proper7y)
//                 => [rnazmo/proper7y](https://github.com/rnazmo/proper7y)
//         Google's search result page URL:
//             It's tooooo long.
//             Example:
//                    [foo site:qiita.com - Google Search](https://www.google.com/search?very_very_very_very_long_parameters)
//                 => [foo site:qiita.com - Google Search](https://www.google.com/search?q=foo%20site%3Aqiita.com)
//         Amazon's page URL:
//             It's tooooo long.
//                    [JavaScript 第7版 | Amazon](https://www.amazon.co.jp/JavaScript-%E7%AC%AC7%E7%89%88-David-Flanagan/dp/4873119707/ref=very_very_very_very_long_parameters)
//                 => [JavaScript 第7版 | Amazon](https://amazon.jp/dp/4873119707)
//         Support Heading tags?:
//             Support mode change option??? (heading-on/heading-off)
//                 Implementing options requires a lot of time and effort :(
//             Example:
//                 heading-on:
//                     [<h1>–<h6>: The HTML Section Heading elements #Try_it | MDN]
//                     (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#try_it)
//                 heading-off:
//                     [<h1>–<h6>: The HTML Section Heading elements | MDN]
//                     (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#try_it)
//
//     Description of implementation:
//         replaceCharacters
//             文字列内の特定の文字を別の文字に置換する関数
//             @param {string} text - 置換対象の文字列
//             @param {Object} replacements - 置換ルールを定義したオブジェクト
//             @returns {string} 置換後の文字列
//         compose
//             関数合成を行うヘルパー関数
//
//     Ref:
//         N/A
//   
//     NOTE:
//         Do not write comments in the code. Otherwise, the code will not work as a bookmarklet.
//
// ===================== Bookmarklet Start =====================
javascript: (function () {
    const replaceCharacters = (text, replacements) => {
        return Object.entries(replacements).reduce(
            (result, [from, to]) => result.replaceAll(from, to),
            text
        );
    };

    const trimSpace = (str) => str.trim();
    const escapeMarkdownChracters = (str) => {
        const replacementRules = {
            '/': '／',
            '#': '＃',
        };
        return replaceCharacters(str, replacementRules);
    };

    const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

    const formatPageTitle = title => {
        return compose(
            escapeMarkdownChracters,
            trimSpace,
        )(title);
    };

    function formatPageUrl(url) {
        return url;
    }

    const pageTitle = document.title;
    const pageUrl = window.location.href;
    const formatedPageTitle = formatPageTitle(pageTitle);
    const formatedPageUrl = formatPageUrl(pageUrl);
    const markdownLink = `[${formatedPageTitle}](${formatedPageUrl})`;

    navigator.clipboard.writeText(markdownLink).then(function () {
        alert('Copied the markdown link to the clipboard.\n' + markdownLink);
    }, function () {
        alert('Failed to copy to clipboard.');
    });
})();
// ===================== Bookmarklet End =====================
