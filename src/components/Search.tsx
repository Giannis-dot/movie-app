


function Search({searchTerm, setSearchTerm}: {searchTerm: string, setSearchTerm: (term: string) => void}) {
    return (
        <div className="search">
            <div>
                <img src='/assets/search.svg' alt='search'/>
                <input 
                    type='text' 
                    placeholder='Search through thousands of movies' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>
        </div>
    );
}

export default Search;