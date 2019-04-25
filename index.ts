
enum way{
  ANY,
  LEFT,
  RIGHT,
  UP,
  DOWN
}

interface point{
  x:number,
  y:number
}

interface cell{
  
}

function range(start:number,end:number){
  let result:any[]=[];
  for(var i=start;i<end;i++){
    result.push([]);
  }
  return result;
}

var block:any[][]=[];

var blocks=range(1,20).reduce(
  (carry,item)=>{
  carry.push(
    range(1,20)
  );
  return carry;
},[]);



console.log(blocks);
