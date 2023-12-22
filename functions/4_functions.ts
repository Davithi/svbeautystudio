function getNum(x:number,y:number):number {
    return x 
}

function toUpperCase(str:string):string {
    return str.trim().toUpperCase()
}


interface MyPosition {
    x:number | undefined
    y:number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default : string
}


function position(): MyPosition;
function position( a:number ): MyPositionWithDefault;
function position( a:number , b : number ): MyPosition;

function position(a?:number , b?:number) {

    if( !a && !b ){
        return {x:undefined , y:undefined}
    }
    if (a && !b) {
        return {x:a ,  b : undefined , default: a.toString()}
    }

    return {x:a , y:b}

}

console.log("Empty" , position());
console.log("One param" , position(26));
console.log("Two params" , position(52,67));
