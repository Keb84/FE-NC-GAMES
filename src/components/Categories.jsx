import {useEffect, useState} from "react"
import {getCategories} from '../utils/api'
import {Link} from 'react-router-dom'

function Categories () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(({categories}) => {
            setCategories(categories)
            
        })
    }, [categories])
    return (
        <section>
            <nav className="topNavBar">
               
            {categories.map(category => {
                return <li key={category.slug}>
                    <Link to={`/reviews/${category.slug}`}>{category.slug}</Link>
                                    
                </li>
            })}
            </nav>
        </section>
    )
}
export default Categories