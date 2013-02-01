# grunt mocha browser test seed

This project is a seed for testing front side js by using [mocha](http://visionmedia.github.com/mocha/) framework with [Grunt](http://gruntjs.com/) in browser or [Phantomjs](http://phantomjs.org/). 

So to run this project, [grunt](https://github.com/gruntjs/grunt/tree/0.3-stable) & [Phantomjs](http://phantomjs.org/) need be installed.

## install

```
1. git clone https://github.com/wen-bing/mocha-browser-test-seed.git
2. npm install
3. grunt
```

## integration

- copy test folder to your project dir

- add the following section to your grunt file

```
// Project configuration
grunt.initConfig({
mocha: {
  all: ['test/**/*.html']
}
});

//load grunt-mocha task
grunt.loadNpmTasks('grunt-mocha');
// Default task.
grunt.registerTask('default', 'mocha');
```

- add dependency of [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha) to your package.json

```
"dependencies": {
	"grunt-mocha": "0.1.x"
}
```

## run test

```
grunt mocha
```
Here are the result:

```
Running "mocha:all" (mocha) task
Testing sample-test-runner.html....OK
>> 4 assertions passed (0.03s)

```