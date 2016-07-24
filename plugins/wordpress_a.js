﻿// Copyright (c) 2012 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Wordpress',
    prepareImgLinks:function (callback) {
        if (hoverZoom.pageGenerator && hoverZoom.pageGenerator.indexOf('WordPress') == -1) {
            return;
        }
        var res = [];
        $('img[src*="wp-content"]').each(function () {
            var img = $(this),
                re = /-\d+x\d+\./,
                src = this.src;
            if (src.match(re)) {
                src = src.replace(re, '.');
                img.data().hoverZoomSrc = [src, src.replace(/jpg$/, 'jpeg')];
                res.push(img);
            }
        });
        callback($(res));
    }
});