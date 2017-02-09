/// <reference path="angular.d.ts"/>
var OrientationService = (function () {
    function OrientationService($http) {
        this.$http = $http;
    }
    OrientationService.prototype.GetData = function () {
        return this.$http({
            method: 'GET',
            url: '/Data/Orientation.json'
        }).then(function (result) { return result.data; });
    };
    return OrientationService;
})();
//# sourceMappingURL=OrientationService.js.map