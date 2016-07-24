// Copyright (c) 2012 Romain Vallet <hoverzoom@gmail.com>
if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
// Licensed under the MIT license, read license.txt

chrome.runtime.sendMessage({action:'getOptions'}, function (options) {
    window.addEventListener('keydown', function (event) {
        if (event.which == options.openImageInTabKey) {
            window.close();
        }
    });
});