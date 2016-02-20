describe('Login controller', () => {

  var scope,
    controller,
    state;

  beforeEach(() => {
    module('paperless');
  });

  beforeEach(inject(($injector, $rootScope, $controller) => {
    scope = $rootScope.$new();
    controller = $controller('homeCtrl', {
      $scope: scope,
    });

    state = $injector.get('$state');
  }));

  it('should call the login function in the users service',
    () => {
      spyOn(state, 'go');
      scope.init();
      expect(state.go).toHaveBeenCalled();
    });
});
