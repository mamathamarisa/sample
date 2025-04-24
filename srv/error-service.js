const cds=require("@sap/cds");

 module.exports=cds.service.impl( async function() {
    const {Products} = this.entities;
    this.on('READ',Products,async (req)=>{
        const id = req.data.ID;
        if(!id){
            req.error(400,"Product id is required");
        }
        const result= await cds.tx(req).run(
            SELECT.one.from(Products).where({ID:id})
        );
        if(!result)
        {
            req.error(404,"Product with Product '$(id)' not found");
        }
        return result;
    })
 }

 );