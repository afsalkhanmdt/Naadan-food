import { useState } from "react";
import FoodCard from "./Foodcard";
const totalfoodList = [{
  id:0,
  title: "Chicken 65",
  price: 160,
  status:true,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:1,
  title: "Chilli Chicken",
  price: 180,
  status:false,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:2,
  title: "Chicken Olathiyadh",
  price: 200,
  status:true,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  id:3,
  title: "Chicken pottitherichadh",
  price: 220,
  status:false,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},
]
const App = ()=> {
  const[foodList,setFoodList]=useState(totalfoodList)
  const sort=(order)=>{
    switch(order){
      case "High to low":
        setFoodList(prev=>{
          let newList = [...prev];
      return newList.sort((second,first)=>first.price-second.price)
    });
        break;
        case "Low to high":
          setFoodList(prev=>{
            let newList=[...prev];
            return newList.sort((second,first)=>second.price-first.price)
          });
        break;
        default:
          break;
         }
    }
  return (
    <>
    <div className="sort-section">
      <label>Price</label>
      <select
      // value={sortInput}
       onChange={(e)=>{
        // setSortInput(e.target.value);
         sort(e.target.value);
       }}
       >
         <option value="">Select</option>
        <option value="High to low">Hight to low</option>
        <option value="Low to high">Low to high</option>
      </select>
      
      </div>
    <div className="food-card-list">
    {
        foodList.map((food,i)=>{
      return(<FoodCard{...food} key={food.id}  deleteCard={()=>{
        setFoodList(foodList.filter((_val,index)=>i!=index))
      }}
      toggleStatus={()=>{
        setFoodList(prev=>{
         let newList=[...prev];
          let newFood={...newList[i]};
          newFood.status=!newFood.status;
          newList[i]=newFood;
          return newList;
          
        })
      }}
      />)
    })
  }
      </div>
      </>
    );
  }

export default App;
