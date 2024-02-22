import MenuItems from "./MenuItems";


const MenuCotegory = (props) =>{
    const {title, itemCards} =  props?.resData?.card?.card;
    
    return (
        <div className="varity-items">
        <h2> {title}</h2>
        {itemCards?.map((item,index)=>{
            return <MenuItems key={index} itemCards={item}  />
        })}
         
        </div>
    )
} ;

export default MenuCotegory;