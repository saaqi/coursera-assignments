
function greetUsers() {

  var userNames = [
    "James Henson", 
    "Danielle Presley", 
    "Johnny Depp", 
    "Marshall Gregory", 
    "Trina Perry", "Malcolm Potter", 
    "John Doe", 
    "Larry David", 
    "Leonardo DiCaprio", 
    "Jack Nicholson", 
    "Tom Cruise", 
    "Jim Nortan"
    ];

  for (var names of userNames ) {

    if ( names[0] === 'j' || names[0] === 'J') {
      console.log( `Goodbye ${names}` );
    } else {
      console.log( `Hello ${names}` );
    }
  }

};

greetUsers();
