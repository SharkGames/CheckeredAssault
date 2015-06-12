all:
	babel lib --out-dir out --source-maps
	browserify out/index.js -d -o bundle.js

watch: watch-lib watch-out

watch-lib:
	babel lib --watch --out-dir out --source-maps=inline

watch-out:
	watchify out/index.js -d -o bundle.js -v
