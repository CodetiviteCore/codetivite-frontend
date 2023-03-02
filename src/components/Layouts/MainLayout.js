import { Navbar, Footer } from "../index"

export const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}