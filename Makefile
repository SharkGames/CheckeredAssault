all:
	babel lib --out-dir out --source-maps true
	browserify out/index.js -d | exorcist bundle.js.map > bundle.js
	uglifyjs --in-source-map bundle.js.map --source-map bundle.min.js.map --screw-ie8 -o bundle.min.js -- bundle.js

watch:
	make all 
	watch-run -p "lib/**.js" -- make all
