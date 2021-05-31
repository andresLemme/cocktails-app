import React from "react";
import { useGlobalContext } from "../../context";

export default function SearchForm() {
  
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  
  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }
  return (
    <section className="section search">
      <form>
        <div className="form-control">
          <label htmlFor="name">Buscar tu cocktail favorito</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  );
}
