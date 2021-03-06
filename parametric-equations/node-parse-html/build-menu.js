	var fs = require( "fs" );
	var menuItems = '';

	fs.readdir( "./", function ( error, files ) {
		if ( error ) throw error;
		files.sort();
		var file, title;

		for (var i = 0, len = files.length; i < len; i++) {
			file = files[i];
			if ( file.indexOf(".js") > -1 || file.indexOf(".html") > -1 || file.indexOf(".md") > -1 ) continue;

			title = file.replace( /\-/gi, " " )
			title = title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

			menuItems += "<a href=JavaScript:displayPage(\'#" + file + "/readme.md\#" + file.substr(0, 4) + "\'); >" +  title + "</a>  \n";
		} 
		
		fs.writeFile( "./readme-menu.md", menuStart + menuItems + menuFinish, function ( error ) {
			if ( error ) throw error;
console.log( files );
		});
	});

var menuStart = 
	"[Jaanga](../../index.html ) &raquo;<br>[algeSurf]( ../../index.html ) &raquo;<br>[Parametric Equations]( ./index.html )\n" +
	"===\n" +
	"\n" +
	"<p id=rm >\n" +
	"	<a href=JavaScript:displayPage('#readme.md\#rm'); >Read Me</a>\n" +
	"</p>\n" +
	" \n" +
	"## Equations\n";

var menuFinish =
	"<br>\n" +
	// "<i class='fa fa-external-link'></i> [Live Demo (latest)]( http://jaanga.github.io/algesurf/parametric-equations/r2/readme-reader.html#./boy-surface/readme.md#rm )  \n" +
	"\n" +
	"<i class='fa fa-github'></i> [Source code on GitHub]( https://github.com/jaanga/algesurf/tree/gh-pages/parametric-equations/ )  \n" +
	"<br>\n" +

	" \n" +
	"<i class='fa fa-copy'></i> [Copyright and license]( https://github.com/jaanga/jaanga.github.io/blob/master/jaanga-copyright-and-mit-license.md )  \n" +
	"";
