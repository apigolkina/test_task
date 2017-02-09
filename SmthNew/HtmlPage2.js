/// <reference path="./jquery.d.ts" />
var Model2 = (function () {
    function Model2(data) {
        var _this = this;
        this.ress = [];
        this.json2 = data;
        this.ress = data.map(function (array) { return _this.bezier(array); });
    }
    Model2.prototype.sum = function (p1, p2) {
        return { X: p1.X + p2.X, Y: p1.Y + p2.Y };
    };
    Model2.prototype.mult = function (h, p1) {
        return { X: h * p1.X, Y: h * p1.Y };
    };
    Model2.prototype.diff = function (p1, p2) {
        return { X: p1.X - p2.X, Y: p1.Y - p2.Y };
    };
    Model2.prototype.div = function (p1, h) {
        return { X: p1.X / h, Y: p1.Y / h };
    };
    Model2.prototype.bezier = function (array) {
        var a = [], cx1 = [], cx2 = [], result = "M", smoothK = 0.3, j;
        array.push(array[0]);
        var k = array.length;
        a.push(this.div(this.diff(this.mult(3, array[0]), array[k - 1]), 2));
        for (j = 1; j < k; j++) {
            a.push(this.div(this.diff(this.mult(3, array[j]), array[j - 1]), 2));
        }
        for (var t = 0; t < k - 1; t++) {
            cx1.push(this.div(this.sum(this.mult(smoothK, array[t + 1]), a[t]), (smoothK + 1)));
        }
        cx1.push(this.div(this.sum(this.mult(smoothK, array[0]), a[a.length - 1]), (smoothK + 1)));
        for (t = 0; t < k - 1; t++) {
            cx2.push(this.diff(this.mult(2, array[t + 1]), cx1[t + 1]));
        }
        cx2.push(this.diff(this.mult(2, array[0]), cx1[0]));
        a.forEach(function (elem, index) {
            result = result + " " + array[index].X + "," + array[index].Y + " C" + cx1[index].X + "," + cx1[index].Y + " " +
                cx2[index].X + "," + cx2[index].Y;
        });
        result = result + " " + array[0].X + "," + array[0].Y;
        return result;
    };
    return Model2;
})();
//# sourceMappingURL=HtmlPage2.js.map