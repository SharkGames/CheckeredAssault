# CheckeredAssault

## Building and Compiling

### Required tools

* Node/NPM
* C++ compiler
* Make
* Git

### Getting Dependencies

```sh
npm install #install npm dependencies
```

Additional dependencies should be added using

```sh
npm install --save $DEPENDENCY
```

### Compiling

We want to be able to avoid running a build every time we change files.
We can use a file watcher to do this task for us.

```sh
npm run watch
# make code changes now, the command should see them and update the files
```

## Running

Open `index.html` in order to see the HTML page in action.
You will need to refresh the page after code changes.

## Directories and Files

```
/lib # where development source goes
  /ui
  /game
  /component
/out # where compiled source goes
/index.html
/style.css
/bundle.js # the file for the bundled source (what the html page uses)
```
