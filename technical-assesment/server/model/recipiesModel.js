const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();
const getAll = (callback) => {
    const sql=`SELECT * FROM recepie`
    connection.query(sql,function(err,results){
       callback(err,results)
    })
}; 

const add =(recepie,callback)=>{
    const sql=`INSERT INTO recepie SET ?`
    connection.query(sql,recepie,function(err,results){
        console.log(err,"err is here")
       callback(err,results)
    })
}

const edit=(recepie_id,recepie,callback)=>{
    const sql=`UPDATE recepie SET ? WHERE recepie_id =${recepie_id}`
    console.log(recepie_id)
    connection.query(sql,recepie,function(err,results){
        console.log(err,"err from update")
        callback(err,results)
    })
    
}

const deleteRecepie=(recepie_id,callback)=>{
    const sql=`DELETE FROM recepie WHERE recepie_id =${recepie_id}`
    connection.query(sql,function(err,results){
        console.log(err,"from deleting")
        callback(err,results)
    })
}

const getOne=(recepie_Name,callback)=>{
    const sql=`SELECT * FROM recepie WHERE recepie_Name='${recepie_Name}'`
    connection.query(sql,function(err,results){
        callback(err,results)
    })
}





module.exports ={ getAll,add,edit, deleteRecepie, getOne };




