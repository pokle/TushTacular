This is a demo of how to test your javascript web apps using testacular - even of it hasn't been written with AngularJS.


## First install some dependencies if you don't have them:
* Nodejs [http://nodejs.org](http://nodejs.org)
* testacular [http://testacular.github.com](http://testacular.github.com)

## Grab the TushTacular demo:

    git clone https://github.com/pokle/TushTacular.git
    cd TushTacular


## Run it!

	testacular start
	
You should see Chrome start up and run the the tests defined in test/sample.js

test/sample.js has two tests - both open up www.whitepages.com.au (but it could be anything), and:

1. Checks that the a particular javascript object defined by the javascript on the website is available from the tests (yes! you can dig into the javascript environment in the browser)
2. Performs a search
