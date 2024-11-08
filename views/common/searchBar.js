function buildSearchBar (searchFunction) {
    return /*HTML*/`
    <div class="search-container">
        <input class="search" placeholder="Søk" onchange=${model.input.searchField=this.value}>
    </div>
    
    
    `
}