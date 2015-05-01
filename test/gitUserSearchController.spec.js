describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl

  beforeEach(inject(function($controller) {
  //inject is an angular function that allows access to the angular app and controller
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  })
});