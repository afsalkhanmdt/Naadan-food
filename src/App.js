import { useState } from "react";
import FoodCard from "./Foodcard";
const totalfoodList = [{
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
  title: "Chilli Chicken",
  price: 160,
  status:false,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  title: "Chicken Olathiyadh",
  price: 160,
  status:true,
  flavor:"Spicy",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolorem omnis! Odit accusamus corrupti, praesentium vitae quasi suscipit beatae quia voluptas hic sunt nisi, aliquam eos dolor aspernatur cum minus.",
  imageUrl:"https://www.kindpng.com/picc/m/788-7881073_chicken-65-images-hd-png-transparent-png.png",
  quantity:"12pc",
  deliveryTime:"30m",
},

{
  title: "Chicken pottitherichadh",
  price: 160,
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
  return(
    <div className="food-card-list">
    {
        foodList.map((food,i)=>{
      return(<FoodCard{...food} key={i}  deleteCard={()=>{
        setFoodList(foodList.filter((_val,index)=>i!=index))
      }}/>)
    })
  }
      </div>
    )
  }

export default App;
