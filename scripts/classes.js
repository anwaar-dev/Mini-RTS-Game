let landBlocks = [ // An Array of all Blocks of land.
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,true,true,true,true,true,true,true,
]; 

let farmsBlocks = [];



function rectangularCollision(rectangle1, rectangle2) {

  if(
    rectangle1.style.left == rectangle2.style.left||
    rectangle1.style.top == rectangle2.style.top

  ){console.log(rectangle1);return true}
  else{
    console.log(rectangle2)
    return false}

    // return (
    //   rectangle1.style.left + rectangle1.style.width >= rectangle2.style.left &&
    //   rectangle1.style.left <= rectangle2.style.left + rectangle2.style.width &&
    //   rectangle1.style.top + rectangle1.style.height/2 <= rectangle2.style.top + rectangle2.style.height &&
    //   rectangle1.position.y + rectangle1.style.height >= rectangle2.style.top
    // )
  }
