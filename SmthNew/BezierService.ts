/// <reference path="angular.d.ts"/>
class BezierService {
    constructor(private $http: ng.IHttpService) {
    }

    public GetData() {
        return this.$http({
            method: 'GET',
            url: '/Data/Bezier.json'
        }).then(result => result.data);
    }

   
}