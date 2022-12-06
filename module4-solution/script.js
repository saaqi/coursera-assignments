
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for ( var i of names ) {

  if ( i[0] === 'j' || i[0] === 'J') {
    // byeSpeaker.speak[i];
    // console.log( `Hello ${i}` );
    console.log( byeSpeaker.speak() + i );
  } else {
    // helloSpeaker.speak[i];
    console.log( helloSpeaker.speak() + i );
  }
}

})();
