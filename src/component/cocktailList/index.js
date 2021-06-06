import React from "react";
import { useGlobalContext } from "../../context";
import Cocktail from "../cocktail";
import Loading from "../loading";
import './cocktailLis.css'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading/>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="search-title">
        No se encontró el cocktail con ese criterio de busqueda
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktail List</h2>
      <div className="cocktails-center">
    {cocktails.map((item, key) =>{
      return (
        <Cocktail key={key} {...item}/>
      )
    })}
      </div>
    </section>
  );
}
