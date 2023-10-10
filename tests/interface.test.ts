describe('Interface', ()=>{
    interface HashName{
        name : string
    }

    interface CanSayHello{
        sayHello(name:string):void
    }

    class Person implements HashName, CanSayHello{
        name : string

        constructor(name:string){
            this.name = name
        }

        sayHello(name: string): void {
            console.log(`Hallo ${name} my name is ${this.name}`)
        }
    }

    it('Should support interface',()=>{
        const person = new Person('Azman')

        person.sayHello("budi")
    })
})