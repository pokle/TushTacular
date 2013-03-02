
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/**/*.js',
  'test/**/*.js'
];

proxies = {
    '/': "http://www.whitepages.com.au"
}

autoWatch = true;

browsers = ['Chrome'];

singleRun = false;

urlRoot = "tushtacular"