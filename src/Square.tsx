import React from "react";

export default  function Square({value, onclick}): JSX.Element {
  return(
    <button style={{"padding": "10px", "width" : "30px"}} onClick={onclick}>
      {value}</button> 
  );
}
