import FilteredList from './FilteredList.js'
import './App.css'

function App() {
  // my list of products to display, lives in most senior component
  const productList = [
    { id: 1, name: "Steak", size: "Medium", type: "Meat", price: 14.99, img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Cut_up_steak.jpg"},
    { id: 12, name: "Steak", size: "Large", type: "Meat", price: 24.99, img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Cut_up_steak.jpg"},
    { id: 3, name: "Chicken Breast", size: "Large", type: "Meat", price: 15.23, img: "https://static.openfoodfacts.org/images/products/505/407/013/6690/front_en.15.full.jpg"},
    { id: 10, name: "Pork Chop", size: "Medium", type: "Meat", price: 12.52, img: "https://cdn.pixabay.com/photo/2019/06/10/15/42/chop-4264609__340.jpg"},
    { id: 8, name: "Italian Sausage", size: "Medium", type: "Meat", price: 6.99, img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Salsiccia_Italian_pork_sausage.jpg"},
    { id: 2, name: "Broccoli", size: "Medium", type: "Veggie", price: 3.99, img: "https://pixnio.com/free-images/2017/09/19/2017-09-19-06-56-59.jpg"},
    { id: 4, name: "Cauliflower", size: "Large", type: "Veggie", price: 5.22, img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cauliflower_%284701349936%29.jpg"},
    { id: 5, name: "Carrots", size: "Medium", type: "Veggie", price: 2.75, img: "https://cdn.pixabay.com/photo/2020/06/18/18/36/carrot-5314608_1280.jpg"},
    { id: 6, name: "Brussels Sprouts", size: "Medium", type: "Veggie", price: 3.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCMa_WPUKWumHzpxSDbwvGiVVPV8uiepo8Q&usqp=CAU"},
    { id: 7, name: "Green Beans", size: "Large", type: "Veggie", price: 4.25, img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Green_beans_in_a_wooden_box.jpg"},
    { id: 9, name: "Eggplant", size: "Large", type: "Veggie", price: 7.49, img: "https://atlantablackstar.com/wp-content/uploads/2013/08/Eggplant.jpg"},
    { id: 11, name: "Squash", size: "Large", type: "Veggie", price: 6.45, img: "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Butternut-Squash-background.jpg"}
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
