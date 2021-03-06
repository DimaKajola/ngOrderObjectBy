# Angular orderObjectBy filter

## Synopsis

This original filter was [created by **Justin Klemm**](http://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/) because the default Angular orderBy filter fails to sort properly Objects of Objects in the context of ngRepeat.

This fork is used to sort the list of objects by secondary property name.

## Use

Install as Bower dependency: ```bower install https://github.com/DimaKajola/ngOrderObjectBy.git```.

Include on your Angular module's dependencies:

```javascript
angular.module('YourModule', ['ngOrderObjectBy'])
```

Then, in your application views:

```html
<ul>
    <li ng-repeat="object in objects | orderObjectBy: 'criteria' : direction : {field:'user_registered', reverse: true}">...</li>
</ul>
```


For an example see [test/index.html](https://github.com/fmquaglia/ngOrderObjectBy/blob/master/test/index.html).

## Tests

You need [karma](https://www.npmjs.org/package/karma), [karma-cli](https://www.npmjs.com/package/karma-cli), [karma-jasmine](https://www.npmjs.org/package/karma-jasmine), [phantomjs](https://www.npmjs.org/package/phantomjs), [karma-phantom-js-launcher](https://www.npmjs.org/package/karma-phantomjs-launcher) and [angular-mocks](https://www.npmjs.org/package/angular-mocks) in order to run the tests.

```karma start karma.conf.js ```

## Contributions

Feel free to fork, and submit your pull requests using a feature branch on your fork.

Don't forget to add tests! :wink:
