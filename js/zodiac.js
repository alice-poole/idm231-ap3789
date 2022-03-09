/*Variables*/
//Zodiac character class rune buttons.
const aquBtn = document.getElementById('Aqu');
const pisBtn = document.getElementById('Pis');
const ariBtn = document.getElementById('Ari');
const tauBtn = document.getElementById('Tau');
const gemBtn = document.getElementById('Gem');
const canBtn = document.getElementById('Can');
const leoBtn = document.getElementById('Leo');
const virBtn = document.getElementById('Vir');
const libBtn = document.getElementById('Lib');
const scoBtn = document.getElementById('Sco');
const sagBtn = document.getElementById('Sag');
const capBtn = document.getElementById('Cap');

//Miscellaneous variables.
const character = document.getElementById('character');
const cBtn = document.querySelectorAll('.cButton');
const exploreBtn = document.getElementById('btn-modal-close');
const help = document.getElementById('help');
const helpBtn = document.querySelectorAll('.toggle-help');
const helpOpenBtn = document.getElementById('btn-help-open');
const modal = document.getElementById('modal');
const modalBtn = document.querySelectorAll('.toggle-modal');
const soundButtons = document.querySelectorAll('.soundtrack');
const speakers = document.getElementById('speakers');
const userSubmitBtn = document.getElementById('userSubmit');

/*Event listeners*/
//Zodiac character class rune buttons.
cBtn.forEach(button => {
    const choice = button.dataset.choice;
    button.addEventListener('click', function() {
        userPicked(choice);
        }
    );
});

//Direct explore button resets character choice to default.
exploreBtn.addEventListener('click', function() {
    userPicked('blank');
});

//Help pop-up toggle controls. (Does not fade in, to simulate pop-up window instead.)
helpBtn.forEach(button => {
    button.addEventListener('click', function() {
        help.hidden = !help.hidden;

        helpOpenBtn.hidden = !help.hidden;
      },
      false
    );
});

//Intro screen <---> main screen toggle controls.
modalBtn.forEach(button => {
    button.addEventListener('click', function() {
        modal.hidden = !modal.hidden;
        fadeIn();
      },
      false
    );
});

//Calendar date input & zodiac calculation.
userSubmitBtn.addEventListener('click', function() {

    const userBday = new Date(document.getElementById('bday').value);

    const whichMonth = userBday.getUTCMonth() + 1;

    const whichDayOfMonth = userBday.getUTCDate();
    if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = 'wizard';
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = 'warlock';
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = 'barbarian';
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = 'paladin';
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = 'bard';
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = 'druid';
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = 'sorcerer';
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = 'fighter';
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = 'cleric';
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = 'rogue';
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = 'ranger';
    } else if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = 'monk';
    }
    userPicked(AstroSign);
});

/*Functions*/
//Allows character image fade in upon choice.
function charFadeIn() {
    character.classList.add("blackScreen");
    setTimeout(function(){
        character.classList.remove("blackScreen");
    },500);
}

//Contains specific unique text that changes for each choice which can't be automated.
function charSpecific(choice) { 
    switch (choice) {
        case 'blank':
            document.getElementById("heading").innerHTML = 'Explore';
            document.getElementById("description").innerHTML = 'Choose a rune below.';
        break;
        case 'wizard':
            aquBtn.style.backgroundImage = "url('../img/sym/wizard.jpg')";
            document.getElementById("description").innerHTML = 'The Ponderer. Study the science of magic from ancient tomes and masters. Research new ways to channel arcana. Your knowledge is power. What mysteries will you uncover?';
        break;
        case 'warlock':
            pisBtn.style.backgroundImage = "url('../img/sym/warlock.jpg')";
            document.getElementById("description").innerHTML = 'The Duality. Barter with powerful beings for forbidden power. Harness old magic in new ways with dark pacts. Will your inner life and outer lives shine as one?';
        break;
        case 'barbarian':
            ariBtn.style.backgroundImage = "url('../img/sym/barbarian.jpg')";
            document.getElementById("description").innerHTML = 'The Fury. Channel pure willpower into mighty rage. Walk in the ways of primal power. Your ancestors\' passion echoes through the ages. Will you join them?';
        break;
        case 'paladin':
            tauBtn.style.backgroundImage = "url('../img/sym/paladin.jpg')";
            document.getElementById("description").innerHTML = 'The Unyielding. Stand up for your values in the face of injustice. Protect those who cannot protect themselves. Will you be the light in the darkness?';
        break;
        case 'bard':
            gemBtn.style.backgroundImage = "url('../img/sym/bard.jpg')";
            document.getElementById("description").innerHTML = 'The Beauty. Express yourself through music and art. Perform for all to hear. Inspire others with magical charm. What friendships will you make along the way?';
        break;
        case 'druid':
            canBtn.style.backgroundImage = "url('../img/sym/druid.jpg')";
            document.getElementById("description").innerHTML = 'The Warden. Connect with the magic of nature itself. Seek answers in the ways of beasts and land. Will you preserve the sacred bond to the world around?';
        break;
        case 'sorcerer':
            leoBtn.style.backgroundImage = "url('../img/sym/sorcerer.jpg')";
            document.getElementById("description").innerHTML = 'The Flame. Find the power that\'s inside. Burn your essence to sculpt raw magic in your own way. Shine like the star you are. Will the world hear your roar?';
        break;
        case 'fighter':
            virBtn.style.backgroundImage = "url('../img/sym/fighter.jpg')";
            document.getElementById("description").innerHTML = 'The Expert. Fight with any weapon. Perfect any fighting style. Overcome any obstacle with your unmatched dedication. Will you rise to the challenge?';
        break;
        case 'cleric':
            libBtn.style.backgroundImage = "url('../img/sym/cleric.jpg')";
            document.getElementById("description").innerHTML = 'The Healer. Help others with the power of the divine. Revive broken spirits and fallen heroes. Will your kindness unite others to win the day?';
        break;
        case 'rogue':
            scoBtn.style.backgroundImage = "url('../img/sym/rogue.jpg')";
            document.getElementById("description").innerHTML = 'The Mystery. Lurk in the shadows of the night. Ambush your foes. Steal from the greedy. Hide from great dangers while becoming one yourself. What secrets do you really hide?';
        break;
        case 'ranger':
            sagBtn.style.backgroundImage = "url('../img/sym/ranger.jpg')";
            document.getElementById("description").innerHTML = 'The Explorer. Venture into new frontiers. Go wherever your arrow flies. Befriend animals and strangers in strange new lands. Where will your curiosity take you?';
        break;
        case 'monk':
            capBtn.style.backgroundImage = "url('../img/sym/monk.jpg')";
            document.getElementById("description").innerHTML = 'The Eternal. Align your inner ki to find new strength. Achieve perfection through meditation and training. What challenges will your patience endure?';
        break;
        default:
            console.log('An unknown button was clicked!');
    }
}

//Allows screen fade in on main screen change.
function fadeIn() {
    document.body.classList.add("blackScreen");
    setTimeout(function(){
        document.body.classList.remove("blackScreen");
    },500);
}

//Enables currently active rune to stand out by defaulting others to a different picture.
function resetIcons(){
    aquBtn.style.backgroundImage = "url('../img/sym/wizard.png')";
    pisBtn.style.backgroundImage = "url('../img/sym/warlock.png')";
    ariBtn.style.backgroundImage = "url('../img/sym/barbarian.png')";
    tauBtn.style.backgroundImage = "url('../img/sym/paladin.png')";
    gemBtn.style.backgroundImage = "url('../img/sym/bard.png')";
    canBtn.style.backgroundImage = "url('../img/sym/druid.png')";
    leoBtn.style.backgroundImage = "url('../img/sym/sorcerer.png')";
    virBtn.style.backgroundImage = "url('../img/sym/fighter.png')";
    libBtn.style.backgroundImage = "url('../img/sym/cleric.png')";
    scoBtn.style.backgroundImage = "url('../img/sym/rogue.png')";
    sagBtn.style.backgroundImage = "url('../img/sym/ranger.png')";
    capBtn.style.backgroundImage = "url('../img/sym/monk.png')";
}

//Controls all image, sound, and text changes upon new choice.
function userPicked(choice){
    resetIcons();
    speakers.src = `../sound/${choice}.wav`;
    speakers.play();
    charFadeIn();
    character.src = `../img/char/${choice}.png`;
    document.getElementById("heading").innerHTML = `${choice}`;
    charSpecific(choice);
}