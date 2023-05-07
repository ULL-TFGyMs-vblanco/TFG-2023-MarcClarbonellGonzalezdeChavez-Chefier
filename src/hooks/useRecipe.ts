import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useRecipe(id: string) {
  const { data, error, isLoading } = useSWR(
    `https://chefier-backend-git-develop-tfg-marccarbonell.vercel.app/api/recipe/${id}`,
    fetcher
  );

  return {
    recipe: data,
    isLoading,
    isError: error,
  };
}
