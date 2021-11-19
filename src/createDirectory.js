const sectionDirectory = document.getElementsByClassName('section-directory');
const sections = document.getElementsByTagName("section");

function createDirectory() {
    for (s = 0; s<sectionDirectory.length; s++) {
        for(i = 0; i < sections.length; i++) {
            let section = sections[i]
            console.log(section.id);
            
            let sectionLink = document.createElement("a");
            sectionLink.href = "./#" + section.id
            sectionLink.innerHTML = section.id 
            sectionDirectory[s].appendChild(sectionLink);

        }
    }
}