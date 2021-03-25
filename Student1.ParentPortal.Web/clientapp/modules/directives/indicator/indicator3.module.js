﻿angular.module('app.directives')
    .component('indicator3', {
        bindings: {
            indicatorTitle: '@',
            tooltip: '@',
            indicatorCategories: '<', // [{tooltip:'', value: 10, interpretation: ''}]
            anchorid: '@',
            interpretation: '<',
            textualEvaluation: '<',
            largeText: '<', // true or false
            bgclass: '@'
        },
        templateUrl: 'clientapp/modules/directives/indicator/indicator3.view.html',
        controllerAs: 'ctrl',
        controller: ['$location', function ($location) {
            var ctrl = this;

            ctrl.$onInit = function () {
                if (!ctrl.interpretation)
                    ctrl.interpretation = ctrl.getGeneralInterpretation();
                console.log("Modelo",ctrl.model);
                var indCatLength = 1;
                if (ctrl.indicatorCategories != null && ctrl.indicatorCategories != undefined)
                    indCatLength = ctrl.indicatorCategories.length;

                ctrl.categoryWidth = 100 / indCatLength;
                ctrl.textualEvaluation += ctrl.interpretation;
            }

            ctrl.getGeneralInterpretation = function () {
                var interpretationTypes = ['bad', 'warning', 'good', 'great'];
                if (ctrl.indicatorCategories != null && ctrl.indicatorCategories != undefined) {
                    for (var x = 0; x < interpretationTypes.length; x++) {
                        if (ctrl.indicatorCategories.filter(function (i) { return i.interpretation === interpretationTypes[x] }).length > 0)
                            return interpretationTypes[x];
                    }
                }
            }
            ctrl.isNotLast = function (i) {
                return ctrl.indicatorCategories.indexOf(i) < ctrl.indicatorCategories.length - 1;
            }
        }]
    });