//Declaring Variables
//Qi Variables
let qi = 0;
let qiPerClick = 1;
let qiPerSecond = 0;
let qiThreshold = 100;
let qiPerClickBreakthrough = 2; //Changes how much QiPerClick is multiplied when breaking through
let baseQi = 1; // Changes what the Qi is reset to when breaking through
//Spirit Stone Variables
let spiritStones = 0;
let spiritStoneGain = 1; //How many you get per button click
let ssPerSecond = 0; //Spirit Stones per second
//Breakthrough and Variables
let breakthroughTriggered = false;
let realmIndex = 0;
let qiThresholdMulti = 3; //Multiplies qiThreshold when breaking through

//Loads saved values and updates on screen text to reflect that
window.onload = loadGameState;

//Saves game before unload
window.onbeforeunload = saveGameState;

//Autosave
setInterval(saveGameState, 30000)

// Constant For realms
  const realms = [
    "Body Refinement I",
    "Body Refinement II",
    "Body Refinement III",
    "Body Refinement IV",
    "Body Refinement V",
    "Body Refinement VI",
    "Body Refinement VII",
    "Body Refinement VIII",
    "Body Refinement IX",
    "Qi Condensation I",
    "Qi Condensation II",
    "Qi Condensation III",
    "Qi Condensation IV",
    "Qi Condensation V",
    "Qi Condensation VI",
    "Qi Condensation VII",
    "Qi Condensation VIII",
    "Qi Condensation IX",
    "Foundation Establishment I",
    "Foundation Establishment II",
    "Foundation Establishment III",
    "Foundation Establishment IV",
    "Foundation Establishment V",
    "Foundation Establishment VI",
    "Foundation Establishment VII",
    "Foundation Establishment VIII",
    "Foundation Establishment IX",
    "Core Formation I",
    "Core Formation II",
    "Core Formation III",
    "Core Formation IV",
    "Core Formation V",
    "Core Formation VI",
    "Core Formation VII",
    "Core Formation VIII",
    "Core Formation IX",
    "Golden Core I",
    "Golden Core II",
    "Golden Core III",
    "Golden Core IV",
    "Golden Core V",
    "Golden Core VI",
    "Golden Core VII",
    "Golden Core VIII",
    "Golden Core IX",
    "Origin Spirit I",
    "Origin Spirit II",
    "Origin Spirit III",
    "Origin Spirit IV",
    "Origin Spirit V",
    "Origin Spirit VI",
    "Origin Spirit VII",
    "Origin Spirit VIII",
    "Origin Spirit IX",
    "Nascent Soul I",
    "Nascent Soul II",
    "Nascent Soul III",
    "Nascent Soul IV",
    "Nascent Soul V",
    "Nascent Soul VI",
    "Nascent Soul VII",
    "Nascent Soul VIII",
    "Nascent Soul IX",
    "Soul Formation I",
    "Soul Formation II",
    "Soul Formation III",
    "Soul Formation IV",
    "Soul Formation V",
    "Soul Formation VI",
    "Soul Formation VII",
    "Soul Formation VIII",
    "Soul Formation IX",
    "Soul Transformation I",
    "Soul Transformation II",
    "Soul Transformation III",
    "Soul Transformation IV",
    "Soul Transformation V",
    "Soul Transformation VI",
    "Soul Transformation VII",
    "Soul Transformation VIII",
    "Soul Transformation IX",
    "Transcendent I",
    "Transcendent II",
    "Transcendent III",
    "Transcendent IV",
    "Transcendent V",
    "Transcendent VI",
    "Transcendent VII",
    "Transcendent VIII",
    "Transcendent IX",
    "Loose Immortal I",
    "Loose Immortal II",
    "Loose Immortal III",
    "Loose Immortal IV",
    "Loose Immortal V",
    "Loose Immortal VI",
    "Loose Immortal VII",
    "Loose Immortal VIII",
    "Loose Immortal IX",
    "Earth Immortal I",
    "Earth Immortal II",
    "Earth Immortal III",
    "Earth Immortal IV",
    "Earth Immortal V",
    "Earth Immortal VI",
    "Earth Immortal VII",
    "Earth Immortal IX",
    "Sky Immortal I",
    "Sky Immortal II",
    "Sky Immortal III",
    "Sky Immortal IV",
    "Sky Immortal V",
    "Sky Immortal VI",
    "Sky Immortal VII",
    "Sky Immortal VIII",
    "Sky Immortal IX",
    "Heaven Immortal I",
    "Heaven Immortal II",
    "Heaven Immortal III",
    "Heaven Immortal IV",
    "Heaven Immortal V",
    "Heaven Immortal VI",
    "Heaven Immortal VII",
    "Heaven Immortal VIII",
    "Heaven Immortal IX",
    "True Immortal I",
    "True Immortal II",
    "True Immortal III",
    "True Immortal IV",
    "True Immortal V",
    "True Immortal VI",
    "True Immortal VII",
    "True Immortal VIII",
    "True Immortal IX",
    "Celestial Immortal I",
    "Celestial Immortal II",
    "Celestial Immortal III",
    "Celestial Immortal IV",
    "Celestial Immortal V",
    "Celestial Immortal VI",
    "Celestial Immortal VII",
    "Celestial Immortal VIII",
    "Celestial Immortal IX",
    "Chaos Immortal I",
    "Chaos Immortal II",
    "Chaos Immortal III",
    "Chaos Immortal IV",
    "Chaos Immortal V",
    "Chaos Immortal VI",
    "Chaos Immortal VII",
    "Chaos Immortal VIII",
    "Chaos Immortal IX",
    "Dao Sovereign I",
    "Dao Sovereign II",
    "Dao Sovereign III",
    "Dao Sovereign IV",
    "Dao Sovereign V",
    "Dao Sovereign VI",
    "Dao Sovereign VII",
    "Dao Sovereign VIII",
    "Dao Sovereign IX",
    "Dao Ancestor I",
    "Dao Ancestor II",
    "Dao Ancestor III",
    "Dao Ancestor IV",
    "Dao Ancestor V",
    "Dao Ancestor VI",
    "Dao Ancestor VII",
    "Dao Ancestor VIII",
    "Dao Ancestor IX",
    "Lesser Divinity I",
    "Lesser Divinity II",
    "Lesser Divinity III",
    "Lesser Divinity IV",
    "Lesser Divinity V",
    "Lesser Divinity VI",
    "Lesser Divinity VII",
    "Lesser Divinity VIII",
    "Lesser Divinity IX",
    "Greater Divinity I",
    "Greater Divinity II",
    "Greater Divinity III",
    "Greater Divinity IV",
    "Greater Divinity V",
    "Greater Divinity VI",
    "Greater Divinity VII",
    "Greater Divinity VIII",
    "Greater Divinity IX",
    "True Divinity I",
    "True Divinity II",
    "True Divinity III",
    "True Divinity IV",
    "True Divinity V",
    "True Divinity VI",
    "True Divinity VII",
    "True Divinity VIII",
    "True Divinity IX",
    "Origin King I",
    "Origin King II",
    "Origin King III",
    "Origin King IV",
    "Origin King V",
    "Origin King VI",
    "Origin King VII",
    "Origin King VIII",
    "Origin King IX",
    "Origin God I",
    "Origin God II",
    "Origin God III",
    "Origin God IV",
    "Origin God V",
    "Origin God VI",
    "Origin God VII",
    "Origin God VIII",
    "Origin God IX",
    "Quasi-True God I",
    "Quasi-True God II",
    "Quasi-True God III",
    "Quasi-True God IV",
    "Quasi-True God V",
    "Quasi-True God VI",
    "Quasi-True God VII",
    "Quasi-True God VIII",
    "Quasi-True God IX",
    "Pure Deity I",
    "Pure Deity II",
    "Pure Deity III",
    "Pure Deity IV",
    "Pure Deity V",
    "Pure Deity VI",
    "Pure Deity VII",
    "Pure Deity VIII",
    "Pure Deity IX",
    "Quasi-World Sovereign God I",
    "Quasi-World Sovereign God II",
    "Quasi-World Sovereign God III",
    "Quasi-World Sovereign God IV",
    "Quasi-World Sovereign God V",
    "Quasi-World Sovereign VI",
    "Quasi-World Sovereign VII",
    "Quasi-World Sovereign VIII",
    "Quasi-World Sovereign IX",
    "World Sovereign I",
    "World Sovereign II",
    "World Sovereign III",
    "World Sovereign IV",
    "World Sovereign V",
    "World Sovereign VI",
    "World Sovereign VII",
    "World Sovereign VIII",
    "World Sovereign IX",
    "Open Heaven I",
    "Open Heaven II",
    "Open Heaven III",
    "Open Heaven IV",
    "Open Heaven V",
    "Open Heaven VI",
    "Open Heaven VII",
    "Open Heaven VIII",
    "Open Heaven IX",]
    
    


  

const qiDisplay = document.getElementById("qi");
const spiritStonesDisplay = document.getElementById("spiritStones");
const cultivateQiButton = document.getElementById("cultivateQi");
const gatherSpiritStonesButton = document.getElementById("gatherSpiritStones");
const breakthroughButton = document.getElementById("breakthrough");
const messages = document.getElementById("messages");
const realmHeader = document.getElementById("realmHeader");
const sgaPrice = document.getElementById("SGA-Price");
const sgaBtn = document.getElementById("SGA-Btn");

cultivateQiButton.addEventListener("click", cultivateQi);
gatherSpiritStonesButton.addEventListener("click", gatherSpiritStones);
breakthroughButton.addEventListener("click", breakthrough);

//Update functions for text
function updateQi() {
    qiDisplay.innerHTML = `Qi: ${qi}`;
}

function updateSpiritStones() {
    spiritStonesDisplay.innerHTML = `Spirit Stones: ${spiritStones}`;
}
//Function for breakthrough button
function updateBreakthroughButton(){
    if (qi >= qiThreshold) {
      breakthroughButton.style.backgroundColor = "green";
      breakthroughButton.disabled = false;
    } else {
      breakthroughButton.style.backgroundColor = "lightcoral";
      breakthroughButton.disabled = true;
    }
  }
  updateBreakthroughButton();

//Function for stats Table
function updateTable() {
    // Get the DOM elements for each stat
    const qiPerSecondEl = document.getElementById("qi-per-sec");
    const qiNeededEl = document.getElementById("qi-needed");
    const qiPerClickEl = document.getElementById("qi-per-click");
    const ssPerClickEl = document.getElementById("ss-per-click");
    const ssPerSecondEl = document.getElementById("ss-per-sec");
    
    // Update the DOM elements with the current stats
    qiPerSecondEl.textContent = qiPerSecond;
    qiNeededEl.textContent = qiThreshold;
    qiPerClickEl.textContent = qiPerClick;
    ssPerClickEl.textContent = spiritStoneGain;
    ssPerSecondEl.textContent = ssPerSecond;
  }
  

//MessageBox Function
function showMessage(message, timeout) {
  const li = document.createElement("li");
  li.innerText = message;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
  setTimeout(function() {
    messages.removeChild(li);
  }, timeout);
}

//Cultivate Button Function
function cultivateQi() {
  qi += qiPerClick;
  updateQi();
  updateBreakthroughButton()
  if (qi >= qiThreshold && !breakthroughTriggered) {
    breakthroughTriggered = true;
    showMessage("You have enough Qi to trigger a breakthrough.", 25000);
  }
}

//Spirit Stone Function
function gatherSpiritStones() {
    spiritStones += 1;
    updateSpiritStones();
    updateTable();
  }
  
  //Breakthrough function
  function breakthrough() {
    if (qi >= qiThreshold) { // makes sure you have the required amount of Qi for breakthrough
      qiThreshold *= qiThresholdMulti; //Increases Qi Requirement every breakthrough
      qiPerClick *= qiPerClickBreakthrough; //Increases Qi Increase every breakthrough
      qi = baseQi;
      breakthroughTriggered = false;
      realmIndex++;
      breakthroughButton.disabled = true;
      breakthroughButton.style.backgroundColor = "lightcoral";
      updateQi();
      updateTable();
      updateRealmHeader();
      showMessage("Congratulations! You have achieved a breakthrough! You Qi rate has doubled and your Qi has been condensed", 15000);
    } else {
      showMessage(`You need at least ${qiThreshold} Qi to trigger a breakthrough. You currently have ${qi} Qi.`, 15000);
    }
  }
//Updates realm Header
function updateRealmHeader() {
    const realmHeader = document.getElementById("realmHeader");
    const realm = realms[realmIndex];
    realmHeader.innerHTML = `Current Realm: ${realm}`;
  }
  function saveGameState() {
    localStorage.setItem("qi", qi);
    localStorage.setItem("qiPerSecond", qiPerSecond); 
    localStorage.setItem("qiPerClick", qiPerClick);
    localStorage.setItem("qiThreshold", qiThreshold);
    localStorage.setItem("ssPerSecond", ssPerSecond);
    localStorage.setItem("spiritStones", spiritStones);
    localStorage.setItem("ssPerClick", spiritStoneGain);
    localStorage.setItem("qiPerClickBreakthrough", qiPerClickBreakthrough);
    localStorage.setItem("baseQi", baseQi);
    localStorage.setItem("breakthroughTriggered", breakthroughTriggered);
    localStorage.setItem("realmIndex", realmIndex);
    localStorage.setItem("qiThresholdMulti", qiThresholdMulti);
    showMessage("Game Saved", 15000);
  }
/**
 * Loads the game state from local storage, if it exists.
 * Otherwise, updates the UI with default values.
 */
function loadGameState() {
    if (localStorage.getItem("qi") !== null) {
      // if game state exists in local storage, parse values and update variables
      qi = parseInt(localStorage.getItem("qi"));
      qiPerSecond = parseInt(localStorage.getItem("qiPerSecond"));
      qiPerClick = parseInt(localStorage.getItem("qiPerClick"));
      qiThreshold = parseInt(localStorage.getItem("qiThreshold"));
      ssPerSecond = parseInt(localStorage.getItem("ssPerSecond"));
      spiritStones = parseInt(localStorage.getItem("spiritStones"));
      spiritStoneGain = parseInt(localStorage.getItem("spiritStoneGain"));
      qiPerClickBreakthrough = parseInt(localStorage.getItem("qiPerClickBreakthrough"));
      baseQi = parseInt(localStorage.getItem("baseQi"));
      breakthroughTriggered = parseInt(localStorage.getItem("breakthroughTriggered"));
      realmIndex = parseInt(localStorage.getItem("realmIndex"));
      qiThresholdMulti = parseInt(localStorage.getItem("qiThresholdMulti"));
  
      // update UI with loaded game state
      updateQi();
      updateRealmHeader();
      updateSpiritStones();
      updateTable();
      updateBreakthroughButton();
    } else {
      // if no game state exists, update UI with default values
      updateQi();
      updateRealmHeader();
      updateSpiritStones();
      updateTable();
      updateBreakthroughButton();
    }
  }
  