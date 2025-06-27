import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"
import Notification from "../components/Notifications"


export default function Layout() {

  const { loadLocalStorage } = useAppStore()

  useEffect( () => {
    loadLocalStorage()
  }, [])

  return (
    <>
        <Header />
        <main className="container mx-auto py-16">
            <Outlet />
        </main>

        <Modal />
        <Notification />
    </>
  )
}
