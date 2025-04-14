getRecipes(): Observable<RecipeResponse> {
  return this.http.get<RecipeResponse>('https://dummyjson.com/recipes');
}
