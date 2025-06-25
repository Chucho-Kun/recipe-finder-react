import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation()
    const isHome = useMemo( () => pathname === '/' , [ pathname ] )

  return (
    <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo buscador" />
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
                </nav>
            </div>
            
            { isHome && ( 
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
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
                        />
                    </div>
                    <div className="space-y-4" >
                        <label
                            htmlFor="ingredient"
                            className="block text-white uppercase font-extrabold text-lg"    
                        >Categorias
                        </label>
                        <select
                            id="categorias"
                            name="categorias"
                            className="p-3 w-full rounded-lg focus:outline-none bg-white"
                        >
                            <option value="">-- Seleccione --</option>
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
