import {CDN_URL_IMG , CDN_URL_LIVE_IMG} from "../utils/constants";

const RestuarentCard = (props) =>{
    const{ resData}=props;

    return (
        <div className="card-container">
                <img className="card-image" src={
                  CDN_URL_LIVE_IMG + resData.card?.card?.info?.cloudinaryImageId   
                } / >
                <h3 className="res-name">{ resData.card?.card?.info?.name}</h3>
                <h3 className="cusines">{resData.card?.card?.info?.cuisines?.join(", ")}</h3>
                <h3 className="price">₹ {resData.card?.card?.info?.costForTwo } Only</h3>
                <h3 className="delivary-time">35 mins</h3>
                <h3 className="rating">{ resData.card?.card?.info?.avgRating} ★</h3>
        </div>
    )
}

export default RestuarentCard;