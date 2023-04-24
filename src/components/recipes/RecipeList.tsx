import { Recipe } from '../../types/recipe';
import { RecipeCard } from './RecipeCard';
import styles from '../../styles/recipes/RecipeList.module.css';

interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className={styles.list__container}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.name} recipe={recipe} />
      ))}
    </div>
  );
};