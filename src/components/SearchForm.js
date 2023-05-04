import React, { useRef,useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () =>{
  const{setSearchTerm}=useGlobalContext()
  const searchVal=useRef("")
  useEffect(()=>{
    searchVal.current.focus()
      },
    []
      )
  
  
  const searchYourCocktail=()=>{
    setSearchTerm(searchVal.current.value)
  }
 
 const handleSubmit=(e)=>{
  e.preventDefault()
 }
 
  return (
    <section className="section search">
      <div className="form-control">
      <form  className="search-form" onSubmit={handleSubmit} >
        <label htmlFor='name'>search your favourite cocktails</label>
        <input type='text' id='name'ref={searchVal} onChange={searchYourCocktail}></input>
      </form>
      </div>
    </section>

  )
}

export default SearchForm
