import { useAppStore } from "../stores/useAppStore"

const { categories } = useAppStore()

export default function indexPage() {

  categories

  return (
    <>
       <h1>Inicio</h1>
    </>
  )
}
