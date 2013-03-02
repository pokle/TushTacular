
TushTacular = {
    TIMEOUT: 10000
}

TushTacular.describe = function(message, func) {
    describe(message, function() {
        TushTacular.setup()
        func(TushTacular)
    })
}

TushTacular.setup = function () {

    beforeEach(function() {
        $('#tushtacular-test-frame').remove()
        $('body').append("<iframe id='tushtacular-test-frame' width='100%' height='500px' src='about:blank'></iframe>")
    })

    afterEach(function() {
        $('#tushtacular-test-frame').remove()
    })
}

TushTacular.waitsFor = function(message, predicate) {
    waitsFor(predicate, message, TushTacular.TIMEOUT)
}

TushTacular.on = function(uri, callback) {
    $('#tushtacular-test-frame').attr('src', uri)
    var ready = false
    $('#tushtacular-test-frame').load(function() {ready = true})
    TushTacular.waitsFor(uri + " to load in iframe", function() {return ready})
    runs(callback)
}

TushTacular.window = function() {
   return $('#tushtacular-test-frame').prop('contentWindow') 
}

TushTacular.document = function () {
    return TushTacular.window().document
}

TushTacular.find = function(selector) {
    return $(TushTacular.document()).find(selector)    
}

TushTacular.input = function(selector) {
    return {
        enter: function(text) {
            var target = TushTacular.find(selector)

            var ev = TushTacular.document().createEvent("Events")
            ev.initEvent('input', true, false)

            target.val(text)
            target[0].dispatchEvent(ev)
        }
    }
}