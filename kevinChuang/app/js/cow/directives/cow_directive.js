module.exports = function(app) {
  app.directive('cow', function() {
    return {
      templateUrl: './template/cowsay/cowsay_service.html',
      scope: {
        text: '=',
        type: '@'
      },
      controller: function($scope, CowsayService) {
        $scope.cow = CowsayService.makeCow($scope.text, $scope.type);
      }
    };
  });
};
