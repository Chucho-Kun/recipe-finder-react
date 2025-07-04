import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export default function Header() {

    const [ searchFilter , setSearchFilters ] = useState({
        ingredient: '',
        category: ''
    })

    const { pathname } = useLocation()
    const isHome = useMemo( () => pathname === '/' , [ pathname ] )

    const { fetchCategories , searchRecipies , categories , showNotification } = useAppStore()

    useEffect( () => {
        fetchCategories()
    } , [])

    const handleChange = ( e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
        setSearchFilters({
            ...searchFilter,
            [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if( Object.values( searchFilter ).includes('') ){

            showNotification( {
                text: 'Todos los campos son obligatorios',
                error: true
            } )
            return
        }
        // Consultar las recetas
        searchRecipies( searchFilter )
    }

  return (
    <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <a href="/">
                        <img className="w-32 cursor-pointer hover:bg-gray-600 rounded-2xl p-3" src="/logo.svg" alt="logo buscador" />
                    </a>
                </div>
                <nav className="flex gap-4">
                    <NavLink 
                        className={ ({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }
                        to="/"
                    >Inicio</NavLink>
                    <NavLink 
                        className={ ({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }
                        to="/favoritos"
                    >Favoritos</NavLink>
                    <NavLink
                        className={ ({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }
                        to="/generate"
                    >Generar con IA</NavLink>
                </nav>
            </div>
            
            { isHome && ( 
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-4" >
                        <label
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"    
                        >Nombre o Ingredientes
                        </label>
                        <input
                            id="ingredient"
                            name="ingredient"
                            type="text"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            placeholder="Nombre o Ingrediente"
                            onChange={handleChange}
                            value={searchFilter.ingredient}
                        />
                    </div>
                    <div className="space-y-4" >
                        <label
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"    
                        >Categorias
                        </label>
                        <select
                            id="category"
                            name="category"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                            onChange={handleChange}
                            value={searchFilter.category}
                        >
                            <option value="">-- Seleccione --</option>
                            { categories.drinks.map( drink => (
                                <option key={drink.strCategory} value={drink.strCategory} >{ drink.strCategory }</option>
                            ) ) }
                        </select>
                    </div>
                    <input type="submit" 
                        value="Buscar Recetas"
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                    />
                </form>
             ) }
       
        </div>
    </header>
  )
}
