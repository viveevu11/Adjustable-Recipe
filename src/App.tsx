import { useState } from 'react'

import './App.css'

function App() {

  return (
    <main id='main-content'>
      <header>
        <h1>Vietnamese Pâté Chaud</h1>
        <p>Flaky Vietnamese puff pastries filled with savory, seasoned pork.</p>
        <div className='serving-control'>
          <label htmlFor='servings'>Number of pastries</label>
          <input
            id='servings'
            type='range'
            min='12'
            max='36'
            step='12'
          />
          <output>24 pastries</output>
        </div>
        <nav aria-label='recipe-sections'>
          <a href='#ingredients'>Ingredients</a>
          <a href='#methods'>Methods</a>
        </nav>
        <div className='recipe-layout'>
          <section id='ingredients' className='recipe-card'>
            <h2>Ingredients</h2>
            <ul>
              <li>4 sheets Puff Pastry Sheets (2 Packages)</li>
              <li>1 lb Ground Pork</li>
              <li>1/2 oz Wood Ear Mushrooms</li>
              <li>2 tbsp Fish Sauce</li>
              <li>1/2 Onion</li>
              <li>1 tsp White Pepper</li>
              <li>1 tsp Salt</li>
              <li>1 tsp Garlic Powder</li>
              <li>2 Egg Yolks</li>
            </ul>
          </section>
          <section id='method' className='recipe-card'>
            <h2>Method</h2>
            <ol>
              <li>Preheat the oven to 375°F and line the baking sheets with greased parchment paper.</li>
              <li>Mix the pork, mushrooms, fish sauce, onion, white pepper, salt, and garlic powder.</li>
              <li>Cook a small portion of the filling, taste it, and adjust the seasoning if needed.</li>
              <li>Cut the puff pastry into an even number of 3-inch circles.</li>
              <li>Place 1 tablespoon of filling onto half of the pastry circles.</li>
              <li>Brush the edges with egg wash, cover with the remaining circles, and seal firmly.</li>
              <li>Brush the tops with egg wash and cut two small slits in each pastry.</li>
              <li>Bake for 20–25 minutes until golden and cooked through, then cool briefly before serving.</li>
            </ol>
          </section>
        </div>
      </header>
    </main>
  )
}

export default App
