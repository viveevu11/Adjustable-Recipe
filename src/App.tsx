import { useState } from 'react'

import './App.css'

function App() {
  const [pastryCount, setPastryCount] = useState(24);
  const scaleFactor = pastryCount / 24;

  function formatQuantity(value: number) {
    const whole = Math.floor(value);
    const decimal = Number((value - whole).toFixed(2));

    const fractions: Record<number, string> = {
      0.25: "¼",
      0.5: "½",
      0.75: "¾",
    };

    if (decimal === 0) {
      return String(whole);
    }

    const fraction = fractions[decimal];

    return whole === 0 ? fraction : `${whole} ${fraction}`;
  }

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
            value = {pastryCount}
            onChange={(event) => setPastryCount(Number(event.target.value))}
          />
          <output>{pastryCount} pastries</output>
          <p className="visually-hidden" aria-live="polite" aria-atomic="true">
  Makes {pastryCount} pastries. Ingredient quantities updated.
</p>
        </div>
        </header>
        <nav aria-label='recipe-sections'>
          <a href='#ingredients'>Ingredients</a>
          <a href='#method'>Method</a>
        </nav>
        <div className='recipe-layout'>
          <section id='ingredients' className='recipe-card'>
            <h2>Ingredients</h2>
            <ul>
              <li>{formatQuantity(4 * scaleFactor)} sheets Puff Pastry Sheets ({2 * scaleFactor} Packages)</li>
              <li>{formatQuantity(1 * scaleFactor)} lb Ground Pork</li>
              <li>{formatQuantity(0.5 * scaleFactor)} oz Wood Ear Mushrooms</li>
              <li>{2 * scaleFactor} tsp Fish Sauce</li>
              <li>{formatQuantity(0.5 * scaleFactor)} Onion</li>
              <li>{formatQuantity(1 * scaleFactor)} tsp White Pepper</li>
              <li>{formatQuantity(1 * scaleFactor)} tsp Salt</li>
              <li>{formatQuantity(1 * scaleFactor)} tsp Garlic Powder</li>
              <li>{2 * scaleFactor} Egg Yolks</li>
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
    </main>
  )
}

export default App
