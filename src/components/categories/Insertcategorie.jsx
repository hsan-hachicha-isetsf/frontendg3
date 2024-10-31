import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Insertcategorie = () => {
  const[categorie,setCategorie]=useState({})
  return (
    <div>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nom catégorie</Form.Label>
        <Form.Control 
        type="text" 
        required
        placeholder="Nom catégorie" 
        value={categorie.nomcategorie}
        onChange={(e)=>setCategorie({...categorie,nomcategorie:e.target.value})}
        
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image catégorie</Form.Label>
        <Form.Control 
        type="text" 
        required
        placeholder="Image catégorie" 
        value={categorie.imagecategorie}
        onChange={(e)=>setCategorie({...categorie,imagecategorie:e.target.value})}
        
        />
      </Form.Group>
        <div>
          <button className='btn btn-success btn-sm'> <i class="fa-solid fa-floppy-disk"></i>Enregistrer</button>
          &nbsp;
          <button className='btn btn-danger btn-sm'><i class="fa-solid fa-circle-xmark"></i> Annuler</button>
        </div>
    </Form>
    </div>
  )
}

export default Insertcategorie
