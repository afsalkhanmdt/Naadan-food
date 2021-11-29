import React, { useState } from 'react'

const FoodCard = ({title,
    imageUrl,
    price,
    description,
    status,
    closeCard,
    toggleStatus,
    editFood
}) => {
    const[isDeleted,setIsDeleted] = useState(false);
    return (
        <div className={`food-card ${isDeleted? `food-card--deleted-${status? "available": "not-available"}`: ""}`}>
            <div
                className="food-card-close-button"
                onClick={
                    ()=>{
                        setIsDeleted(true)
                        setTimeout(closeCard,300)
                    }
                }
            />
            <div
                className="food-card-edit-button"
                onClick={editFood}
            />

            <img className="food-card-thumbnail" src={imageUrl} alt={title} />
            <div className="food-card-details-section">
                <div className="food-card-title">
                    {title}
                </div>
                <div className="food-card-price">
                ₹{price}
                </div>
                <div
                className={`food-card-availability ${status?
                "food-card-availability--available" :
                "food-card-availability--not-available"}`
                }
                onClick={toggleStatus}
                >
                    {status? "Available" : "Not Available"}
                </div>
                <div className="food-card-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default FoodCard
