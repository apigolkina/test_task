/// <reference path="./jquery.d.ts" />
var Model1 = (function () {
    function Model1(data) {
        var _this = this;
        this.json1 = data;
        this.results = data.map(function (array) { return _this.orientation(array); });
    }
    Model1.prototype.orientation = function (array) {
        var d = 0;
        var k = array.length;
        for (var j = 0; j < k - 1; j++) {
            d = d + (array[j].X * array[j + 1].Y - array[j + 1].X * array[j].Y) / 2;
        }
        d = d + (array[k - 1].X * array[0].Y - array[0].X * array[k - 1].Y) / 2;
        return d > 0;
    };
    return Model1;
})();
//# sourceMappingURL=HtmlPage1.js.map