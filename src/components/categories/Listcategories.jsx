import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
const Listcategories = () => {
    const[categories,setCategories]=useState([])
    const[isLoading,setIsLoading]=useState(true)

    const fetchcategories=async()=>{
        try {
            const res=await axios.get("https://backendecomgs1.vercel.app/api/api/categories")
           
            setCategories(res.data)
            setIsLoading(false)
          

        } catch (error) {
            console.log(error)
        }

    }
useEffect(()=>{
    fetchcategories()
},[])

if(isLoading){
    return <center><ReactLoading type="spinningBubbles" color="red" height={'20%'} width={'20%'} /></center>
}
const handleDelete=async(id)=>{
    if(window.confirm("Êtes vous sûre de vouloir supprimer")){
    try {
        await axios.delete(`https://backendecomgs1.vercel.app/api/api/categories/${id}`)
        .then(res=>{  
            setCategories(categories.filter(c=>c.id!=id))
        })

    } catch (error) {
       console.log(error) 
    }
}
}
  return (
    <div>
       <Link to="/categories/add"> <button className='btn btn-success btn-sm'><i class="fa-solid fa-square-plus"></i> Nouveau</button></Link>
      <center><h1>Liste des catégories</h1></center>
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>Nom Catégorie</th>
                <th>Image Catégorie</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
           { categories.map((cat,index)=>
            <tr key={index}>
                <td>{cat.nomcategorie}</td>
                <td><img src={cat.imagecategorie} width={100} height={100}/></td>
                <td><button className='btn btn-warning btn-sm'><i class="fa-solid fa-pen-to-square"></i> Update</button></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(cat.id)}><i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>

            )}

        </tbody>
      </table>
    </div>
  )
}

export default Listcategories
