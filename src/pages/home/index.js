import React from 'react'
import CocktailList from '../../component/cocktailList'
import SearchForm from '../../component/searchForm'

export default function Home() {
  return (
    <div>
      <SearchForm/>
      <CocktailList/>
    </div>
  )
}
