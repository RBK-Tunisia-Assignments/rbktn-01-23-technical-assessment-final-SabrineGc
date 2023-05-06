import React from "react";
import axios from "axios"
import "../App.css"
import "../index.scss";
import RecepieCard from "./RecepieCard.jsx"

const Onerecepie = ({e}) => {
  const editRecepie=(recepie_Id,recepie)=>{
    axios.put(`http://localhost:4000/api/recipies/${recepie_Id}`,recepie)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const deleteRecepie=(recepie_Id)=>{
    axios.delete(`http://localhost:4000/api/recipies/${recepie_Id}`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
            <img className="img" src={e.recepie_Image} alt="" />
         
          </div>
          <div className="text">
            <h1 className="food">{e.recepie_Name}</h1>
            <i > {e.Cook_Time}</i>
            <i > {e.Serves} </i>

            <p className="info">{e.recepie_Description}</p>
            <RecepieCard e={e} editRecepie={editRecepie} deleteRecepie={deleteRecepie} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Onerecepie;
