import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// // Challenge: Map over the things Array to generate a <p> element for each item and render them on the page below the button

// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
//   const thingsElements = thingsArray.map(thing, index => <p key={index}>{thing}</p>
//   );
  
//   return (
//     <div>
//       <button>Add Item</button>
//       {thingsElements}
//     </div>
  
//   )
// }

