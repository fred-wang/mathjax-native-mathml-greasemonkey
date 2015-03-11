/* -*- Mode: Java; tab-width: 2; indent-tabs-mode:nil; c-basic-offset: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// ==UserScript==
// @name MathJax Native MathML
// @namespace https://github.com/fred-wang/mathjax-native-mathml-greasemonkey
// @license Mozilla Public License 2.0, http://mozilla.org/MPL/2.0/
// @description Force MathJax and KaTeX to use the native MathML output.
// @version 1.1
// @icon https://addons.cdn.mozilla.net/user-media/addon_icons/481/481392-64.png
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==

/* Create a mjx.menu cookie for this document and indicate that the NativeMML
   output mode is selected. */
document.cookie = "mjx.menu=" + escape("renderer:NativeMML") + "; path=/";

/* Delete the cookie once the page is loaded. We do not want to keep a cookie
   for each domain visited and most pages using MathJax will already have
   read it during MathJax's startup sequence. */
var listener = function() {
  document.cookie = "mjx.menu=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  window.removeEventListener("load", listener, false);
}
window.addEventListener("load", listener, false);

/* Add some CSS rules to force KaTeX to show its MathML output */
GM_addStyle(".katex { display: inline !important; font-style: inherit !important; font-variant: inherit !important; font-weight: inherit !important; font-stretch: inherit !important; font-size: inherit !important; line-height: inherit !important; font-family: inherit !important; white-space: normal !important; } .katex .katex-mathml { position: static !important; clip: auto !important; height: auto !important; width: auto !important; overflow: visible !important; } .katex .katex-html { display: none !important; }");
