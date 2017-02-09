/// <reference path="angular.d.ts"/>
class OrientationService {
    constructor(private $http: ng.IHttpService) {
    }

    public GetData() {
        return this.$http({
            method: 'GET',
            url: '/Data/Orientation.json'
        }).then(result => result.data);
    }
}