function buildPlayerContainers(parent, data) {
    parent.innerHTML = "";
    let playersOutOfRank = 0;
    for (i = 0; i < data.length; i++) {

        let json = data[i]
        // Create child element;
        let child = document.createElement("div");

        // Create all the data elements
        let profileContainer = document.createElement("div");
        let img = document.createElement("img");
        let username = document.createElement("div");
        let rank = document.createElement("div");
        let infoContainer = document.createElement("div");
        let generalInfo = document.createElement("div");
        let timerange = document.createElement("div");
        let strengths = document.createElement("div");
        let weaknesses = document.createElement("div");
        let statsContainer = document.createElement("div");
        let seed = document.createElement("div");
        
        // Assign classes to divs
        child.classList.add("profile")
        profileContainer.classList.add("user")
        username.classList.add("name")
        rank.classList.add("rank")
        infoContainer.classList.add("description")
        generalInfo.classList.add("quote")
        strengths.classList.add("strengths")
        weaknesses.classList.add("weaknesses")
        timerange.classList.add("timerange")
        statsContainer.classList.add("stats")
        seed.classList.add("seed")
        
        // Format div based on player data
        if (json.rank > 300000 | json.rank < 85000) {
            child.classList.add("out-of-rank")
            seed.innerHTML = "-"
            playersOutOfRank++;
        }
        else {
            seed.innerHTML = (i + 1) - playersOutOfRank;
        }
        
        // Assign div content to variables
        let rankText = json.rank;
        console.log()
        
        img.src = "http://s.ppy.sh/a/" + json.id
        username.innerHTML = json.username
        rank.innerHTML = "#" + rankText.toLocaleString()
        generalInfo.innerHTML = '<b>"</b>' + json.info + '<b>"</b>'
        strengths.innerHTML = "<b>Strengths: </b>" + json.strengths
        weaknesses.innerHTML = "<b>Weaknesses: </b>" + json.weaknesses
        timerange.innerHTML = "<b>Availability: </b>" + json.timerange
        
        //  Assemble the child div
        child.appendChild(seed)

        profileContainer.appendChild(img);
        profileContainer.appendChild(username);
        profileContainer.appendChild(rank);
        child.appendChild(profileContainer);

        
        infoContainer.appendChild(generalInfo)
        child.appendChild(infoContainer)
        
        statsContainer.appendChild(timerange);
        statsContainer.appendChild(strengths)
        statsContainer.appendChild(weaknesses)
        infoContainer.appendChild(statsContainer);

        child.addEventListener("click", function(){
            redirect("https://osu.ppy.sh/u/" + json.id)
        }) 
        parent.appendChild(child)
    }
}