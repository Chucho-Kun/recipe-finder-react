import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function indexPage() {

const { drinks } = useAppStore()
const hasDrinks = useMemo( () => drinks.drinks.length > 0 , [ drinks ] )

  return (
    <>
       <h1 className="text-6xl font-extrabold">Recetas</h1>
       { hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 my-10 gap-10">
          {drinks.drinks.map( drink => (
            <DrinkCard 
              key={drink.idDrink} 
              drink={ drink }  
            />
          ) )} 
        </div>
       ) : (
        <p>No hay resultados, utiliza el formulario para buscar recetas</p>
       ) }
    </>
  )
}
