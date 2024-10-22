function renderMyProfileView(){ //FIXME: Feilmeldinger når man kjører
   /*  document.getElementById("app").innerHTML = /*HTML*/ /*`
    
    <img src="img/placeholder.jpg" alt="Placeholder picture"/>
    <div> 
        <input type="value" onchange="${userProfile[i].userPhysical}">Fysisk Form
        <input type="text" onchange="${userProfile[i].userName}">Brukernavn
        <button onclick="renderFriendOverview()">Mine venner</button>
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
    `
     */
};

function renderMyProfileView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
        placeholder profile view
    `
};

function getAchievementView() {
    return /*HTML*/ `
    <div>Dette er achievements</div>
    `
}