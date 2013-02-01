# grunt mocha browser test seed

This project is a seed for testing front side js with [mocha](http://visionmedia.github.com/mocha/) framework under [Grunt](http://gruntjs.com/). 

So to run this project, [grunt](https://github.com/gruntjs/grunt/tree/0.3-stable) need be installed & [Phantomjs](http://phantomjs.org/) also need be installed

## install

```
1. clone the project
2. npm install
3. grunt
```

## usage

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