app.service('CategoryService', function() {
  var categoryselection = "";
  var categorytype = "";

  var addCat = function(newObj) {
    categorytype = newObj;
  }

  var getCats = function(){
    return categorytype;
  }

  return {
    addCat: addCat,
    getCats: getCats
  };



});


app.service('UserService', function() {

    this.getUser = function (id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                return users[i];
            }
        }
        return null;
    };

    // this.insertComment = function (comment, date, id) {
    //     for (var i = 0; i < users.length; i++) {
    //         if (users[i].id === id) {
    //           users[i].id.push(comments:[
    //             {comment:comment, date: date}

    //             ]);
    //         }
    //     }
    // };
  
    var users = [
       {
          id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix', teach:'10th grade English Midtown', overall: 5, friendliness: 5, fairness: 5, homework: 5, rating: 5, 
          url:'Content/images/man3.jpg', currentrating:3, maxrating: 5, readonly: '@', skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.', 
          comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      },
      {
          id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta', teach:'11th grade Maths', overall: 4, friendliness: 5, fairness: 3, homework: 5 , rating: 5, url:'Content/images/man4.jpg', currentrating:2, maxrating: 5,  skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.', 
          comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      },
      {
          id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec', teach:'10th grade Hindi Midtown', overall: 4, friendliness: 4, fairness: 4, homework: 4 , rating: 4, url:'Content/images/man2.jpg', currentrating:1, maxrating: 5,  skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.', 
          comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      },
      {
          id: 9, firstName: 'Alice', lastName: 'Price', address: '3354 Town', city: 'Cleveland',teach:'Sophomore French', overall: 3, friendliness: 5, fairness: 1, homework: 4, rating: 3, url:'Content/images/man1.jpg', currentrating:3, maxrating: 5,  skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.',
          comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      },
      {
          id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', teach:'10th grade English Midtown', city: 'Buffalo',overall: 2, friendliness: 3, fairness: 1, homework: 4, rating: 2, url:'Content/images/man3.jpg', currentrating:5, maxrating: 5,  skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.',
          comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      },
      {
          id: 11, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', teach:'Sophomore French', city: 'Orlando', rating: 1, url:'Content/images/man3.jpg', currentrating:1, maxrating: 5,  skills:'Profound knowledge of English language and ability to teach the language for all sorts of students i.e. for those who have English as there first language and those who have not. \n1. Excellent communication and written skills as well as ability to explain the text. \n2. Highly skilled in using the deferent course books and material for teaching English as well as having a great passion and love for English language. \n3. Ability to dramatize English stories effectively and creativeness in teaching process. \n4. Ability to plan, collect material and deliver the lessons in the class.Capacity to arrange the competitions and assess the performance of the students. \n5. Good and deep knowledge of English i.e. Grammar and Literature. \n6. Ability to inspire the students for desired effects in the language teaching task.', exp:2, scl:'Robert Morris High School, \n 11th grade Literature, \n 3 years.', cred:'Grove City College, \n B.S in English and Literature.',
           comments: [
            {url:'Content/images/img3.jpg', date: 'March 5th, 2015', comment:'Mrs. Smith was my favorite English teacher ever!', rating:2},
            {url:'Content/images/img2.jpg', date: 'April 6th, 2015', comment:'I am terrible in English, but Mrs. Smith made sure I passed. Love her!', rating:2},
            {url:'Content/images/img1.jpg', date: 'November 7th, 2015', comment:'Pretty good but wish her exams weren\'t so difficult', rating:2},
            {url:'Content/images/img4.jpg', date: 'Sep 4th, 2015', comment:'Mrs. Smith was great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img5.jpg', date: 'Jan 3th, 2015', comment:'One of my great but I didn\'t get the grade I wanted', rating:2},
            {url:'Content/images/img3.jpg', date: 'October 20th, 2015', comment:'Testing mail', rating:2}
          ]
      }
    ];


});

app.service('SearchService', function() {


    this.getCities = function () {
        return cities;
    };

     this.getUsers = function () {
        return users;
    };

     this.getSubjects = function () {
        return subjects;
    };

     this.getGrades = function () {
        return grades;
    };

     this.getStates = function () {
        return states;
    };

     this.getAreas = function () {
        return areas;
    };

     this.getSorttypes = function () {
        return sorttypes;
    };

    var cities = [
      {label:'<-Select city->', value: ''},
      {label:'Charlotte', value: 'Charlotte'},
      {label:'Raleigh', value: 'Raleigh'},
      {label:'Greensboro', value: 'Greensboro'},
      {label:'Winston-Salem', value: 'Winston-Salem'},
      {label:'Durham', value: 'Durham'},
      {label:'Fayetteville', value: 'Fayetteville'},
      {label:'Cary', value: 'Cary'},
      {label:'Wilmington', value: 'Wilmington'},
      {label:'High Point', value: 'High Point'},
      {label:'Greenville' , value: 'Greenville'},
      {label:'Asheville', value: 'Asheville'},
      {label:'Concord', value: 'Concord'},
      {label:'Gastonia', value: 'Gastonia'},
      {label:'Jacksonville', value: 'Jacksonville'},
      {label:'Rocky Mount', value: 'Rocky Mount'},
      {label:'Chapel Hill', value: 'Chapel Hill'},
      {label:'Burlington', value: 'Burlington'},
      {label:'Wilson', value: 'Wilson'},
      {label:'Huntersville', value: 'Huntersville'},
      {label:'Kannapolis', value: 'Kannapolis'},
      {label:'Hickory', value: 'Hickory'},
      {label:'Apex', value: 'Apex'},
      {label:'Goldsboro', value: 'Goldsboro'},
      {label:'Salisbury', value: 'Salisbury'},
      {label:'Indian Trail', value: 'Indian Trail'},
      {label:'Monroe', value: 'Monroe'},
      {label:'Mooresville', value: 'Mooresville'},
      {label:'Wake Forest', value: 'Wake Forest'},
      {label:'New Bern', value: 'New Bern'},
      {label:'Sanford', value: 'Sanford'},
      {label:'Matthews', value: 'Matthews'},
      {label:'Thomasville', value: 'Thomasville'},
      {label:'Garner', value: 'Garner'},
      {label:'Asheboro', value: 'Asheboro'},
      {label:'Cornelius', value: 'Cornelius'},
      {label:'Statesville', value: 'Statesville'},
      {label:'Holly Springs', value: 'Holly Springs'},
      {label:'Kernersville', value: 'Kernersville'},
      {label:'Mint Hill', value: 'Mint Hill'},
      {label:'Kinston', value: 'Kinston'},
      {label:'Lumberton', value: 'Lumberton'},
      {label:'Havelock', value: 'Havelock'},
      {label:'Shelby', value: 'Shelby' },
      {label:'Carrboro', value: 'Carrboro' }
    ];

    var users = [
        {
            id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Matthews', grade:'10th grade', teach:'English Midtown', area:' University area', overall: 5, friendliness: 5, fairness: 5, homework: 5, rating: 5, 
            url:'Content/images/man3.jpg', currentrating:3, readonly: '@'
        },
        {
            id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Greenville', grade:'11th grade', teach:'Maths', area:' Downtown', overall: 4, friendliness: 5, fairness: 3, homework: 5 , rating: 5, url:'Content/images/man4.jpg', currentrating:2
        },
        {
            id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Cary ', grade:'2nd grade', teach:'Science Midtown', area:' Harrisburg', overall: 4, friendliness: 4, fairness: 4, homework: 4 , rating: 4, url:'Content/images/man2.jpg', currentrating:1
        },
        {
            id: 9, firstName: 'Alice', lastName: 'Price', address: '3354 Town', city: 'Greensboro', grade:'Sophomore', teach:'French', area:' Highland creek', overall: 3, friendliness: 5, fairness: 1, homework: 4, rating: 3, url:'Content/images/man1.jpg', currentrating:3
        },
        {
            id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', grade:'12th grade ', teach:'English Midtown', area:' Mooresville', city: 'Raleigh',overall: 2, friendliness: 3, fairness: 1, homework: 4, rating: 2, url:'Content/images/man3.jpg', currentrating:5
        },
        {
            id: 11, firstName: 'A Shanika', lastName: 'Passmore', address: '459 S. International Dr.', grade:'Sophomore', teach:'French', area:' Huntersville', city: 'Charlotte', rating: 1, url:'Content/images/man3.jpg', currentrating:1
        },
        {
            id: 12, firstName: 'Sandeep', lastName: 'sj', address: '459 S. International Dr.', grade:'kg', teach:'English', area:' Huntersville', city: 'Charlotte', rating: 1, url:'Content/images/man3.jpg', currentrating:4
        }
    ];

    var subjects = [
        {name: "All", value: ''},
        {name: "Maths", value: 'Maths'},
        {name: "Science", value: 'Science'},
        {name: "English", value: 'English'},
        {name: "French", value: 'French'}
    ];

    var grades = [
        {name: "All", value: ''},
        {name: "KG", value: 'KG'},
        {name: "1st", value: '1st'},
        {name: "2nd", value: '2nd'},
        {name: "3rd", value: '3rd'},
        {name: "4th", value: '4th'},
        {name: "5th", value: '5th'},
        {name: "6th", value: '6th'},
        {name: "7th", value: '7th'},
        {name: "8th", value: '8th'},
        {name: "9th", value: '9th'},
        {name: "10th", value: '10th'},
        {name: "11th", value: '11th'},
        {name: "12th", value: '12th'}
    ];

    var states = [
        {
            name: "<-Select State->",
            abbreviation: " "
        },
        {
            name: "Alabama",
            abbreviation: "AL"
        },
        {
            name: "Alaska",
            abbreviation: "AK"
        },
        {
            name: "American Samoa",
            abbreviation: "AS"
        },
        {
            name: "Arizona",
            abbreviation: "AZ"
        },
        {
            name: "Arkansas",
            abbreviation: "AR"
        },
        {
            name: "California",
            abbreviation: "CA"
        },
        {
            name: "Colorado",
            abbreviation: "CO"
        },
        {
            name: "Connecticut",
            abbreviation: "CT"
        },
        {
            name: "Delaware",
            abbreviation: "DE"
        },
        {
            name: "District Of Columbia",
            abbreviation: "DC"
        },
        {
            name: "Federated States Of Micronesia",
            abbreviation: "FM"
        },
        {
            name: "Florida",
            abbreviation: "FL"
        },
        {
            name: "Georgia",
            abbreviation: "GA"
        },
        {
            name: "Guam",
            abbreviation: "GU"
        },
        {
            name: "Hawaii",
            abbreviation: "HI"
        },
        {
            name: "Idaho",
            abbreviation: "ID"
        },
        {
            name: "Illinois",
            abbreviation: "IL"
        },
        {
            name: "Indiana",
            abbreviation: "IN"
        },
        {
            name: "Iowa",
            abbreviation: "IA"
        },
        {
            name: "Kansas",
            abbreviation: "KS"
        },
        {
            name: "Kentucky",
            abbreviation: "KY"
        },
        {
            name: "Louisiana",
            abbreviation: "LA"
        },
        {
            name: "Maine",
            abbreviation: "ME"
        },
        {
            name: "Marshall Islands",
            abbreviation: "MH"
        },
        {
            name: "Maryland",
            abbreviation: "MD"
        },
        {
            name: "Massachusetts",
            abbreviation: "MA"
        },
        {
            name: "Michigan",
            abbreviation: "MI"
        },
        {
            name: "Minnesota",
            abbreviation: "MN"
        },
        {
            name: "Mississippi",
            abbreviation: "MS"
        },
        {
            name: "Missouri",
            abbreviation: "MO"
        },
        {
            name: "Montana",
            abbreviation: "MT"
        },
        {
            name: "Nebraska",
            abbreviation: "NE"
        },
        {
            name: "Nevada",
            abbreviation: "NV"
        },
        {
            name: "New Hampshire",
            abbreviation: "NH"
        },
        {
            name: "New Jersey",
            abbreviation: "NJ"
        },
        {
            name: "New Mexico",
            abbreviation: "NM"
        },
        {
            name: "New York",
            abbreviation: "NY"
        },
        {
            name: "North Carolina",
            abbreviation: "NC"
        },
        {
            name: "North Dakota",
            abbreviation: "ND"
        },
        {
            name: "Northern Mariana Islands",
            abbreviation: "MP"
        },
        {
            name: "Ohio",
            abbreviation: "OH"
        },
        {
            name: "Oklahoma",
            abbreviation: "OK"
        },
        {
            name: "Oregon",
            abbreviation: "OR"
        },
        {
            name: "Palau",
            abbreviation: "PW"
        },
        {
            name: "Pennsylvania",
            abbreviation: "PA"
        },
        {
            name: "Puerto Rico",
            abbreviation: "PR"
        },
        {
            name: "Rhode Island",
            abbreviation: "RI"
        },
        {
            name: "South Carolina",
            abbreviation: "SC"
        },
        {
            name: "South Dakota",
            abbreviation: "SD"
        },
        {
            name: "Tennessee",
            abbreviation: "TN"
        },
        {
            name: "Texas",
            abbreviation: "TX"
        },
        {
            name: "Utah",
            abbreviation: "UT"
        },
        {
            name: "Vermont",
            abbreviation: "VT"
        },
        {
            name: "Virgin Islands",
            abbreviation: "VI"
        },
        {
            name: "Virginia",
            abbreviation: "VA"
        },
        {
            name: "Washington",
            abbreviation: "WA"
        },
        {
            name: "West Virginia",
            abbreviation: "WV"
        },
        {
            name: "Wisconsin",
            abbreviation: "WI"
        },
        {
            name: "Wyoming",
            abbreviation: "WY"
        }
    ];

    var areas = [
        {name: "<-Select area->", value: ''},
        {name: "Cornelius", value: 'Cornelius'},
        {name: "Davidson", value: 'Davidson' },
        {name: "Fort Mill, SC", value: 'Fort Mill, SC' },
        {name: "Huntersville", value: 'Huntersville'},
        {name: "Indian Trail", value: 'Indian Trail' },
        {name: "Matthews", value: 'Matthews'},
        {name: "Mint Hill", value: 'Mint Hill'},
        {name: "Mooresville", value: 'Mooresville'},
        {name: "Pineville", value: 'Pineville'},
        {name: "Waxhaw", value: 'Waxhaw'},
        {name: "Weddington", value: 'Weddington'},
        {name: "University area", value: 'University area'},
        {name: "Highland creek", value: 'Highland creek'},
        {name: "Downtown", value: 'Downtown' },
        {name: "Harrisburg" , value: 'Harrisburg'}
    ];

    var sorttypes = [
        {name: "Sort by Name", value: 'firstName'},
        {name: "Sort by Rating", value: '-currentrating'}
    ];

    var gcities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];


  });


















app.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function () {
                var response = { success: username === 'kleos' && password === 'samrake123' };
                if (!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });

        };

        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])

app.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});