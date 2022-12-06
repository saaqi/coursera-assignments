
function greetUsers() {

  var userNames = [
    "James Henson", 
    "Danielle Presley", 
    "Johnny Depp", 
    "Marshall Gregory", 
    "John Doe", 
    "Trina Perry", "Malcolm Potter", 
    "Larry David", 
    "Jack Nicholson", 
    "Leonardo DiCaprio", 
    "Tom Cruise", 
    "Jim Nortan"
    ];

  function consoleGreeting() {

    for ( var i of userNames ) {

      if ( i[0] === 'j' || i[0] === 'J') {
        console.log( `Goodbye ${i}` );
      } else {
        console.log( `Hello ${i}` );
      }
    }
  }; consoleGreeting();


};

greetUsers();
