"use client";

import Link from "next/link";
import { useState } from "react";
import { recipes } from "../data/recipes";

export default function RecipeExplorerPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All recipes");
  const visibleRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All recipes" || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  return <main className="page-wrap"><nav className="top-nav"><Link href="/" className="brand"><span className="brand-dot orange-dot" /> THE LITTLE TABLE</Link><Link href="/">Home ↗</Link></nav>
    <section className="hero hero-peach"><p className="eyebrow">SIMPLE FOOD · GOOD MOOD</p><h1>What's cooking<br />today?</h1><p>Easy, feel-good recipes for everyday moments.</p><span className="hero-shape">✿</span></section>
    <section className="content-section"><div className="section-heading"><div><p className="eyebrow">FROM OUR KITCHEN</p><h2>Recipe box <span className="count">{visibleRecipes.length}</span></h2></div><p className="muted">Made for real life</p></div>
      <div className="filters"><input aria-label="Search recipes" placeholder="Search recipes..." value={search} onChange={(event) => setSearch(event.target.value)} /><select aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)}><option>All recipes</option><option>Breakfast</option><option>Lunch</option><option>Dinner</option></select></div>
      <div className="recipe-grid">{visibleRecipes.map((recipe) => <Link href={`/${recipe.id}`} className="recipe-card" key={recipe.id}><div className={`recipe-art ${recipe.color}`}><span>{recipe.emoji}</span><small>{recipe.category}</small></div><div className="recipe-copy"><p className="recipe-meta">{recipe.time} <span>·</span> {recipe.difficulty}</p><h3>{recipe.name}</h3><p>{recipe.description}</p><span className="recipe-more">See recipe ↗</span></div></Link>)}</div>
      {visibleRecipes.length === 0 && <p className="empty-state">No recipes found. Try another search.</p>}
    </section>
  </main>;
}
