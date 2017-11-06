(
  function(angular) {
    return angular
      .module('ngOrderObjectBy', [])
      .filter('orderObjectBy', function() {
        return function (items, field, reverse, additional) {

          function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }

          var filtered        = [],
            secondary_field   = additional && additional.field ? additional.field : '',
            secondary_reverse = additional && additional.reverse;

          angular.forEach(items, function(item, key) {
            item.key = key;
            filtered.push(item);
          });

          function index(obj, i) {
            return obj[i];
          }

          function compareBy( field, a, b, reverse ) {
            var comparator;
            var reducedA = field.split('.').reduce(index, a);
            var reducedB = field.split('.').reduce(index, b);

            if (isNumeric(reducedA) && isNumeric(reducedB)) {
              reducedA = Number(reducedA);
              reducedB = Number(reducedB);
            }

            if (reducedA === reducedB) {
              comparator = ! secondary_field || field === secondary_field ? 0 : compareBy( secondary_field, a, b, secondary_reverse );
            } else if ( reverse ) {
                comparator = reducedA > reducedB ? -1 : 1;
            } else {
              comparator = reducedA > reducedB ? 1 : -1;
            }
            return comparator;
          }

          filtered.sort(function (a, b) {
            return compareBy( field, a, b );
          });

          if (reverse) {
            filtered.reverse();
          }

          return filtered;
        };
      });
  }
)(angular);
