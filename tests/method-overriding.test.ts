describe('Method Overriding',()=>{
    class Employee {
        name : string
        constructor(name:string){
            this.name = name
        }

        sayHello(name:string):void{
            console.log(`Hello ${name} my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello('Azman')
            console.info('And, I am Manager')
            // console.log(`Hello ${name} my name is ${this.name}, I am your manager`)
        }
    }

    it('Should support method overriding',()=>{
        const employee = new Employee("Maop")
        employee.sayHello('Azman')

        const manager = new Manager("Khairul")
        manager.sayHello('Hantu')

    })
})