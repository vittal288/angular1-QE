// (function(){
    
  
// })();


 console.log('quickEstimateApp')
  var app = angular.module('quickEstimateApp',['ui.router']);
   
   

  app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        

       
        // .state('newProposals',{
        //     url:'/newProposals',
        //     views:{
        //         '':{
                    
        //       },
        //      'newProject@newProposals':{
        //          templateUrl:'',
        //          controller:''
        //      },
        //      'practiceAndPlatform@newProposals':{
        //          templateUrl:'',
        //          controller:''
        //      },
        //      'technologies@newProposals':{
        //          templateUrl:'',
        //          controller:''
        //      },
        //      'nfr@newProposals':{
        //          templateUrl:'',
        //          controller:''
        //      },
        //      'submission@newProposals':{
        //          templateUrl:'',
        //          controller:''
        //      }
        //     }
            
        // }) 
        
        
        // .state('projects',{
            
        // })            
    });
   
  
   app.controller('mainController',mainController);
   
   
   //
   function mainController(){
       console.log('Main Controller');
   }
    