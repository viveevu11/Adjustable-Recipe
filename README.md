# Pâté Chaud Adjustable Recipe

## About
Users can use the slider to select from either 12, 24, or 36 pastries. The ingredient quantities update automatically.

## Running locally
1. Clone the repository.
2. Open the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Keyboard operation
- Tab to the slider.
- Use the arrow keys to change quantities.
- Tab to the section links and activate them with Enter.

## Accessibility
- Semantic HTML
- Connected slider label
- Visible focus indicators
- Live announcement when quantities update

## Responsive design
- Two cards on wide screens
- Cards stack on narrow screens
- Section links provide quick access between Ingredients and Method
- Tested at 320px without horizontal scrolling

## Testing
- Keyboard-only navigation
- Narrator screen-reader announcements
- Responsive layout at 320px
- `npm run lint`
- `npm run build`

## Recipe credit
This project adapts the [Pâté Chaud recipe from Cooking Therapy](https://www.cooking-therapy.com/pate-chaud-banh-pate-so/).

## Out of scope
- Multiple recipes
- User accounts
- Saving serving preferences
- Backend storage
