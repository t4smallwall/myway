#!/bin/bash
if [ $# != 2 ]
then
	echo "Wrong no of arg"
	exit -1
fi	
htmlfile 	= $1
title 		= $2
template 	= ""
`touch $htmlfile`
$template = "$template <!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">"
$template = "$template <html dir=\"ltr\" lang=\"en\">"
$template = "$template <head>"
$template = "$template <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"> "
$template = "$template <!--style type=\"text/css\">"
$template = "$template 	@import 'hidingstyle.css';"
$template = "$template </style-->"
$template = "$template <link rel=\"stylesheet\" href=\"active.css\" type=\"text/css\" media=\"screen,projection\"/>"
$template = "$template <script type=\"text/javascript\" src=\"active.js\"></script>"
$template = "$template </head>"
$template = "$template <body>"
$template = "$template </body>"
$template = "$template </html>"
`echo $tempate | cat > $htmlfile` 
