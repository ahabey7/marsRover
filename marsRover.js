// Rover Object Goes Here
var rover = {
    x:0,
    y:0,
    direction: 'N',
    travelLog: [{x:0, y:0}]
  };
  
  
  function turnLeft(rover){
      var prevDirection = rover.direction;
      
      switch(rover.direction){
      case "N": rover.direction = "W";
                break;
      case "E": rover.direction = "N";
                break;
      case "S": rover.direction = "E";
                break;
      case "W": rover.direction = "S";
                break;
    }
    console.log('turnLeft was called! Previous Direction was: ' + prevDirection + '. Rover is now facing is: ' + rover.direction);
  }
  
  function turnRight(rover){
        var prevDirection = rover.direction;
        
        switch(rover.direction){
      case "N": rover.direction = "E";
                break;
      case "E": rover.direction = "S";
                break;
      case "S": rover.direction = "W";
                break;
      case "W": rover.direction = "N";
                break;
    }
    console.log('turnRight was called! Previous Direction was: ' + prevDirection + '. Rover is now facing is: ' + rover.direction);
  }
  
  function moveForward(rover){
  
      //Cases where rover goes off board
      if((rover.direction==="N" && rover.y===0) || (rover.direction==="S" && rover.y===9) || (rover.direction==="E" && rover.x===9) || (rover.direction==="W" && rover.x===0)){
          console.log("Cannot move in that direction");
      }else{
    
    switch(rover.direction){
      case "N": rover.y--;
                break;
      case "E": rover.x++;
                break;
      case "S": rover.y++;
                break;
      case "W": rover.x--;
                break;
              }
    
              }
    console.log("moveForward was called, " + "position now is x: " + rover.x + " y: " + rover.y);
  }
  
  function moveBackwards(rover){
    //Cases where rover goes off board
  
      if((rover.direction==="S" && rover.y===0) || (rover.direction==="N" && rover.y===9) || (rover.direction==="W" && rover.x===9) || (rover.direction==="E" && rover.x===0)){
          console.log("Cannot move in that direction")
      }else{
    
    switch(rover.direction){
      case "N": rover.y++;
                break;
      case "E": rover.x--;
                break;
      case "S": rover.y--;
                break;
      case "W": rover.x++;
                break;
              }
    
              }
    console.log("moveBackwards was called, " + "position now is x: " + rover.x + " y: " + rover.y);
  }
  
  
  
  function moveRight(rover){
    turnRight(rover);
    moveForward(rover);
  }
  
  function moveLeft(rover){
    turnLeft(rover);
    moveFoward(rover);
  }
  
  //List of Commands
  
  function commandList(rover, orders){
    for (x of orders){
      switch (x){
        case "f": moveForward(rover);
                  break;
        case "r": moveRight(rover);
                  break;
        case "l": moveLeft(rover);
                  break;
        case "b": moveBackwards(rover);
                  break;
      } 
      let newPosition = {x:rover.x, y:rover.y};
                  rover.travelLog.push(newPosition);
   
    }
  }
  //Test Code
  
  commandList(rover, "bbbbbbbbbbb");
  console.log(rover.travelLog);
  