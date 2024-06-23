var planetName = document.getElementsByClassName("planetName");
var planetTitle = document.getElementById("planetTitle");
var planetDes = document.getElementById("planetDes");
var rotation = document.getElementById("rotation");
var revolution = document.getElementById("revolution");
var radius = document.getElementById("radius");
var temperature = document.getElementById("temperature");
var planetImg = document.getElementById("planetImg");
var sourceSite = document.getElementById("sourceSite");
var btn = document.querySelectorAll(".btn");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var mercury = document.getElementById("mercury");
var mercuryBar = document.getElementById("mercuryBar");
var venus = document.getElementById("venus");
var venusBar = document.getElementById("venusBar");
var earth = document.getElementById("earth");
var earthBar = document.getElementById("earthBar");
var mars = document.getElementById("mars");
var marsBar = document.getElementById("marsBar");
var jupiter = document.getElementById("jupiter");
var jupiterBar = document.getElementById("jupiterBar");
var saturn = document.getElementById("saturn");
var saturnBar = document.getElementById("saturnBar");
var uranus = document.getElementById("uranus");
var uranusBar = document.getElementById("uranusBar");
var neptune = document.getElementById("neptune");
var neptuneBar = document.getElementById("neptuneBar");

var mobBtn = document.querySelectorAll("mobBtn")
var mobOverBtn = document.getElementById("mobOverBtn");
var mobInterBtn = document.getElementById("mobInterBtn");
var mobSurfBtn = document.getElementById("mobSurfBtn");
var btnBar1 = document.getElementById("btnBar1");
var btnBar2 = document.getElementById("btnBar2");
var btnBar3 = document.getElementById("btnBar3");
var mobBar = document.querySelectorAll('.mobBar');

//Function to change button background on click

function changeBackground(btnNum) {
  btn.forEach((button) => button.classList.remove("clicked"));
  document.getElementById("button" + btnNum).classList.add("clicked");
  
}


//var clicked = document.querySelector(".clicked");
//var mobclicked = document.querySelector(".mobclicked");
//console.log(mobclicked)



// Function to change a CSS rule's attribute
function changeCssClassAttribute(className, attributeName, newValue) {
    // Get all the stylesheets in the document
    const styleSheets = document.styleSheets;
      
    // Loop through each stylesheet
    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];
          //console.log(styleSheet);

        // Get all the rules in the stylesheet
        const rules = styleSheet.cssRules || styleSheet.rules;


        // Loop through each rule
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];

            // Check if the rule is a style rule and matches the desired class
            if (rule.type === CSSRule.STYLE_RULE && rule.selectorText === className) {
                // Change the desired attribute
                rule.style[attributeName] = newValue;
                break;
            }
        }
    }
}

//Function to display bar whenbutton on click in mobile

function changeMobBar(barNum) {
  mobBar.forEach((div) => div.classList.remove("mobclicked"));
  document.getElementById("btnBar" + barNum).classList.add("mobclicked");
}

// Function to change a CSS rule's attribute for mobile
function changeMobCssClassAttribute(className, attributeName, newValue) {
    // Get all the stylesheets in the document
    const styleSheets = document.styleSheets;
      
    // Loop through each stylesheet
    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];
          //console.log(styleSheet);

        // Get all the rules in the stylesheet
        const rules = styleSheet.cssRules;


        // Loop through each rule 
      for (let j = 0; j < rules.length; j++) {
          //important step
          const rule = rules[45].cssRules[11];
          //console.log(rule)
            // Check if the rule is a style rule and matches the desired class
          if (rule.type === CSSRule.STYLE_RULE &&
            rule.selectorText === className) {
            
                // Change the desired attribute
                rule.style[attributeName] = newValue;
                break;
            }
        }
    }
}



fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {

    planetImg.style.width = "31.468%";
    

mobOverBtn.onclick = function () {
  planetDes.innerText = data[0].overview.content;
  sourceSite.href = data[0].overview.source;
  planetImg.src = data[0].images.planet;
  changeMobBar(1);
};

mobInterBtn.onclick = function () {
  planetDes.innerText = data[0].structure.content;
  sourceSite.href = data[0].structure.source;
  planetImg.src = data[0].images.internal;
  changeMobBar(2);
};

mobSurfBtn.onclick = function () {
  planetDes.innerText = data[0].geology.content;
  sourceSite.href = data[0].geology.source;
  planetImg.src = data[0].images.geology;
  changeMobBar(3);
};








    
    

    
    
        button1.onclick = function () {
          planetDes.innerText = data[0].overview.content;
          sourceSite.href = data[0].overview.source;
          planetImg.src = data[0].images.planet;
          changeBackground(1);
          
        };

        button2.onclick = function () {
          planetDes.innerText = data[0].structure.content;
          sourceSite.href = data[0].structure.source;
          planetImg.src = data[0].images.internal;
          changeBackground(2);
          
        };

        button3.onclick = function () {
          planetDes.innerText = data[0].geology.content;
          sourceSite.href = data[0].geology.source;
          planetImg.src = data[0].images.geology;
          changeBackground(3);
          
        };
      
  })






for (let index = 0; index < planetName.length; index++) {
  planetName[index].onclick = function () {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        planetTitle.innerText = data[index].name;
        planetDes.innerText = data[index].overview.content;
        rotation.innerText = data[index].rotation;
        revolution.innerText = data[index].revolution;
        radius.innerText = data[index].radius;
        temperature.innerText = data[index].temperature;
        planetImg.src = data[index].images.planet;
        sourceSite.href = data[index].overview.source;



        


        button1.onclick = function () {
          planetDes.innerText = data[index].overview.content;
          sourceSite.href = data[index].overview.source;
          planetImg.src = data[index].images.planet;
          changeBackground(1)
        };
        button2.onclick = function () {
          planetDes.innerText = data[index].structure.content;
          sourceSite.href = data[index].structure.source;
          planetImg.src = data[index].images.internal;
          changeBackground(2)
          
        };
        button3.onclick = function () {
          planetDes.innerText = data[index].geology.content;
          sourceSite.href = data[index].geology.source;
          planetImg.src = data[index].images.geology;
          changeBackground(3)
          
        };
        
        if (planetName[index] == mercury) {
          //clicked.style.backgroundColor = "hsl(194 48 50)";
                    changeCssClassAttribute(
                      ".btn.clicked",
                      "backgroundColor",
                      "hsl(194 48 50)"
                    );

          mercuryBar.style.display = "flex";
          planetImg.style.width = "31.468%";
          
        } else {
          mercuryBar.style.display = "none";
        }
        if (planetName[index] == venus) {
          //clicked.style.backgroundColor = "hsl(33 82 61)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(33 82 61)"
          );

          venusBar.style.display = "flex";
          planetImg.style.width = "43.41%";
          
        } else {
          venusBar.style.display = "none";
        }
        if (planetName[index] == earth) {
          //clicked.style.backgroundColor = "hsl(263 67 51)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(263 67 51)"
          );
          earthBar.style.display = "flex";
          planetImg.style.width = "48.83%";
        } else {
          earthBar.style.display = "none";
        }
        if (planetName[index] == mars) {
          //clicked.style.backgroundColor = "hsl(10 63 51)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(10 63 51)"
          );
          marsBar.style.display = "flex";
          planetImg.style.width = "36.46%"
        } else {
          marsBar.style.display = "none";
        }
        if (planetName[index] == jupiter) {
          //clicked.style.backgroundColor = "hsl(2 68 53)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(2 68 53)"
          );
          jupiterBar.style.display = "flex";
          planetImg.style.width = "63.153%";

        } else {
          jupiterBar.style.display = "none";
        }
        if (planetName[index] == saturn) {
          //clicked.style.backgroundColor = "hsl(17 73 46)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(17 73 46)"
          );
          saturnBar.style.display = "flex";
          planetImg.style.width = "72.3%";

        } else {
          saturnBar.style.display = "none";
        }
        if (planetName[index] == uranus) {
          //clicked.style.backgroundColor = "hsl(169 73 44)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(169 73 44)"
          );
          uranusBar.style.display = "flex";
          planetImg.style.width = "49.698%";

        } else {
          uranusBar.style.display = "none";
        }
        if (planetName[index] == neptune) {
          //clicked.style.backgroundColor = "hsl(222 87 56)";
          changeCssClassAttribute(
            ".btn.clicked",
            "backgroundColor",
            "hsl(222 87 56)"
          );
          neptuneBar.style.display = "flex";
          planetImg.style.width = "48.83%";

        } else {
          neptuneBar.style.display = "none";
        }
      });
  };
}







var toggleButton = document.getElementById("hamburger");
var toggleColor = document.getElementById("toggleColor");
var menu = document.getElementById("menu");
var mobPlanetName = document.getElementsByClassName("mobPlanetName");
var overBtnBar = document.getElementById("overBtnBar");

//btnBar1.style.backgroundColor = "hsl(194 48 50)";
toggleButton.onclick = function () {
  menu.classList.toggle("active");
}








for (let index = 0; index < mobPlanetName.length; index++) {
  mobPlanetName[index].onclick = function () {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        menu.classList.toggle("active");
        planetTitle.innerText = data[index].name;
        planetDes.innerText = data[index].overview.content;
        rotation.innerText = data[index].rotation;
        revolution.innerText = data[index].revolution;
        radius.innerText = data[index].radius;
        temperature.innerText = data[index].temperature;
        planetImg.src = data[index].images.planet;
        sourceSite.href = data[index].overview.source;








        mobOverBtn.onclick = function () {
          planetDes.innerText = data[index].overview.content;
          sourceSite.href = data[index].overview.source;
          planetImg.src = data[index].images.planet;
          changeMobBar(1);
        };
        mobInterBtn.onclick = function () {
          planetDes.innerText = data[index].structure.content;
          sourceSite.href = data[index].structure.source;
          planetImg.src = data[index].images.internal;
          changeMobBar(2);
        };
        mobSurfBtn.onclick = function () {
          planetDes.innerText = data[index].geology.content;
          sourceSite.href = data[index].geology.source;
          planetImg.src = data[index].images.geology;
          changeMobBar(3);
        };



        if (planetName[index] == mercury) {
          //btnBar1.style.backgroundColor = "hsl(194 48 50)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(194 48 50)"
          );
          planetImg.style.width = "31.468%";
        } 
        if (planetName[index] == venus) {
          //btnBar1.style.backgroundColor = "hsl(33 82 61)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(33 82 61)"
          );
          planetImg.style.width = "43.41%";
        } 
        if (planetName[index] == earth) {
          //btnBar1.style.backgroundColor = "hsl(263 67 51)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(263 67 51)"
          );
          planetImg.style.width = "48.83%";
        } 
        if (planetName[index] == mars) {
          //btnBar1.style.backgroundColor = "hsl(10 63 51)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(10 63 51)"
          );
          planetImg.style.width = "36.46%";
        }
        if (planetName[index] == jupiter) {
          //btnBar1.style.backgroundColor = "hsl(2 68 53)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(2 68 53)"
          );
          planetImg.style.width = "63.153%";
        } 
        if (planetName[index] == saturn) {
          //btnBar1.style.backgroundColor = "hsl(17 73 46)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(17 73 46)"
          );
          planetImg.style.width = "72.3%";
        } 
        if (planetName[index] == uranus) {
          //btnBar1.style.backgroundColor = "hsl(169 73 44)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(169 73 44)"
          );
          planetImg.style.width = "49.698%";
        } 
        if (planetName[index] == neptune) {
          //btnBar1.style.backgroundColor = "hsl(222 87 56)";
          changeMobCssClassAttribute(
            '.mobBar.mobclicked',
            "backgroundColor",
            "hsl(222 87 56)"
          );
          planetImg.style.width = "48.83%";
        } 
      });
  };
}