'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app with a form', function () {


    describe('MyController', function () {

        var button = null;
        beforeEach(function () {
            browser.get('index-example-http2.html');
            button = element(by.buttonText('Download'));
        });

        it('should should have a button', function () {
            expect(button).not.toBe(null)
        });

        it('should have a list after download', function () {
            button.click().then(function () {
                element(by.css('[ng-show="movies"]')).isDisplayed().then(function () {
                    console.log('movies are displayed');
                    var rows = element.all(by.repeater('movie in movies')).then(function (rows) {
                        expect(rows.length).toBeGreaterThan(1);
                    });
                });
            });
        });

    });

});
