var app=angular.module("template_app",[]);
app.controller("togelcontroller",function($scope)
{
   
    $scope.apply_study1=function(){
        //alert('model1');
        $scope.study1=true;
        $scope.study2=false;
        $scope.study3=false;
        $scope.study4=false;
        $scope.study5=false;

    };
    $scope.apply_study1(); //let function load first then call
    $scope.apply_study2=function(){
        //alert('model2');
        $scope.study1=false;
        $scope.study2=true;
        $scope.study3=false;
        $scope.study4=false;
        $scope.study5=false;
    };
    $scope.apply_study3=function(){
        //alert('model3');
        $scope.study1=false;
        $scope.study2=false;
        $scope.study3=true;
        $scope.study4=false;
        $scope.study5=false;
    };
    $scope.apply_study4=function(){
        //alert('model4');
        $scope.study1=false;
        $scope.study2=false;
        $scope.study3=false;
        $scope.study4=true;
        $scope.study5=false;
    };
    $scope.apply_study5=function(){
        //alert('model5');
        $scope.study1=false;
        $scope.study2=false;
        $scope.study3=false;
        $scope.study4=false;
        $scope.study5=true;
    };
    $scope.apply_back=function(){
        //alert('back');
        $scope.study1=true;
        $scope.study2=false;
        $scope.study3=false;
        $scope.study4=false;
        $scope.study5=false;
    };
    






});

