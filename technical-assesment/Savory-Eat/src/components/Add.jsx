import React, {useState} from "react";
import axios from "axios"
import "../App.css";

const Add = () => {
  const [recepie_Name,setName]=useState("")
  const [Cook_Time,setCook_Time]=useState("")
  const [Prep_Time,setPrepTime]=useState("")
  const [recepie_Image,setImage]=useState("")
  const [recepie_Ingredients,setIngredients]=useState("")
  const [recepie_Description,setDescription]=useState("")
  const [Serves,setServes]=useState("")
  const [categorie,setCategorie]=useState("")
  const [users_user_Id,setUserId]=useState(1)

  const recepie={
  recepie_Name:recepie_Name, Cook_Time:Cook_Time, Prep_Time:Prep_Time, recepie_Image:recepie_Image, recepie_Ingredients:recepie_Ingredients, recepie_Description:recepie_Description, Serves:Serves,
    categorie:categorie,users_user_Id:users_user_Id
  }
function addRecepie(){
  axios.post("http://localhost:4000/api/recipies/add",recepie)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e)=>setCook_Time(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={(e)=>setPrepTime(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves"  onChange={(e)=>setServes(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={(e)=>setCategorie(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={(e)=>setIngredients(e.target.value)}  />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL"  onChange={(e)=>setImage(e.target.value)}  />
      </div>
      {/* <div className="form-group">
        <label>User_Id:</label>
        <input type="text" placeholder="id"  onChange={(e)=>setUserId(e.target.value)}  />
      </div> */}
      <button className="create-recipe-btn"  onClick={addRecepie} >Create Recipe</button>
    </div>
  );
};
export default Add;
