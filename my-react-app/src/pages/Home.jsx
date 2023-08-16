import React from 'react'
import '../style/Login.css'
import FavRecipe from '../components/FavRecipe/FavRecipe';
import Header from '../components/Header/Header';
import RecipeThumbSection from '../components/Product/RecipeSection';
import NewRecipe from '../components/NewRecipe/NewRecipe';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <body>
    <Header />
    <FavRecipe />
    <NewRecipe />
    <RecipeThumbSection/>
    <Footer />
    </body>
  )
}