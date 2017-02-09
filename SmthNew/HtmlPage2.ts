/// <reference path="./jquery.d.ts" />
class Model2 {   
    private json2;
    public ress = [];

    constructor(data: { X: number; Y: number; }[][]) {
        this.json2 = data;
        this.ress = data.map(array => this.bezier(array));
    }

  
    sum(p1, p2) {
        return { X: p1.X + p2.X, Y: p1.Y + p2.Y };
    }

    mult(h: number, p1) {
        return { X: h * p1.X, Y: h * p1.Y};
    }

    diff(p1, p2) {
        return { X: p1.X - p2.X, Y: p1.Y - p2.Y };
    } 
    
    div(p1, h: number) {
        return { X: p1.X/h, Y: p1.Y/h };
    } 

    bezier(array) {
        var a = [],
            cx1 = [],
            cx2 = [],
            result = "M",
            smoothK = 0.3,
            j;

        array.push(array[0]); 
        var k = array.length;

        a.push(this.div(this.diff(this.mult(3,array[0]), array[k - 1]), 2));
        for (j = 1; j < k; j++) {
            a.push(this.div(this.diff(this.mult(3, array[j]), array[j - 1]), 2));
        }
        

        for (var t = 0; t < k - 1; t++) {
            cx1.push(this.div(this.sum(this.mult(smoothK, array[t + 1]), a[t]), (smoothK + 1)));
        }
        cx1.push(this.div(this.sum(this.mult(smoothK, array[0]), a[a.length-1]), (smoothK + 1)));


        for (t = 0; t < k - 1; t++) {
            cx2.push(this.diff(this.mult(2,array[t + 1]), cx1[t + 1]));
        }
        cx2.push(this.diff(this.mult(2, array[0]), cx1[0]));

        a.forEach(
            function (elem, index) {  
                result = result + " " + array[index].X + "," + array[index].Y + " C" + <string>cx1[index].X + "," + <string>cx1[index].Y + " " +

                <string>cx2[index].X + "," + <string>cx2[index].Y;
            });
       
        result = result + " " + array[0].X + "," + array[0].Y;
        return result;
    }
}

