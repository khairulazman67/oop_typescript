describe('instanceof',()=>{
    class Employee{}
    class Manager{}

   

    it('Should support instanceof on ts',()=>{
        const budi = new Employee();
        const eko = new Manager();

        expect(budi instanceof Employee).toBe(true)
        expect(eko instanceof Manager).toBe(true)
        // console.log(typeof(budi))
        // console.log(typeof(eko))
    })
})