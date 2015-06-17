all:
	mkdir -p out build
	babel lib\
		--out-dir out\
	 	--source-maps true
	browserify out/index.js -d\
	 	| exorcist build/bundle.js.map > build/bundle.js
	uglifyjs\
		--in-source-map build/bundle.js.map\
		--source-map build/bundle.min.js.map\
		--source-map-url bundle.min.js.map\
		--screw-ie8 -o build/bundle.min.js --\
		build/bundle.js

watch:
	make all 
	watch-run -p "lib/**.js" -- make all
