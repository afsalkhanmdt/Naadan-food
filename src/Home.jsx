import { useState } from "react";
import EditScreen from "./EditScreen";
import FoodCard from "./FoodCard";

const totalFloodList = [
  {
    id:0,
    title: "Chicken 65",
    price: 160,
    status: true,
    flavor: "Spicy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero modi dignissimos nesciunt enim nulla doloribus voluptatum aspernatur, consectetur eveniet doloremque pariatur reprehenderit ex sapiente minus asperiores, nostrum praesentium sed?",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
    quantity: "12pc",
    deliveryTime: "30min",
  },
  {
    id:1,
    title: "Chilli Chicken",
    price: 210,
    status: true,
    flavor: "Spicy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero modi dignissimos nesciunt enim nulla doloribus voluptatum aspernatur, consectetur eveniet doloremque pariatur reprehenderit ex sapiente minus asperiores, nostrum praesentium sed?",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
    quantity: "12pc",
    deliveryTime: "30m",
  },
  {
    id:2,
    title: "Chicken Shavarama",
    price: 150,
    status: false,
    flavor: "Spicy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero modi dignissimos nesciunt enim nulla doloribus voluptatum aspernatur, consectetur eveniet doloremque pariatur reprehenderit ex sapiente minus asperiores, nostrum praesentium sed?",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
    quantity: "12pc",
    deliveryTime: "30m",
  },
  {
    id:3,
    title: "Beef fry",
    price: 180,
    status: true,
    flavor: "Spicy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero modi dignissimos nesciunt enim nulla doloribus voluptatum aspernatur, consectetur eveniet doloremque pariatur reprehenderit ex sapiente minus asperiores, nostrum praesentium sed?",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
    quantity: "12pc",
    deliveryTime: "30m",
  },
  {
    id:4,
    title: "Mutton roast",
    price: 240,
    status: false,
    flavor: "Spicy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero modi dignissimos nesciunt enim nulla doloribus voluptatum aspernatur, consectetur eveniet doloremque pariatur reprehenderit ex sapiente minus asperiores, nostrum praesentium sed?",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
    quantity: "12pc",
    deliveryTime: "30m",
  },
]

const Home = ()=> {
  const [foodList, setFoodList] = useState(totalFloodList);
  const [editScreenVisibility,
    setEditScreenVisibility] = useState(false);
  const [editFoodIndex, setEditFoodIndex] = useState(null);
  const [lastId,setLastId] = useState(4);
  const [formType,setFormType] = useState(null);
  
  const sort = (order)=>{
    switch (order) {
      case "High to low":
        setFoodList(prev=>{
          let newList = [...prev];
          return newList.sort((second,first)=> first.price - second.price)
        });
        break;
      case "Low to high":
        setFoodList(prev=>{
          let newList = [...prev];
          return newList.sort((second,first)=> second.price - first.price)
        });
        break;
      default:
        break;
    }
  }
  return (
    <>
    <div className="sort-section">
      <label>
        Price
      </label>
      <select
      onChange={(e)=>{
        sort(e.target.value);
      }}
      >
        <option value="">Select</option>
        <option value="High to low">High to low</option>
        <option value="Low to high">Low to high</option>
      </select>
    </div>
    <div className="add-button">
      <button onClick={()=>{
        let newFood = {
          id:lastId+1,
          title: "",
          price: 0,
          status: true,
          flavor: "",
          description: "",
          imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Chicken_65_%28Dish%29.jpg/220px-Chicken_65_%28Dish%29.jpg",
          quantity: "12pc",
          deliveryTime: "30min",
        }
        setFormType("Add");
        setLastId(lastId+1);
        setEditFoodIndex(foodList.length);
        setFoodList(prev=>[...prev,newFood]);
        setEditScreenVisibility(true);

      }}>Add New</button>
    </div>
    <div className="food-card-list">
      {foodList.map((food,i)=>{
        return(<FoodCard
          {...food}
          key={food.id}
          closeCard={()=>{
            setFoodList(foodList.filter((_val,index)=>i !== index))
          }}
          toggleStatus={()=>{
            setFoodList(prev=>{
              let newList = [...prev];
              let newFood = {...newList[i]};
              newFood.status = !newFood.status;
              newList[i] = newFood;
              return newList;
            })
          }}

          editFood={()=>{
            setFormType("Edit");
            setEditFoodIndex(i);
            setEditScreenVisibility(true)
          }}
          />)
    })}
    </div>
    {editScreenVisibility && <EditScreen
    setEditScreenVisibility={setEditScreenVisibility}
    editFoodIndex = {editFoodIndex}
    foodList={foodList}
    setFoodList={setFoodList}
    formType={formType}
    />}
    </>
  );
}



export default Home;