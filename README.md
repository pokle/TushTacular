# TushTacular

[![Circle CI Build Status](https://circleci.com/gh/pokle/TushTacular.png?circle-token=6b4b88a0d80e58c518f0cbdd364e5e279f8c036b)](https://circleci.com/gh/pokle/TushTacular)


This is a demonstrator (or even a seed project) that shows you how to test your non-AngularJS javascript apps using Karma (formerly Testacular). 


## First install some dependencies if you don't have them:
* Nodejs [http://nodejs.org](http://nodejs.org)
* Karma [http://karma-runner.github.io/](http://karma-runner.github.io/)

        npm install -g karma   # Install Karma globally

## Grab the TushTacular demo:

    git clone https://github.com/pokle/TushTacular.git
    cd TushTacular

## Run it!

	karma start
	
You should see Chrome start up and run the the tests defined in test/sample.js

test/sample.js has two tests - both open up www.whitepages.com.au (but it could be anything), and:

1. Checks that the a particular javascript object defined by the javascript on the website is available from the tests (yes! you can dig into the javascript environment in the browser)
2. Performs a search
