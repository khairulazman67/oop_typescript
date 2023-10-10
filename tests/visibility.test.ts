describe('Visibility',()=>{
    class Counter{
        protected counter : number = 0
        
        public increment():void{
            this.counter++
        }

        public getCounter():number{
            return this.counter
        }
    }

    class DoubleCounter extends Counter{
        public increment():void {
            this.counter +=2
        }
    }

    it('Should support in ts', ()=>{
        const counter = new Counter 
        const doubleCounter = new DoubleCounter
        counter.increment()
        counter.increment()
        doubleCounter.increment()
        doubleCounter.increment()
        
        console.info(counter.getCounter())
        
    })
})