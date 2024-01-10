import React from "react";

export default  function Square({value, onclick}): JSX.Element {
  return(
    <button style={{"padding": "10px", "minWidth" : "50px", "minHeight":"50px"}} onClick={onclick}>
      {value}</button> 
  );
}
