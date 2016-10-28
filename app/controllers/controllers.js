

app.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/index');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);



app.controller('HomeController', function ($scope, $location, CategoryService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
    }

    $scope.go = function(category) {
        console.log(category);
        CategoryService.addCat(category);

        if (category.selection == 'search') {
           $location.path( "/search" );
       }
       else{
           $location.path( "/makecomment" );
       }
   };

   $scope.deleteCustomer = function (id) {
    customersService.deleteCustomer(id);
};
});


app.controller('MakeCommentController', function ($scope, CategoryService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    $scope.rating = 0;
    $scope.ratings = [{
        current: 5,
        max: 10,
        readonly: '@',
    }, {
        current: 3,
        max: 5,
        readonly: '@',
    }];

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }

    function init() {
     $scope.cattype = CategoryService.getCats();
     $scope.categorynames = [
     {name:'Friendliness', rating:3 },
     {name:'Approachability'},
     {name:'Subject Matter Expertise'},
     {name:'Overall Fairness'},
     {name:'Amount of Hardwork'}
     ];
 }

});



app.controller('SearchController', function ($scope, CategoryService, $window, SearchService, $resource) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    var Cities = $resource('/api/cities');
    var Sorttypes = $resource('/api/sorttypes');
    // var States = $resource('/api/state');
    var Areas = $resource('/api/area');
    var Users = $resource('/api/users');
    var Subjects = $resource('/api/subjects');
    var Grades = $resource('/api/grades');
    
    
    // Cities.query(function(results){
    //     $scope.cities = results;
    // });
    // Sorttypes.query(function(results){
    //     $scope.sorttypes = results;
    // });
    // // States.query(function(results){
    // //     $scope.states = results;
    // // });
    // Areas.query(function(results){
    //     $scope.areas = results;
    // });
    // Users.query(function(results){
    //     $scope.users = results;
    // });
    // Subjects.query(function(results){
    //     $scope.subjects = results;
    // });
    // Grades.query(function(results){
    //     $scope.grades = results;
    // });



    $scope.rating = 5; 

    $scope.cityselect = "";
    $scope.areaselect = "";
    $scope.subjectselect = "";
    $scope.gselect = "";
    $scope.orderProp = '-currentrating';

    $scope.clearall = function(){
        $scope.cityselect = "";
        $scope.areaselect = "";
        $scope.subjectselect = "";
        $scope.gselect = "";
        $scope.orderProp = '-currentrating';
    }

    $scope.saveRatingToServer = function(rating) { 
       $window.alert('Rating selected - ' + rating); 
    }; 

    function init() {

        $scope.cattype = CategoryService.getCats();

        $scope.cities = SearchService.getCities();
        $scope.users = SearchService.getUsers();
       $scope.subjects = SearchService.getSubjects();
       $scope.grades = SearchService.getGrades();
        $scope.states = SearchService.getStates();
        $scope.sorttypes = SearchService.getSorttypes();
        $scope.areas = SearchService.getAreas();
    }
    
    var schools = [
        {SchoolName:"Mallard Creek High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.36517",Longitude:"-80.77001",DistanceFromCenter:"0.84",StudentNumber:"2152",Address:"3825 Johnston Oehler Road, Charlotte, NC 28269"},
        {SchoolName:"Highland Creek Elem",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.378279",Longitude:"-80.763331",DistanceFromCenter:"1.58",StudentNumber:"1235",Address:"7242 Highland Creek Parkway, Charlotte, NC 28269"},
        {SchoolName:"Hucks Road Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.346489",Longitude:"-80.804651",DistanceFromCenter:"1.62",StudentNumber:"758",Address:"4911 Hucks Road, Charlotte, NC 28269"},
        {SchoolName:"Ridge Road Middle School",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.378295",Longitude:"-80.761528",DistanceFromCenter:"1.66",StudentNumber:"1331",Address:"7260 Highland Creek Parkway, Charlotte, NC 28269"},
        {SchoolName:"Mallard Creek",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.335392",Longitude:"-80.774512",DistanceFromCenter:"2.02",StudentNumber:"839",Address:"3825 Johnston Oehler Road, Charlotte, NC 28269"},
        {SchoolName:"David Cox Road Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.336844",Longitude:"-80.800925",DistanceFromCenter:"2.05",StudentNumber:"876",Address:"4215 David Cox Rd, Charlotte, NC 28269"},
        {SchoolName:"North Mecklenburg High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.372678",Longitude:"-80.834877",DistanceFromCenter:"2.9",StudentNumber:"1589",Address:"11201 Old Statesville Road, Huntersville, NC 28078"},
        {SchoolName:"Legette Blythe Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.376415",Longitude:"-80.835292",DistanceFromCenter:"2.99",StudentNumber:"1062",Address:"12202 Hambright Road, Huntersville, NC 28078"},
        {SchoolName:"John M Alexander Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.378415",Longitude:"-80.835516",DistanceFromCenter:"3.04",StudentNumber:"847",Address:"Huntersville, NC 28078"},
        {SchoolName:"Stoney Creek Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.347459",Longitude:"-80.72474",DistanceFromCenter:"3.55",StudentNumber:"839",Address:"14015 Mallard Roost Road, Charlotte, NC 28262"},
        {SchoolName:"Zebulon B Vance High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.300403",Longitude:"-80.769214",DistanceFromCenter:"4.44",StudentNumber:"1792",Address:"7600 Ibm Drive, Charlotte, NC 28262"},
        {SchoolName:"Nathaniel Alexander Elem",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.298736",Longitude:"-80.774752",DistanceFromCenter:"4.5",StudentNumber:"828",Address:"7910 Neal Road, Charlotte, NC 28262"},
        {SchoolName:"James Martin Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.298439",Longitude:"-80.766922",DistanceFromCenter:"4.6",StudentNumber:"1120",Address:"7800 Ibm Drive, Charlotte, NC 28262"},
        {SchoolName:"John Motley Morehead Elem",SchoolType:"Public",SchoolGrade:"KG-07",Latitude:"35.296698",Longitude:"-80.775137",DistanceFromCenter:"4.64",StudentNumber:"852",Address:"Charlotte, NC 28262"},
        {SchoolName:"Winding Springs Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.306431",Longitude:"-80.828575",DistanceFromCenter:"4.65",StudentNumber:"721",Address:"6601 Horace Mann Road, Charlotte, NC 28269"},
        {SchoolName:"Derita Alternative",SchoolType:"Public",SchoolGrade:"04-12",Latitude:"35.295031",Longitude:"-80.79681",DistanceFromCenter:"4.77",StudentNumber:"240",Address:"Charlotte, NC 28262"},
        {SchoolName:"Huntersville Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.411572",Longitude:"-80.846933",DistanceFromCenter:"4.83",StudentNumber:"787",Address:"Huntersville, NC 28078"},
        {SchoolName:"University Meadows Elem",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.31548",Longitude:"-80.714456",DistanceFromCenter:"5.16",StudentNumber:"695",Address:"1600 Pavilion Boulevard, Charlotte, NC 28262"},
        {SchoolName:"Hornets Nest Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.324705",Longitude:"-80.865231",DistanceFromCenter:"5.26",StudentNumber:"576",Address:"6700 Beatties Ford Road, Charlotte, NC 28216"},
        {SchoolName:"Ranson Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.300334",Longitude:"-80.838885",DistanceFromCenter:"5.32",StudentNumber:"1096",Address:"5850 Statesville Road, Charlotte, NC 28269"},
        {SchoolName:"Statesville Road Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.300138",Longitude:"-80.845659",DistanceFromCenter:"5.56",StudentNumber:"579",Address:"Charlotte, NC 28269"},
        {SchoolName:"Long Creek Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.350911",Longitude:"-80.889591",DistanceFromCenter:"5.97",StudentNumber:"555",Address:"Charlotte, NC 28269"},
        {SchoolName:"Torrence Creek Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.41215",Longitude:"-80.872686",DistanceFromCenter:"5.99",StudentNumber:"1234",Address:"Charlotte, NC 28269"},
        {SchoolName:"Newell Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.285612",Longitude:"-80.733792",DistanceFromCenter:"6.09",StudentNumber:"746",Address:"8601 Old Concord Road, Charlotte, NC 28213"},
        {SchoolName:"Hidden Valley Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.268056",Longitude:"-80.784728",DistanceFromCenter:"6.58",StudentNumber:"760",Address:"5100 Snow White Lane, Charlotte, NC 28213"},
        {SchoolName:"Martin Luther King, Jr Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.263388",Longitude:"-80.778459",DistanceFromCenter:"6.91",StudentNumber:"911",Address:"500 Bilmark Avenue, Charlotte, NC 28213"},
        {SchoolName:"Hopewell High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.378392",Longitude:"-80.911004",DistanceFromCenter:"7.19",StudentNumber:"1718",Address:"11530 Beatties Ford Road, Huntersville, NC 28078"},
        {SchoolName:"John T Williams Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.267933",Longitude:"-80.841608",DistanceFromCenter:"7.33",StudentNumber:"N/A",Address:"Charlotte, NC 28269"},
        {SchoolName:"Joseph W Grier Academy",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.267379",Longitude:"-80.725387",DistanceFromCenter:"7.42",StudentNumber:"916",Address:"8330 Grier Road, Charlotte, NC 28215"},
        {SchoolName:"Cato Campus Middle College",SchoolType:"Public",SchoolGrade:"11-12",Latitude:"35.264861",Longitude:"-80.731168",DistanceFromCenter:"7.44",StudentNumber:"188",Address:"8120 Grier Road, Charlotte, NC 28215"},
        {SchoolName:"Highland Renaissance Academy",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.255641",Longitude:"-80.803206",DistanceFromCenter:"7.51",StudentNumber:"434",Address:"125 West Craighead Road, Charlotte, NC 28206"},
        {SchoolName:"Druid Hills Elementary",SchoolType:"Public",SchoolGrade:"KG-08",Latitude:"35.257307",Longitude:"-80.824346",DistanceFromCenter:"7.66",StudentNumber:"581",Address:"2801 Lucena Street, Charlotte, NC 28206"},
        {SchoolName:"Briarwood Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.252147",Longitude:"-80.765949",DistanceFromCenter:"7.75",StudentNumber:"723",Address:"1001 Wilann Drive, Charlotte, NC 28215"},
        {SchoolName:"Oakdale Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.25627",Longitude:"-80.826317",DistanceFromCenter:"7.76",StudentNumber:"651",Address:"1825 Oakdale Road, Charlotte, NC 28216"},
        {SchoolName:"William Amos Hough High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.469643",Longitude:"-80.829839",DistanceFromCenter:"7.76",StudentNumber:"1975",Address:"12420 Bailey Road, Cornelius, NC 28031"},
        {SchoolName:"Bailey Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.467451",Longitude:"-80.837951",DistanceFromCenter:"7.78",StudentNumber:"1345",Address:"11900 Bailey Road, Cornelius, NC 28031"},
        {SchoolName:"Northridge Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.259771",Longitude:"-80.730709",DistanceFromCenter:"7.78",StudentNumber:"877",Address:"7601 The Plaza, Charlotte, NC 28215"},
        {SchoolName:"Lincoln Heights Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.258882",Longitude:"-80.842474",DistanceFromCenter:"7.92",StudentNumber:"N/A",Address:"1900 Newcastle St Charlotte, NC"},
        {SchoolName:"West Charlotte High",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.265904",Longitude:"-80.859596",DistanceFromCenter:"7.94",StudentNumber:"1737",Address:"2219 Senior Drive, Charlotte, NC 28216"},
        {SchoolName:"Francis Bradley Middle",SchoolType:"Public",SchoolGrade:"06-08",Latitude:"35.396738",Longitude:"-80.924644",DistanceFromCenter:"8.21",StudentNumber:"1159",Address:"13345 Beatties Ford Road, Huntersville, NC 28078"},
        {SchoolName:"University Park Creative Arts",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.260804",Longitude:"-80.859241",DistanceFromCenter:"8.23",StudentNumber:"462",Address:"Charlotte, NC 28216"},
        {SchoolName:"Bradley Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.399842",Longitude:"-80.92486",DistanceFromCenter:"8.28",StudentNumber:"673",Address:"13345 Beatties Ford Road, Huntersville, NC 28078"},
        {SchoolName:"Cochrane Middle",SchoolType:"Public",SchoolGrade:"06-09",Latitude:"35.246492",Longitude:"-80.750138",DistanceFromCenter:"8.3",StudentNumber:"610",Address:"6200 Starhaven Drive, Charlotte, NC 28215"},
        {SchoolName:"Highland Mill Montessori",SchoolType:"Public",SchoolGrade:"PK-06",Latitude:"35.243229",Longitude:"-80.804246",DistanceFromCenter:"8.37",StudentNumber:"N/A",Address:"3201 Clemson Avenue, Charlotte, NC 28205"},
        {SchoolName:"Northwest School Of The Arts",SchoolType:"Public",SchoolGrade:"06-12",Latitude:"35.257129",Longitude:"-80.856677",DistanceFromCenter:"8.38",StudentNumber:"981",Address:"1415 Beatties Ford Road, Charlotte, NC 28216"},
        {SchoolName:"Devonshire Elementary",SchoolType:"Public",SchoolGrade:"KG-05",Latitude:"35.245382",Longitude:"-80.74649",DistanceFromCenter:"8.43",StudentNumber:"575",Address:"6500 Barrington Drive, Charlotte, NC 28215"},
        {SchoolName:"Garinger - New Tech",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.241104",Longitude:"-80.782811",DistanceFromCenter:"8.44",StudentNumber:"397",Address:"1100 Eastway Drive, Charlotte, NC 28205"},
        {SchoolName:"Garinger - International Studies",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.241225",Longitude:"-80.782415",DistanceFromCenter:"8.44",StudentNumber:"343",Address:"Charlotte, NC 28269"},
        {SchoolName:"Garinger - Leadership And Public S",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.241169",Longitude:"-80.782561",DistanceFromCenter:"8.44",StudentNumber:"339",Address:"Charlotte, NC 28269"},
        {SchoolName:"Garinger Business And Finance",SchoolType:"Public",SchoolGrade:"09-12",Latitude:"35.241048",Longitude:"-80.782367",DistanceFromCenter:"8.45",StudentNumber:"325",Address:"Charlotte, NC 28269"}
    ]

    



    $scope.mapquantity = 15;
    // // geo-coding
    // $scope.search = "";
    // $scope.geoCode = function () {
    //     if ($scope.search && $scope.search.length > 0) {
    //         if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
    //         this.geocoder.geocode({ 'address': $scope.search }, function (results, status) {
    //             if (status == google.maps.GeocoderStatus.OK) {
    //                 var loc = results[0].geometry.location;
    //                 $scope.search = results[0].formatted_address;
    //                 $scope.gotoLocation(loc.lat(), loc.lng());
    //             } else {
    //                 alert("Sorry, this search produced no results.");
    //             }
    //         });
    //     }
    // };


    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(35.2269, -80.8433),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.Latitude, info.Longitude),
            title: info.SchoolName+', '+info.Address,
            schoolname: info.SchoolName,
            address: info.Address,
            lat:info.Latitude,
            lng:info.Longitude 
        });

        marker.content = '<div class="infoWindowContent"><div><strong>Name</strong>:' + info.SchoolName + ',<br><strong>Type</strong>:' + info.SchoolType + '<br><strong>Grade</strong>:' + info.SchoolGrade +  '<br><strong>Number</strong>:' + info.StudentNumber + '<br><strong>Address</strong>:' + info.Address + '</div></div>';
        
        google.maps.event.addListener(marker, 'click', function(){

            infoWindow.setContent('<h5>' + marker.schoolname + '</h5>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);        
    }  

    
    for (i = 0; i < schools.length; i++){
        createMarker(schools[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});


app.controller('UserProfileController', function ($scope, $routeParams, UserService) {
    $scope.user = {};

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
       var userID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
        if (userID > 0) {
            $scope.user = UserService.getUser(userID);
        }
    }

});

app.controller('UserCommentsController', function ($scope, $routeParams, UserService) {
    $scope.user = {};
    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
       var userID = ($routeParams.userID) ? parseInt($routeParams.userID) : 0;
        if (userID > 0) {
            $scope.user = UserService.getUser(userID);
           // $scope.comments = UserService.getUserComments(userID);
        }
    }

});

app.controller('UserCommentsChildController', function ($scope, UserService) {
    $scope.orderby = 'rating';
    $scope.reverse = false;
    var id = "";

    init();

    function init() {
        if ($scope.user && $scope.user.comments) {
            for (var i = 0; i < $scope.user.comments.length; i++) {
                var comment = $scope.user.comments[i];
                id = $scope.user.id;
            }
        }
    }

    //  $scope.insertComment = function () {
    //     var comment = $scope.user.comment;
    //     var date = new Date();
    //     var id = $scope.user.id;
    //     UserService.insertComment(comment, date, id);
    //     $scope.user.comments.comment = '';
    // };

    // $scope.setOrder = function (orderby) {
    //     if (orderby === $scope.orderby)
    //     {
    //         $scope.reverse = !$scope.reverse;
    //     }
    //     $scope.orderby = orderby;
    // };

});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
// //setOrder and orderby across multiple controllers.
// app.controller('OrderChildController', function ($scope) {
//     $scope.orderby = 'product';
//     $scope.reverse = false;
//     $scope.ordersTotal = 0.00;

//     init();

//     function init() {
//         //Calculate grand total
//         //Handled at this level so we don't duplicate it across parent controllers
//         if ($scope.customer && $scope.customer.orders) {
//             var total = 0.00;
//             for (var i = 0; i < $scope.customer.orders.length; i++) {
//                 var order = $scope.customer.orders[i];
//                 total += order.orderTotal;
//             }
//             $scope.ordersTotal = total;
//         }
//     }

//     $scope.setOrder = function (orderby) {
//         if (orderby === $scope.orderby)
//         {
//             $scope.reverse = !$scope.reverse;
//         }
//         $scope.orderby = orderby;
//     };

// });
