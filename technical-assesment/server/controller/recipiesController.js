
const model=require("../model/recipiesModel.js")
const getrecepie = (req, res) => {
  model.getAll((err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
  })
};
 const addrecepie=(req,res)=>{
  model.add(req.body,(err,results)=>{
    if(err) res.status(409).send(err)
    else res.status(201).send("recepie added")
  })
 }
 const updaterecepie=(req,res)=>{
  const id=req.params.recepie_id
  console.log(id)
  model.edit(id,req.body,(err,results)=>{
    if(err) res.status(409).send(err)
    else res.status(200).send("recepie updated")
  })
 }
 const deleterecepie=(req,res)=>{
  const id=req.params.recepie_id
  model.deleteRecepie(id,(err,results)=>{
    if(err) res.status(404).send(err)
    else res.status(204).send("recepie deleted")
  })
 }
 const search=(req,res)=>{
  const recepie_Name=req.params.recepie_Name
  model.getOne(recepie_Name,(err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
  })
 }


module.exports = {
  getrecepie,
  addrecepie,
  updaterecepie,
  deleterecepie,
  search
};






