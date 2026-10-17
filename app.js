import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="app-logo">
                <img className="logo-img" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

const resLists =[
{
card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371279",
name: "Bunly Burgers & Wraps",
cloudinaryImageId: "2026/1/13/e9bccf8c-70ca-4693-bfba-f477887c14e2_1aacb61d-0940-4421-9ea0-b2065d88132d.png",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"American",
"Fast Food",
"Burgers"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371271",
name: "Yummy Fied Chicken",
cloudinaryImageId: "2025/3/11/5cefa8b7-7c60-46ee-b2af-96c04d363008_086b6bf1-c657-461e-b9ca-801805763710.jpg",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"Fried Chicken",
"Fast Food",
"Burgers"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{
card: 
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371272",
name: "Al-Thaza",
cloudinaryImageId: "2024/9/1/b47f5869-10a4-4279-aa64-1223f089ec80_3ffc3460-b4e0-4589-aeec-2f9e6fc0da2d.jpg",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹399 for two",
cuisines: [
"Arabic",
"Fast Food",
"North Indian"
],
avgRating: 4.5,
parentId: "753265",
avgRatingString: "4.5",
totalRatingsString: "267",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371273",
name: "Eatya",
cloudinaryImageId: "2026/8/13/dacbef2e-cbdf-4cf5-842b-251cafb048d1_e9ab002d-ed41-4bb0-b4f1-19ad5a85c8a0.png",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"Momos",
"Sandwich",
"Burgers"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371274",
name: "Paragon",
cloudinaryImageId: "2025/9/30/b226bb91-c62c-42d8-821e-72d6ca51a8ce_f0f8da01-caee-4421-8475-1c61888dc7e9.png",
locality: "Calicut",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"Biriyani",
"South Indian",
"Chinese"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371275",
name: "Malabar White House Restuarent",
cloudinaryImageId: "2025/9/16/b92ce3ef-5a2b-4fee-8e38-4c113975c104_1874dc73-15dd-4eea-97d1-20954a466ddf.png",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"American",
"Fast Food",
"Chinese"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371276",
name: "Fav Rolls",
cloudinaryImageId: "2024/11/28/39d64b81-e071-46bb-bbd8-32feeb3b08d3_5c2e8a35-edba-4809-896b-d34b87c99363.jpg",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹299 for two",
cuisines: [
"Shavarma Roll",
"Fast Food",
"Porotta Roll"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371277",
name: "Pizza Hut",
cloudinaryImageId: "2025/4/20/fe3ea950-27cd-4f66-9584-a2dc4bff6d8a_3545414f-b605-480a-9568-3e92dd9be01b.jpg",
locality: "Ponneth South Road",
areaName: "Panampilly Nagar",
costForTwo: "₹699 for two",
cuisines: [
"Pizza",
"Fast Food",
"Pepproni Pizza"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371269",
name: "Hug a Mug",
cloudinaryImageId: "2024/12/19/242ea79b-c44c-4d93-9e51-8008705a2ded_ef56247b-b10a-4fef-a910-5729cdff3c6d.jpg",
locality: "Ponneth South Road",
areaName: "Palazhi",
costForTwo: "₹799 for two",
cuisines: [
"Dessert",
"Fast Food",
"Burgers"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
},
{card: {
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
id: "1371278",
name: "Burger Launge",
cloudinaryImageId: "2025/3/26/683ae636-14b8-4a8e-b38a-a1965589fe96_2d7af260-ddc9-40af-8fde-d7bea38df19f.jpg",
locality: "Ponneth South Road",
areaName: "Palazhi",
costForTwo: "₹299 for two",
cuisines: [
"American",
"Fast Food",
"Burgers"
],
avgRating: 4.3,
parentId: "753265",
avgRatingString: "4.3",
totalRatingsString: "262",
},
}
];



const RestuarentCard = (props) =>{
    const{ resData}=props;

    return (
        <div className="card-container">
                <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/" + resData.card.cloudinaryImageId} / >
                <h3 className="res-name">{resData.card.name}</h3>
                <h3 className="cusines">{resData.card.cuisines.join(", ")}</h3>
                <h3 className="price">₹ {resData.card.costForTwo} Only</h3>
                <h3 className="delivary-time">35 mins</h3>
                <h3 className="rating">4.3 ★</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" className="seach-box"/>
                <button className="search-button">Search</button>
            </div>
            <div className="card-container-body">
                {
                    resLists.map((restuarent)=>(
                        <RestuarentCard key={restuarent.card.id} resData={restuarent} />
                    )
                    )
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout/>);



