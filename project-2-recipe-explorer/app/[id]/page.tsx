import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../data/recipes";

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);
  if (!recipe) notFound();

  return <main className="page-wrap detail-wrap"><nav className="top-nav"><Link href="/" className="brand"><span className="brand-dot orange-dot" /> THE LITTLE TABLE</Link><Link href="/">← All recipes</Link></nav><section className="recipe-detail"><div className={`recipe-art detail-art ${recipe.color}`}><span>{recipe.emoji}</span><small>{recipe.category}</small></div><div className="recipe-detail-copy"><p className="eyebrow">{recipe.time} · {recipe.difficulty}</p><h1>{recipe.name}</h1><p className="lead">{recipe.description}</p><h2>What you'll need</h2><ul>{recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul><Link className="button-link" href="/">Back to recipes</Link></div></section></main>;
}
