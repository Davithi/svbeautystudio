function strip(x:string|number) {
    if(typeof x === "number"){
        return x.toFixed(2)
    }else if(x === "string"){
        return x.trim()
    }
}

console.log(strip(3));


class MyRespones {
    header:'response header'
    result:'response result '
}

class MyError {
    header : 'Error header'
    message : 'Error message'
}

function handle(res:MyRespones | MyError) {
    if (res instanceof MyRespones) {
        return {
            info: res.header + res.result    
        }
    }else if (res instanceof MyError) {
        return {
            info: res.header + res.message
        }
    }
}
// TypeScript-ն օգտագործում է instanceof օպերատորը մաքուր JavaScript-ի համար նմանատիպ պատճառներով, բայց տիպի անվտանգության հավելյալ առավելություններով: TypeScript-ում instanceof-ը ոչ միայն ստուգում է, թե արդյոք օբյեկտը որոշակի դասի կամ կոնստրուկտորի օրինակ է, այլ նաև ավտոմատ կերպով կատարում է տիպի նեղացում այդ օրինակի վրա՝ պայմանական կոդի բլոկի շրջանակներում:

// Սա շատ օգտակար է, երբ դուք աշխատում եք միության տեսակների հետ կամ երբ վստահ չեք, թե որ ենթատեսակն ունեք և ցանկանում եք ապահով կերպով մուտք գործել այդ ենթատեսակի հատկությունները:

// Օրինակ TypeScript-ում.

class Animal {
    makeSound(): string {
      return "Some generic animal sound";
    }
  }
  
  class Dog extends Animal {
    makeSound(): string {
      return "Woof";
    }
  }
  
  class Cat extends Animal {
    makeSound(): string {
      return "Meow";
    }
  }
  
  const randomAnimal: Animal = new Dog();
  
  if (randomAnimal instanceof Dog) {
    console.log(randomAnimal.makeSound()); //TypeScript-ը հասկանում է, որ այստեղ randomAnimal Dog-ն է
  }

// ===============

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type:AlertType){

}

setAlertType('success');
setAlertType('danger');
setAlertType('warning');
// setAlertType('hello'); //Error «hello» տիպի արգումենտը չի կարող վերագրվել «AlertType» տեսակի պարամետրին:
