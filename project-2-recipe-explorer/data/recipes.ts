export type Recipe = { id: string; name: string; category: string; time: string; difficulty: string; description: string; ingredients: string[]; color: string; emoji: string };

export const recipes: Recipe[] = [
  { id: "lemon-pasta", name: "Creamy Lemon Pasta", category: "Dinner", time: "20 min", difficulty: "Easy", description: "A bright, creamy pasta with lemon, parmesan, and a little black pepper.", ingredients: ["200 g pasta", "1 lemon", "2 tbsp butter", "½ cup parmesan", "Black pepper"], color: "lemon", emoji: "🍋" },
  { id: "berry-oats", name: "Berry Breakfast Oats", category: "Breakfast", time: "10 min", difficulty: "Easy", description: "Warm oats topped with juicy berries and a spoonful of honey.", ingredients: ["1 cup rolled oats", "1 cup milk", "½ cup mixed berries", "1 tsp honey", "A pinch of cinnamon"], color: "berry", emoji: "🫐" },
  { id: "green-bowl", name: "Green Garden Bowl", category: "Lunch", time: "25 min", difficulty: "Easy", description: "A fresh lunch bowl with crunchy greens, avocado, and a simple dressing.", ingredients: ["1 cup cooked rice", "1 avocado", "1 cucumber", "1 cup spinach", "2 tbsp yogurt dressing"], color: "green", emoji: "🥑" },
  { id: "tomato-toast", name: "Tomato Toast", category: "Breakfast", time: "8 min", difficulty: "Easy", description: "Crispy toast topped with ripe tomatoes, olive oil, and fresh herbs.", ingredients: ["2 slices sourdough", "1 ripe tomato", "1 tbsp olive oil", "Fresh basil", "Salt"], color: "tomato", emoji: "🍅" },
];
