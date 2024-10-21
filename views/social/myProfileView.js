function renderMyProfileView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    
    <img src="img/placeholder.jpg" alt="Placeholder picture"/>
    <div> 
        <input type="text" onchange="">>Fysisk Form<
        <button onclick="" >Brukernavn</button>
        <button onclick="" >Mine venner</button>
    </div>

    Min fysiske form:
    <select>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        <option value=5>5</option>
    </select>
    
    <div>${getAchievementView()}</div>
    </div>
    `
};

function getAchievementView() {
    return /*HTML*/ `
    <div>Dette er achievements</div>
    `
}