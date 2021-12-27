import React from 'react';
 function Names({title, status}) {
  
   return (
     <div>
      <h3>{`${title} - ${status}`}</h3>
     </div>
   )
}
export {Names};