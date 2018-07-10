import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

let pages = ["home", "cv", "projects", "contact"]

let currentpage = "home"

document.body.classList.add('js-loading');

let setonclicks = function() {
    document.body.classList.remove('js-loading');
    document.getElementById("open").onclick = function() {
        
        document.getElementById("open").style.opacity = 0
        document.getElementById("navigate").style.width = "60%"
            document.getElementById("root").onclick = function() {
                document.getElementById("open").style.opacity = 1
                document.getElementById("navigate").removeAttribute("style")
            }
    }
}

for (let i = 0; i < pages.length; ++i) {
    document.getElementById(pages[i]).onclick = function() {
        update(pages[i])
    }
}

document.addEventListener('DOMContentLoaded', setonclicks(), false);

let colorSelect = document.getElementById("colorPick").children

let colors = []

for (let i = 0; i < colorSelect.length; ++i) {
    colorSelect[i].onclick = function() {
        changeColor(colorSelect[i].style.background)
    }
    colors[i] = colorSelect[i].style.background
}

let changeColor = function(color) {
    document.querySelector('html').style = "--highlight: " + color
}

changeColor(colors[Math.floor(Math.random()*colors.length)])


function Pagedata(props) {
    const currpage = props.currpage
    if (currpage == "home") {
        let homedata = {__html: document.getElementById("homedata").innerHTML}
        return <div dangerouslySetInnerHTML={homedata}>
            </div> 
    } else if (currpage == "cv") {
        let cvdata = {__html: document.getElementById("cvdata").innerHTML}
        return <div dangerouslySetInnerHTML={cvdata}>
            </div> 
    } else if (currpage == "projects") {
        let projdata = {__html: document.getElementById("projdata").innerHTML}
        return <div dangerouslySetInnerHTML={projdata}>
            </div> 
    } else if (currpage == "contact") {
        let projdata = {__html: document.getElementById("contdata").innerHTML}
        return <div dangerouslySetInnerHTML={projdata}>
            </div> 
    }
}

let update = function(page) {
    document.getElementById("data").style.opacity = 0
    document.getElementById("navigate").removeAttribute("style")
    if (window.outerWidth <= 750) {
        document.getElementById("open").style.opacity = 1
    }
    setTimeout(function(){
        dorender(page)
        document.getElementById("data").style.opacity = 1}, 200)
}

let dorender = function(page) {
    ReactDOM.render(
        <div>
            <h1>Finbar Giusti</h1>
            <div className="data" id="data">
                <Pagedata currpage={page} />
            </div>
        </div>
        , document.getElementById("root")
    )
    document.getElementById("pullUp").onclick = easter
}

dorender("home")

function easter() {
    $("#bg").slideUp()
    $(".container").slideUp()
}
