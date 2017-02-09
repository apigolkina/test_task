/// <reference path="angular.d.ts"/>
var BezierService = (function () {
    function BezierService($http) {
        this.$http = $http;
    }
    BezierService.prototype.GetData = function () {
        return this.$http({
            method: 'GET',
            url: '/Data/Bezier.json'
        }).then(function (result) { return result.data; });
    };
    return BezierService;
})();
//# sourceMappingURL=BezierService.js.map