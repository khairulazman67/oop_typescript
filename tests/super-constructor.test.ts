describe('Super Constructor',()=>{
    class Person {
        name : string
        constructor(name:string){
            this.name = name
        }
    }
    class Employee extends Person{
        department : string
        constructor(name :string, department:string){
            super(name)
            this.department=department
        }
    }   

    

    it('Should support ts',()=>{
        const employee = new Employee('azman','it')
        console.log(`Hello ${employee.name}, i am from ${employee.department} department`)
    })
})