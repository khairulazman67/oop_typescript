describe('Static',()=>{
    class Configuration{
        static NAME: string = "Belajar TS OOP"
        static VERSION: number =1.0
        static AUTHOR:string = "Khairul Azman"
    }

    class MathUtil{
        static sum(...values:number[]): number {
            let total = 0
            for(let value of values){
                total += value
            }
            return total
        }   
    }

    it('Should support statuc method',()=>{
        console.info(MathUtil.sum(1,2,3,3,4,3))
    })
    it('should support',()=>{
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    })
})