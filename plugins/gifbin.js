// Copyright (c) 2016 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Gifbin',
    prepareImgLinks:function (callback) {
        $('a[href*="gifbin.com/"').one('mouseover', function() {
            hoverZoom.prepareFromDocument($(this), this.href, function(doc) {
                var img = doc.getElementById('gif');
                return img ? img.src : false;
            });
        });
    }
});
