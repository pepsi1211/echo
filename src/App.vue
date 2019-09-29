<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style lang="scss">
@charset "UTF-8";
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-23 23:24:54
 * @version $Id$
 */

ol, ul {
	list-style: none;
}

blockquote, body, button, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, pre, td, textarea, th, ul {
	margin: 0;
	padding: 0;
}

body {
	line-height: 1.5;
	font-family: "Microsoft Yahei";
}

a {
	cursor: pointer;
	text-decoration: none;
}

input {
	text-rendering: auto;
	color: initial;
	letter-spacing: normal;
	word-spacing: normal;
	text-transform: none;
	text-indent: 0;
	text-shadow: none;
	display: inline-block;
	text-align: start;
	cursor: text;
}

img {
	max-width: 100%;
	border: 0;
}

.video-js button, :link, :visited, ins {
	text-decoration: none;
}

.web-index .main-left .expjingxuan .expjingxuan-list li.echo-famous .mv-title.icon-famous-album:after {
	content: "v";
	margin: 2px 0 5px;
	vertical-align: top;
}

.icon-famous-album.icon-famous-album10:after, .icon-famous-album.icon-famous-album1:after, .icon-famous-album.icon-famous-album2:after, .icon-famous-album.icon-famous-album3:after, .icon-famous-album.icon-famous-album4:after, .icon-famous-album.icon-famous-album5:after, .icon-famous-album.icon-famous-album6:after, .icon-famous-album.icon-famous-album7:after {
	background: #43c947;
	content: "v";
}

.icon-famous-album:after {
	display: inline-block;
	width: 15px;
	height: 15px;
	font: 400 12px/15px arial;
	margin: 0 0 0 5px;
	vertical-align: middle;
}

.icon-famous-album:after, .icon-famous:after {
	color: #fff;
	border-radius: 50%;
	text-align: center;
}

address, caption, cite, code, dfn, em, optgroup, th, var {
	font-weight: 400;
	font-style: normal;
}

h1, h2, h3, h4, h5, h6 {
	font-weight: 400;
	font-size: 100%;
}

::selection {
	background-color: #ccc;
}

.main-app {
	background: #ebebeb;
}

.main-center100 {
	width: 100%;
}

.clearfix, main {
	display: block;
}

.clearfix:after {
	content: ".";
	clear: both;
	display: block;
	visibility: hidden;
	height: 0;
}

.main-center {
	margin: 0 auto;
	width: 1000px;
	min-height: 200px;
}
</style>
