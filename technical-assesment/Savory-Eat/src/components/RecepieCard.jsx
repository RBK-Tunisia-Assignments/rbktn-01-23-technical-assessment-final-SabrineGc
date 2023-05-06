import React, {useState} from "react";

import "../App.css";

const RecepieCard = ({e,deleteRecepie,editRecepie}) => {
  const [recepie_Id,setId]=useState("")
  const [details,setDetails]=useState(false)
  const [recepie_Name,setName]=useState(e.recepie_Name)
  const [Cook_Time,setCook_Time]=useState(e.Cook_Time)
  const [Prep_Time,setPrepTime]=useState(e.Prep_Time)
  const [recepie_Image,setImage]=useState(e.recepie_Image)
  const [recepie_Ingredients,setIngredients]=useState(e.recepie_Ingredients)
  const [recepie_Description,setDescription]=useState(e.recepie_Description)
  const [Serves,setServes]=useState(e.Serves)
  const [categorie,setCategorie]=useState(e.categorie)
  const [users_user_Id,setUserId]=useState(1)

  const recepie={
    recepie_Name:recepie_Name, Cook_Time:Cook_Time, Prep_Time:Prep_Time, recepie_Image:recepie_Image, recepie_Ingredients:recepie_Ingredients, recepie_Description:recepie_Description, Serves:Serves,
    categorie:categorie,users_user_Id:users_user_Id
  }

 
  const handleUpdate=(recepie_Id)=>{
    console.log(e.recepie_Id)
    editRecepie(e.recepie_Id, recepie)
    setDetails(false)
  }
  const handleDelete=(recepie_Id)=>{
    console.log(recepie_Id, "params")
    console.log(e.recepie_Id, "hhhh")
    deleteRecepie(e.recepie_Id)
  }

  return(
    <div className="add-recipe-form ">
      <button onClick={()=>setDetails(!details)}  >Editing</button>
      {details ?
      <div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" value={recepie_Name} onChange={(e)=>setName(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e)=>setCook_Time(e.target.value)} value={Cook_Time}  />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" value={Prep_Time} onChange={(e)=>setPrepTime(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" value={Serves} onChange={(e)=>setServes(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" value={categorie} onChange={(e)=>setCategorie(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" value={recepie_Description} onChange={(e)=>setDescription(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" value={recepie_Ingredients} onChange={(e)=>setIngredients(e.target.value)}  />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" value={recepie_Image}  onChange={(e)=>setImage(e.target.value)}  />
      </div>
      <div>
      <button className="create-recipe-btn"  onClick={()=>{handleUpdate(e.recepie_Id)}} >Update Recepie</button>
    </div>   
    <div>
      <button className="create-recipe-btn"  onClick={()=>{handleDelete(e.recepie_Id)}} >Delete Recepie</button>
    </div>  
    </div> 
    :<div></div>}
    
    </div>
  )
  }

export default RecepieCard;
