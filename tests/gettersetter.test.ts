describe('Getter Setter Test', ()=>{
    class Category{
        _name ?: string;

        get name() : string{
            if(this._name){
                return this._name;
            }else{
                return "Empty";
            }
        }

        set name(value : string){
            if(value !== ""){
                this._name = value
            }
        }
   }

   it('Shoult support in class', ()=>{
    const category = new Category
    console.info(category.name)

    category.name = "food"

    console.log(category.name)
   })


})