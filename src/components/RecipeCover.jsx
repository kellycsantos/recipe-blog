export default function RecipeCover({img, text}){
    return(
        <div className="coverRecipe">
            <img src={img} alt={text}/>
        </div>
    )
}