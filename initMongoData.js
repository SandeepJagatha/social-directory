var db = db.getSiblingDB('kleos');
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
            url:'Content/images/man3.jpg', currentrating:3
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


//States
var states = [
  { "name": "Alabama", "abbreviation": "AL" },
  { "name": " Montana", "abbreviation": "MT" },
  { "name": " Alaska", "abbreviation": "AK" },
  { "name": " Nebraska", "abbreviation": "NE" },
  { "name": " Arizona", "abbreviation": "AZ" },
  { "name": " Nevada", "abbreviation": "NV" },
  { "name": "Arkansas", "abbreviation": "AR" },
  { "name": " New Hampshire", "abbreviation": "NH" },
  { "name": "California", "abbreviation": "CA" },
  { "name": "New Jersey", "abbreviation": "NJ" },
  { "name": "Colorado", "abbreviation": "CO" },
  { "name": "New Mexico", "abbreviation": "NM" },
  { "name": "Connecticut", "abbreviation": "CT" },
  { "name": "New York", "abbreviation": "NY" },
  { "name": "Delaware", "abbreviation": "DE" },
  { "name": "North Carolina", "abbreviation": "NC" },
  { "name": "Florida", "abbreviation": "FL" },
  { "name": "North Dakota", "abbreviation": "ND" },
  { "name": "Georgia", "abbreviation": "GA" },
  { "name": "Ohio", "abbreviation": "OH" },
  { "name": "Hawaii", "abbreviation": "HI" },
  { "name": "Oklahoma", "abbreviation": "OK" },
  { "name": "Idaho", "abbreviation": "ID" },
  { "name": "Oregon", "abbreviation": "OR" },
  { "name": "Illinois", "abbreviation": "IL" },
  { "name": "Pennsylvania", "abbreviation": "PA" },
  { "name": "Indiana", "abbreviation": "IN" },
  { "name": " Rhode Island", "abbreviation": "RI" },
  { "name": "Iowa", "abbreviation": "IA" },
  { "name": "South Carolina", "abbreviation": "SC" },
  { "name": "Kansas", "abbreviation": "KS" },
  { "name": "South Dakota", "abbreviation": "SD" },
  { "name": "Kentucky", "abbreviation": "KY" },
  { "name": "Tennessee", "abbreviation": "TN" },
  { "name": "Louisiana", "abbreviation": "LA" },
  { "name": "Texas", "abbreviation": "TX" },
  { "name": "Maine", "abbreviation": "ME" },
  { "name": "Utah", "abbreviation": "UT" },
  { "name": "Maryland", "abbreviation": "MD" },
  { "name": "Vermont", "abbreviation": "VT" },
  { "name": "Massachusetts", "abbreviation": "MA" },
  { "name": "Virginia", "abbreviation": "VA" },
  { "name": "Michigan", "abbreviation": "MI" },
  { "name": "Washington", "abbreviation": "WA" },
  { "name": "Minnesota", "abbreviation": "MN" },
  { "name": "West Virginia", "abbreviation": "WV" },
  { "name": "Mississippi", "abbreviation": "MS" },
  { "name": "Wisconsin", "abbreviation": "WI" },
  { "name": "Missouri", "abbreviation": "MO" },
  { "name": "Wyoming", "abbreviation": "WY" }
];

var sl = states.length, i;

var al = areas.length;
var stl = sorttypes.length;
var gl = grades.length;
var subl = subjects.length;
var cl = cities.length;
var ul = users.length;

db.states.remove({});
db.areas.remove({});
db.grades.remove({});
db.subjects.remove({});
db.sorttypes.remove({});
db.users.remove({});
db.cities.remove({});

for (i = 0; i < sl; i++) {
    var s = { 'id': i + 1, 'name': states[i].name, 'abbreviation': states[i].abbreviation };
    db.states.insert(s);
}
for (i = 0; i < al; i++) {
    var a = { 'id': i + 1, 'name': areas[i].name, 'value': areas[i].value };
    db.areas.insert(a);
}
for (i = 0; i < stl; i++) {
    var st = { 'id': i + 1, 'name': sorttypes[i].name, 'value': sorttypes[i].value };
    db.sorttypes.insert(st);
}
for (i = 0; i < gl; i++) {
    var g = { 'id': i + 1, 'name': grades[i].name, 'value': grades[i].value };
    db.grades.insert(g);
}
for (i = 0; i < subl; i++) {
    var sub = { 'id': i + 1, 'name': subjects[i].name, 'value': subjects[i].value };
    db.subjects.insert(sub);
}
for (i = 0; i < cl; i++) {
    var c = { 'id': i + 1, 'label': cities[i].label, 'value': cities[i].value };
    db.cities.insert(c);
}
for (i = 0; i < ul; i++) {
    var u = { 'id':  users[i].id, 'name': users[i].firstName, 'lastName': users[i].lastName, 'address': users[i].address, 'city': users[i].city, 'grade': users[i].grade, 'teach': users[i].teach, 'area': users[i].area, 'overall': users[i].overall, 'friendliness': users[i].friendliness, 'fairness': users[i].fairness, 'homework': users[i].homework, 'rating': users[i].rating, 'url': users[i].url, 'currentrating': users[i].currentrating };
    db.users.insert(u);
}



