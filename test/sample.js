

TushTacular.describe('dynamic search', function(browser) {

    it("should have access to the wpol javascript object", function() {
        browser.on('/', function() {
            expect(browser.window().wpol).toBeDefined()
        })
    })

    it("should show the results for Salty", function() {

        browser.on('/', function() {
            
            browser.input('#nameInput').enter('Salty')
            browser.input('#locationInput').enter('Springwood, QLD')
            browser.button('#searchButton').click()

            browser.waitsFor("result message to show up", function(){ 
                return browser.find('span.message').text() === '1 result for Salty found in Springwood, QLD or surrounding locations'
            })

        })

    })


})