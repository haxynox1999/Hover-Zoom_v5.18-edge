﻿// Copyright (c) 2013 Romain Vallet <hoverzoom@gmail.com>
if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
// Licensed under the MIT license, read license.txt

function slice(a) {
  return Array.prototype.slice.call(a);
}

function qs(s) {
  return document.querySelector(s);
}

function qsa(s) {
  return document.querySelectorAll(s);
}

function ce(s) {
  return document.createElement(s);
}

function ge(s) {
  return document.getElementById(s);
}

function parentNodeName(e, tag) {
  var p = e.parentNode;
  if (!p) { return null; }
  if (p && p.nodeName == tag.toUpperCase()) {
	return p;
  } else {
    return parentNodeName(p, tag);
  }
}