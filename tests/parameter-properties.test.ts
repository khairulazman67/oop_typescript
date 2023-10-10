describe('Parameter Properties',()=>{
    class Person{
        constructor(public name:string){}
    }
    
    it('Should support ts',()=>{
        const person = new Person('Azman');
        console.log(person.name)

        expect(person.name).toBe('Azman')
    })
})