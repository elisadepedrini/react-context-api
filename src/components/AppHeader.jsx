import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext"

export default function AppHeader() {

    const {budget, setBudget} = useBudget()
    console.log(budget);
    

    return(
        <>

        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-brand ms-4">Artemis</div>
            <div className="nav navbar-nav mx-5">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/who">Chi siamo</NavLink>
                <NavLink className="nav-item nav-link" to="/products">Prodotti</NavLink>
            </div>

            <button type="button" className="btn" data-bs-toggle="button" onClick={() => {setBudget(!budget)}}>{budget ? "Disattiva Budget Mode" : "Attiva Budget Mode"}</button>
            
        </nav>
        
        </>
    )
}