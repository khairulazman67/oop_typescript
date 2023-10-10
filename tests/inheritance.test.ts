describe('inheritance',()=>{
    class Employee{
        name : string;

        constructor(name:string){
            this.name  = name
        }
    }
    class Manager extends Employee{}

    class Director  extends Employee{};

    

    it('Should support intheritance',()=>{
        const employee = new Employee('Azman')
        console.log('employee ', employee)

        const manager = new Manager('Khairul')
        console.log('manager ', manager)
    })
})