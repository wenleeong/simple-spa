# Creating an SPA - RecipeBook 
This will work with an API that is created in Express -> linked to Mongodb

1. Create a base `RecipeBook.js` and import into `App.js`
2. Setup state mock data
   1. _id, title, ingredients[]
3. Place current page as a state `page: list`
4. Install bootstrap and place the css in 
5. Copy and paste bootstrap nav bar
   1. Remember to change all `class` to `className`
6. Create a function `renderPage`
   1. setup if else. handles the paging between pages
   2. if `list` -> go to AllRecipe
   3. if `add` -> go to AddNew
7. Create 2 basic function components with simple JSX
   1. `AddNew`: to deal with add recipes 
   2. `AllRecipe`: to deal with listing of recipes
8. Import in `AddNew` `AllRecipe` into `RecipeBook`
9.  Change our nav bar to redirect to `AddNew` | `AllRecipe`
   1.  Setup on click that uses a closure `onClick={()=>this.switchPage(<page>)}`
10. Create a function switchPage that takes in a parameter and changes the current page to that parameter
11. Update render function to include `renderPage`
12. How the pages change is due to the current state of `page`
    1.  if `this.state.page` is `list`: go to AllRecipe
    2.  if `this.state.page` is `add`: go to AddNew
    3.  Default `this.state.page` is `list`
13. Send mock data over to AllRecipe using **props** (lifting up states)
    1.  `<AllRecipe recipes={this.state.data}/>`: send data over as props
14. Upgrade `AllRecipe` to have props recipes
    1.  Create a map to print out the recipes data and ingredients
15. Create new component `RecipeItem` in `/components` folder. This just does JSX of 1 item
16. Upgrade `AllRecipe` to use component `RecipeItem`. (Splitting up the UI)
    1.  Extract JSX of `map` and place inside `RecipeItem`
    2.  Change JSX to using `props`
    3.  Update `AllRecipe` to send props data over to `RecipeItem`
    4.  Send `_id`,`title`,`ingredients` as props
17. Dealing with the Create-CRUD. Modify `AddNew` to include a form
    1.  Create 2 labels and textboxes
    2.  Apply some bootstrap css
18. Setup 1way and 2way binding with `AddNew`
    1.  setup name,value,onChange on AddNew to use props
    2. Create a function `updateFormFields` in `RecipeBook` to handle form changes and set the state
    3. Send props data over in `RecipeBook` > `AddNew` 
19. Create a new function `addNew`. 
    1.  Create a temp obj 
        1.  _id: `<random id>`
        2.  title: `this.state.newRecipeTitle`
        3.  ingredients: `this.state.newRecipeIngredients`
    2. Set the state and update the items and current page
       1. data: `<new recipes>`
       2. page: `list` (Change the state of the current page back to list. Gives a "redirect")
20. Upgrade to use API data. 
    1.  Install axios `npm install axios`
21. Create an express application
    1.  Install express, cors, mongodb, dotenv 
22. Creation of APIs
23. update RecipeBook to use axios
    1.  Set a `BASE_API_URL` to the API created
    2.  Use the function `componentDidMount`
        1.  Make an API call inside