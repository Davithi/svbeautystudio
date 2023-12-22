interface Person {
    name: string;
    age: number;
  }

type PersonKeys = keyof Person;  // "name" | "age" | "location"

let key:PersonKeys = 'name'
key = 'age'

type User = {
    _id : number 
    name : string
    email : string
    createdAt : Date
}

type UserKeyNoMeta1 = Exclude <keyof User, '_id' | 'createdAt'> // 'name' | 'createdAt'
type UserKeyNoMeta2 = Pick <User, 'name' | 'email'> 

let u1: UserKeyNoMeta1 = 'name'
// u1 = '_id' //Erro

//Գործողություններ. Exclude-ը բացառում է տարրերը տիպից, մինչդեռ Pick-ը հանում է որոշակի հատկություններ օբյեկտի տեսակից:
