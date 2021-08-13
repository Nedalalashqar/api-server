class collection{
    constructor(item){
        this.data=item
    }
   async create(obj){
       try{
        let dataNew =await this.data.create(obj)
        return dataNew
       }
       catch(error){
       console.error();
       }
    }
    async read(id){
        try{
            let record = null;
            if (id) {
                record = await this.data.findOne({where: {id: id }});
            } else {
                record = await this.data.findAll();
            }
            return record;
        } catch(e) {
            console.error('Error read the record model: ', this.data.name, `id: ${id}`)
        }
    }
    async update(id,obj){
        try{
        let found =await this.data.findOne({where:{id}})
        let updateData= await found.update(obj);
        return updateData
        }
        catch(error){
            console.error('Error deleting  record model: ', this.data.name, `id: ${id}`);
        }
    }
    async delete(id){
        try{
        let deleteData=await this.data.destroy({where: {id}});
        return deleteData
        }
        catch(error){
            console.error('Error deleting the record for model: ', this.data.name, `id: ${id}`);
        }
    }
}

module.exports=collection