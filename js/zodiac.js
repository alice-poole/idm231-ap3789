const soundButtons = document.querySelectorAll('.soundtrack');
const speakers = document.getElementById('speakers');
const modal = document.getElementById('modal');
const modalBtn = document.querySelectorAll('.toggle-modal');
const exploreBtn = document.getElementById('btn-modal-close');
const userSubmitBtn = document.getElementById('userSubmit');
const character = document.getElementById('character');
const cBtn = document.querySelectorAll('.cButton');
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

userSubmitBtn.addEventListener('click', function() {

    const userBday = new Date(document.getElementById('bday').value);

    const whichMonth = userBday.getUTCMonth() + 1;

    const whichDayOfMonth = userBday.getUTCDate();
    // Zodiac Algorithm
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

exploreBtn.addEventListener('click', function() {
    userPicked('blank');
});

modalBtn.forEach(button => {
    button.addEventListener('click', function() {
        modal.hidden = !modal.hidden;
        fadeIn();
      },
      false
    );
  });

cBtn.forEach(button => {
    const choice = button.dataset.choice;
    button.addEventListener('click', function() {
        userPicked(choice);
        }
    );
});

function fadeIn() {
    document.body.classList.remove("blackScreen");
}

function slideIn() {
    character.classList.remove("slide");
    setTimeout(function(){
        character.classList.add('slide');
    },100);
}

function userPicked(choice){
    resetIcons();
    speakers.src = `../sound/${choice}.mp3`;
    speakers.play();
    slideIn();
    character.src = `../img/char/${choice}.png`;
    document.getElementById("heading").innerHTML = `${choice}`;
    charSpecific(choice);
}

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

function charSpecific(choice) { 
    switch (choice) {
        case 'blank':
            document.getElementById("heading").innerHTML = 'Explore';
            document.getElementById("description").innerHTML = 'Choose a rune below.';
        break;
        case 'wizard':
            aquBtn.style.backgroundImage = "url('../img/sym/wizard.jpg')";
            document.getElementById("description").innerHTML = 'The Ponderer. You will uncover life\'s deepest mysteries.';
        break;
        case 'warlock':
            pisBtn.style.backgroundImage = "url('../img/sym/warlock.jpg')";
            document.getElementById("description").innerHTML = 'The Duality. Your inner and outer worlds will shine together.';
        break;
        case 'barbarian':
            ariBtn.style.backgroundImage = "url('../img/sym/barbarian.jpg')";
            document.getElementById("description").innerHTML = 'The Fury. Nothing can stop your mighty passion.';
        break;
        case 'paladin':
            tauBtn.style.backgroundImage = "url('../img/sym/paladin.jpg')";
            document.getElementById("description").innerHTML = 'The Unyielding. You are the light in the darkness.';
        break;
        case 'bard':
            gemBtn.style.backgroundImage = "url('../img/sym/bard.jpg')";
            document.getElementById("description").innerHTML = 'The Beauty. Your joy makes you a friend to all.';
        break;
        case 'druid':
            canBtn.style.backgroundImage = "url('../img/sym/druid.jpg')";
            document.getElementById("description").innerHTML = 'The Ponderer. You connect us all to the world around.';
        break;
        case 'sorcerer':
            leoBtn.style.backgroundImage = "url('../img/sym/sorcerer.jpg')";
            document.getElementById("description").innerHTML = 'The Flame. The world will hear you roar.';
        break;
        case 'fighter':
            virBtn.style.backgroundImage = "url('../img/sym/fighter.jpg')";
            document.getElementById("description").innerHTML = 'The Expert. Your dedication is unmatched.';
        break;
        case 'cleric':
            libBtn.style.backgroundImage = "url('../img/sym/cleric.jpg')";
            document.getElementById("description").innerHTML = 'The Healer. Your kindness brings people together.';
        break;
        case 'rogue':
            scoBtn.style.backgroundImage = "url('../img/sym/rogue.jpg')";
            document.getElementById("description").innerHTML = 'The Mystery. What secrets do you really hide?';
        break;
        case 'ranger':
            sagBtn.style.backgroundImage = "url('../img/sym/ranger.jpg')";
            document.getElementById("description").innerHTML = 'The Explorer. Your curiosity will take you far.';
        break;
        case 'monk':
            capBtn.style.backgroundImage = "url('../img/sym/monk.jpg')";
            document.getElementById("description").innerHTML = 'The Eternal. Your patience will conquer any mountain.';
        break;
        default:
            console.log('An unknown button was clicked!');
    }
}