﻿// Copyright (c) 2012 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'JeuxVideo.fr',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        $('img[zoom]').each(function () {
            var _this = $(this);
            _this.data().hoverZoomSrc = [this.getAttribute('zoom')];
            res.push(_this);
        });
        callback($(res));
    }
});