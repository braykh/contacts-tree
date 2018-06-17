contactsApp.directive('contactBlock', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            model: '='
        },
        controller: ['$scope', '$compile', function contactBlockController($scope, $compile) {

            $scope.toggleContacts = function (contact) {
                
                if(contact.type == "Group" && contact.contacts.length){
                    if(angular.isUndefined(contact.collapsed))contact.collapsed = true;
                    
                    if(contact.collapsed){
                        var newScope = $scope.$new();
                        var template = $compile( "<contact-block  model='"+ JSON.stringify(contact.contacts) +"'></contact-block>" )( newScope );
                        angular.element('.contact_' + contact.id).append(template); 
                    }else{
                        angular.element('.contact_' + contact.id +' > contact-block').scope().$destroy();
                        angular.element('.contact_' + contact.id +' > contact-block').remove();
                    }

                    contact.collapsed = !contact.collapsed;
                    
                }
            }; 
           
        }],

        templateUrl: 'app/src/directives/contact-block.html'
    };
})
