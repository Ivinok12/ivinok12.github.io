//Declaring Variables
//Qi Variables
let player = {
  name: "player",
  qi: 0,
  qiPerClick: 1,
  qiPerSecond: 0,
  qiThreshold: 100,
  qiPerClickBreakthrough: 2,
  baseQi: 1,
  spiritStones: 0,
  spiritStoneGain: 1,
  ssPerSecond: 0,
  breakthroughTriggered: false,
  realmIndex: 0,
  qiThresholdMulti: 3,
  sgaPrice: 25,
  sgaMulti: 1.2, //Simple gathering array multiplier
  sgaOwned: 0, //Simple gathering array
  mPrice: 50,
  mPriceMulti: 1.2, //Multiplier for mprice
  mOwned: 0,

}

//Loads saved values and updates on screen text to reflect that
window.onload = loadGameState;

//Saves game before unload
window.onbeforeunload = saveGameState;

//Autosave
setInterval(saveGameState, 30000)

//Persecond Interval
setInterval(perSecond, 1000);

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
    
//Main Currency displayer
const qiDisplay = document.getElementById("qi");
const spiritStonesDisplay = document.getElementById("spiritStones");

//Main Buttons
const cultivateQiButton = document.getElementById("cultivateQi");
const gatherSpiritStonesButton = document.getElementById("gatherSpiritStones");
const breakthroughButton = document.getElementById("breakthrough");

const messages = document.getElementById("messages");

const realmHeader = document.getElementById("realmHeader");
//Shop DOM elements
const sgaPriceTxt = document.getElementById("SGA-Price");
const sgaBtn = document.getElementById("SGA-Btn");
const mPriceTxt = document.getElementById("M-Price");

//Stats DOM elements
const qiPerSecondEl = document.getElementById("qi-per-sec");
const qiNeededEl = document.getElementById("qi-needed");
const qiPerClickEl = document.getElementById("qi-per-click");
const ssPerClickEl = document.getElementById("ss-per-click");
const ssPerSecondEl = document.getElementById("ss-per-sec");

//Event listeners
cultivateQiButton.addEventListener("click", cultivateQi);
gatherSpiritStonesButton.addEventListener("click", gatherSpiritStones);
breakthroughButton.addEventListener("click", breakthrough);
sgaBtn.addEventListener("click", buySGA);

//Update functions for text
function updateUI() {
    //Update main currency display
    spiritStonesDisplay.innerHTML = `Spirit Stones: ${player.spiritStones}`;
    qiDisplay.innerHTML = `Qi: ${player.qi}`;
    // Update stats table text
    qiPerSecondEl.textContent = player.qiPerSecond;
    qiNeededEl.textContent = player.qiThreshold;
    qiPerClickEl.textContent = player.qiPerClick;
    ssPerClickEl.textContent = player.spiritStoneGain;
    ssPerSecondEl.textContent = player.ssPerSecond;
    //Update realm header
    const realm = realms[player.realmIndex];
    realmHeader.innerHTML = `Current Realm: ${realm}`;
    //Update Shop DOM elements
    sgaPriceTxt.innerHTML = player.sgaPrice;
    mPriceTxt.innerHTML = player.mPrice;
}

//Function for breakthrough button
function updateBreakthroughButton(){
    if (player.qi >= player.qiThreshold) {
      breakthroughButton.style.backgroundColor = "green";
      breakthroughButton.disabled = false;
    } else {
      breakthroughButton.style.backgroundColor = "lightcoral";
      breakthroughButton.disabled = true;
    }
  }
updateBreakthroughButton();

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
  player.qi += player.qiPerClick;
  updateUI();
  updateBreakthroughButton()
  if (player.qi >= player.qiThreshold) {
    cultivateQiButton.disabled = true;
    showMessage("You have enough Qi to trigger a breakthrough.", 25000);
  }
}

//Spirit Stone Function
function gatherSpiritStones() {
    player.spiritStones += player.spiritStoneGain;
    updateUI();
  }
  
  //Breakthrough function
  function breakthrough() {
    if (player.qi >= player.qiThreshold) { // makes sure you have the required amount of Qi for breakthrough
      player.qiThreshold *= player.qiThresholdMulti; //Increases Qi Requirement every breakthrough
      player.qiPerClick *= player.qiPerClickBreakthrough; //Increases Qi Increase every breakthrough
      player.qi = player.baseQi;
      player.breakthroughTriggered = false;
      player.realmIndex++;
      breakthroughButton.disabled = true;
      breakthroughButton.style.backgroundColor = "lightcoral";
      cultivateQiButton.disabled = false;
      updateUI();
      showMessage("Congratulations! You have achieved a breakthrough! You Qi rate has doubled and your Qi has been condensed", 15000);
    } else {
      showMessage(`You need at least ${player.qiThreshold} Qi to trigger a breakthrough. You currently have ${player.qi} Qi.`, 15000);
    }
  }

//Save game state to local storage
  function saveGameState() {
    let playerJSON = JSON.stringify(player);
    localStorage.setItem("player", playerJSON);
    showMessage("Game Saved", 15000);
  }

//Loads the game state from local storage, if it exists. Otherwise, updates the UI with default values.
function loadGameState() {
    const DEFAULT_STATS = {
      name: "player",
      qi: 0,
      qiPerClick: 1,
      qiPerSecond: 0,
      qiThreshold: 100,
      qiPerClickBreakthrough: 2,
      baseQi: 1,
      spiritStones: 0,
      spiritStoneGain: 1,
      ssPerSecond: 0,
      breakthroughTriggered: false,
      realmIndex: 0,
      qiThresholdMulti: 3,
      sgaPrice: 25,
      sgaMulti: 1.2, //Simple gathering array multiplier
      sgaOwned: 0, //Simple gathering array
      mPrice: 50,
      mPriceMulti: 1.2, //Multiplier for mprice
      mOwned: 0,
 
    }
    gamestate = JSON.parse(localStorage.getItem("player"));
    if (gamestate === null) {
      updateUI();
      updateBreakthroughButton();
    } else{
      for(let stat in DEFAULT_STATS){
        if(!gamestate.hasOwnProperty(stat)){
        player[stat] = DEFAULT_STATS[stat];
        }
        player = gamestate;
        updateUI();
      }
    }
    
  }
function buySGA(){
  if (player.spiritStones >= player.sgaPrice){
    player.spiritStones -= player.sgaPrice;
    player.sgaOwned++;
    player.sgaPrice *= player.sgaMulti;
    updateUI();
  }
}
//Main per second function
function perSecond(){
  console.log("Function ran");
  if(player.qi <= player.qiThreshold){
    player.qiPerSecond = player.sgaOwned;
    console.log(player.qiPerSecond);
    player.qi += player.qiPerSecond;
  }
  player.spiritStones += player.ssPerSecond;
  player.ssPerSecond = player.mOwned;
  updateUI();
}
