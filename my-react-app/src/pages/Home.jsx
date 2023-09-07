import React from 'react'
import '../style/Login.css'
import FavRecipe from '../components/FavRecipe/FavRecipe';
import Header from '../components/Header/Header';
import RecipeThumbSection from '../components/Product/RecipeSection';
import NewRecipe from '../components/NewRecipe/NewRecipe';
import Footer from '../components/Footer/Footer';
import Title from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <FavRecipe />
    <NewRecipe />
    <div>
      <Title title="Popular Recipe" />
      <RecipeThumbSection/>
    </div>
    <Footer />
    </  >
  )
}