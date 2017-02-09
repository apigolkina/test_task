/// <reference path="./jquery.d.ts" />
class Model1 {
    public json1;

    constructor(data: { X: number; Y: number;}[][]) {
        this.json1 = data;
        this.results = data.map(array => this.orientation(array));
    }

    public results: boolean[];

    private orientation(array) {

        var d = 0;
        var k = array.length;

        for (var j = 0; j < k - 1; j++) {
            d = d + (array[j].X * array[j + 1].Y - array[j + 1].X * array[j].Y) / 2;
        }

        d = d + (array[k - 1].X * array[0].Y - array[0].X * array[k - 1].Y) / 2;

        return d > 0;
    }
}


