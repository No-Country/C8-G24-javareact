// import { useState } from "react"
// import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import SearchPage from "../Pages/SearchPage/SearchPage";

import { useContext } from "react";
import SearchContext from "../Context/SearchContext";

const SearchInput = () => {

  const {handleSearch , search} = useContext(SearchContext)

  return (
    <form className="w-full mr-14 max-lg:mr-0 max-sm:mb-3">   
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        <input onChange={handleSearch} value={search} type="search" id="default-search" class="w-full p-4 pl-10 text-sm text-black  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none rounded-full font-fontGafata placeholder:font-fontGafata" placeholder="¿QUE NECESITA TU MASCOTA?" required/>
    </div>
</form>
  )
}


export default SearchInput