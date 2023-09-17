//your JS code here. If required.
const para = document.querySelector("#status")
function changeText(){
	const heading = document.createElement("h1")
	para.innerText=""
	heading.innerText = "Entered Metaverse"
	para.appendChild(heading)
	
}