import {CDN_URL_LIVE_IMG} from "../utils/constants";

const RestuarentCard = (props) =>{
    {console.log("props : "+ props)}
    const{ resData}=props;

    return (
        <div className="card-container">
                <img className="card-image" src={
                  CDN_URL_LIVE_IMG + resData?.info?.cloudinaryImageId   
                } / >
                <h3 className="res-name">{ resData.info?.name}</h3>
                <h3 className="cusines">{resData.info?.cuisines?.join(", ")}</h3>
                <h3 className="price">₹ {resData.info?.costForTwo } Only</h3>
                <h3 className="delivary-time">35 mins</h3>
                <h3 className="rating">{ resData.info?.avgRating} ★</h3>
        </div>
    )
}

export default RestuarentCard;