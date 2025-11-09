// import React, { useEffect, useState } from 'react'
// import { BiSearchAlt2 } from 'react-icons/bi'
// import Loading from './Loading'
// import Searchbar from './SearchBar'
// import RecipeCard from './RecipeCard'
// import { fetchRecipes } from '../utils'
// // import Button from './Button'

// const Recipes = () => {
//     const [recipes, setRecipes] = useState([])
//     const [query, setQuery] = useState('Vegan')
//     const [limit, setLimit] = useState(40)
//     const [loading, setLaoding] = useState(false)

//     const handleChange = (e) => {
//         setQuery(e.target.value)
//     }

//     const fetchRecipe = async () => {
//         try {
//             const data = await fetchRecipes({ query, limit })

//             setRecipes(data)

//             setLaoding(false)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLaoding(false)
//         }
//     }

//     const handleSearchedRecipe = async (e) => {
//         e.preventDefault()
//         fetchRecipe()
//     }

//     const showMore = () => {
//         setLimit(prev => prev + 20)
//         fetchRecipe()
//     }

//     useEffect(() => {
//         setLaoding(true)

//         fetchRecipe()

//     }, [])

//     if (loading) {
//         return (
//             <Loading />
//         )
//     }
//     return (
//         <div className='w-full'>
//             <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
//                 <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
//                     <Searchbar placeholder="eg. Ugal, Akara, Fufu"
//                         handleInputChange={handleChange}
//                         rightIcon={
//                             <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
//                         }
//                     />
//                 </form>

//             </div>

//             {
//                 recipes?.length > 0 ? (
//                     <>
//                         <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
//                             {
//                                 recipes?.map((item, index) => (
//                                     <RecipeCard recipe={item} 
//                                     key={index} />))
//                             }
//                         </div>

//                         <div className='flex w-full items-center justify-center py-10'>
//                             <button className='bg-orange-600 text-white
//                             px-3 py-1 rounded-full text-sm'
//                             onClick={showMore}>
//                                 Unfold
//                             </button>
//                         </div>
//                     </>
//                 ) : <div className='text-white w-full items-center justify-center py-10'>
//                     <p className='text-center'>Looks Like the Pantry Is Empty</p>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Recipes

import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan')
    const [limit, setLimit] = useState(40)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchRecipe = async (append = false) => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(prevRecipes => append ? [...prevRecipes, ...data] : data)

            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    const showMore = () => {
        setLimit(prev => prev + 20)
        fetchRecipe(true)  // Append new recipes
    }

    useEffect(() => {
        setLoading(true)
        fetchRecipe()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar 
                        placeholder="eg. Ugal, Akara, Fufu"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>
            </div>

            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />
                                ))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>
                            <button className='bg-orange-600 text-white px-3 py-1 rounded-full text-sm' onClick={showMore}>
                                Unfold
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='text-white w-full flex items-center justify-center py-10'>
                        <p className='text-center'>Looks Like the Pantry Is Empty</p>
                    </div>
                )
            }
        </div>
    )
}

export default Recipes