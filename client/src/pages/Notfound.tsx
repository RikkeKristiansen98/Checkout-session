import { Link } from "react-router-dom"

export const Notfound = () => {
    return (
        <>
        <p>Page not found.</p>
        <Link to="/">
        <button>Tillbaka till startsidan</button>
      </Link>
        </>
    )
}