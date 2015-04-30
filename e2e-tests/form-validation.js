'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app with a form', function() {


  describe('MyController', function() {
    var firstnameInput = null;
    var firstnameField = null;
    var lastnameInput = null;
    beforeEach(function() {
      browser.get('index-example-form-validation.html');

      firstnameInput = element(by.model('form.firstname'));
      firstnameField = element(by.binding('form.firstname'));
      lastnameInput = element(by.model('form.lastname'));

    });

    it('should render a pre populated form', function() {

      expect(firstnameInput.getAttribute('value')).toMatch(/Mike/);
      expect(firstnameField.getText()).toMatch(/Mike/);

    });

    it('should let me change the name', function(){
      firstnameInput.sendKeys('Gary');
      expect(firstnameField.getText()).toMatch(/Gary/);
    });

    it('should require last name', function(){
      expect(lastnameInput.getAttribute('class')).toContain('ng-invalid-required');
      expect(lastnameInput.sendKeys('Howard'));
      expect(lastnameInput.getAttribute('class')).not.toContain('ng-invalid-required');

    });
  });

});
