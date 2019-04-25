
var layers = 10;
var width = 12;
var height = 8;

interface point{
  x:number,
  y:number
}

function range(start:number,end:number){
  let result:any[]=[];
  for(var i=start;i<end;i++){
    result.push([]);
  }
  return result;
}


/**

   0 1 2
 +------+
0|      |
1|  ==  |
2|      |
 +------+

width= 1 + 2x
height= 1 + 2x

*/
interface mazeSetting{
  width:number,
  height:number,
  depth:number
}

class maze{
  private data:any[] = [];

  private setting:mazeSetting={
    width:10,
    height:10,
    depth:1
  };

  public constructor(){
    for(let i=0;i < 
       this.setting.width
     * this.setting.height
     * this.setting.depth
    ;i++){
      this.data.push(0);
    }
  }

  public static create()
  {

  }

  public toString():string{
    return this.data.reduce((carry,item,index)=>{

      carry+=`|${item}`;
      if(index%10 == 9 ){
        carry+="\n";
      }      
      return carry;
    },"");
  }
}

const m=new maze();

console.log(`${m}`);
