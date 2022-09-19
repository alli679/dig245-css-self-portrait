
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
console.log(document.querySelectorAll("p"));
document.addEventListener('mousemove', (event) => {
  const {
    clientX,
    clientY
  } = event;
  console.log(clientX, clientY);
});
