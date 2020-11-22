import FilteredList from './FilteredList.js'
import './App.css'

function App() {
  // my list of products to display, lives in most senior component
  const productList = [
    { id: 1, name: "Steak", size: "Medium", type: "Meat", price: 14.99},
    { id: 12, name: "Steak", size: "Large", type: "Meat", price: 24.99},
    { id: 3, name: "Chicken Breast", size: "Large", type: "Meat", price: 15.23},
    { id: 10, name: "Pork Chop", size: "Medium", type: "Meat", price: 12.52},
    { id: 8, name: "Italian Sausage", size: "Medium", type: "Meat", price: 6.99},
    { id: 2, name: "Broccoli", size: "Medium", type: "Veggie", price: 3.99},
    { id: 4, name: "Cauliflower", size: "Large", type: "Veggie", price: 5.22},
    { id: 5, name: "Carrots", size: "Medium", type: "Veggie", price: 2.75},
    { id: 6, name: "Brussels Sprouts", size: "Medium", type: "Veggie", price: 3.99},
    { id: 7, name: "Green Beans", size: "Large", type: "Veggie", price: 4.25},
    { id: 9, name: "Eggplant", size: "Large", type: "Veggie", price: 7.49},
    { id: 11, name: "Squash", size: "Large", type: "Veggie", price: 6.45}
   ]   
  return (
    <div>
      <h1>CS1300 Food Emporium</h1>
      {/* main component that holds all logic and state*/}
      <FilteredList list={productList} />
    </div>
    
  );
}

export default App;
