describe('Polymorphisme',()=>{
    class Employee{
        constructor(public name:string){}
    }

    class Manager extends Employee{

    }

    class VicePresident extends Manager{

    }

    function sayHello(employee:Employee):void{
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident
            console.info(`Hello VP ${vp.name}`)
        }else if(employee instanceof Manager){
            const manager = employee as Manager
            console.info(`Hello manager ${manager.name}`)
        }else{
            console.info(`Hello Employee ${employee.name}`)    
        }
    }

    it('Should support polymorphisme',()=>{
        let  employee : Employee = new Employee("Eko");
        console.log(employee)

        employee = new Manager("Azman")
        console.log(employee)

        employee = new VicePresident("Khairul")
        console.log(employee)
    })

    it('Should support method parameter polymorphisme',()=>{
        sayHello(new Employee("Eko"))
        sayHello(new Manager("Khairul"))
        sayHello(new VicePresident("Azman"))
    })
})