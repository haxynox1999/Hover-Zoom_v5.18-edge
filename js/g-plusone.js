if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
(function () {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
