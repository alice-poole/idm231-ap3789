function fade2Content() {
    console.log('fade2Content called');
    document.body.classList.remove("blackScreen");
}

const displayObj = document.getElementById('display');

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

aquBtn.addEventListener('click', function() {
    userPicked('Aqu');
});

pisBtn.addEventListener('click', function() {
    userPicked('Pis');
});

ariBtn.addEventListener('click', function() {
    userPicked('Ari');
});

tauBtn.addEventListener('click', function() {
    userPicked('Tau');
});

gemBtn.addEventListener('click', function() {
    userPicked('Gem');
});

canBtn.addEventListener('click', function() {
    userPicked('Can');
});

leoBtn.addEventListener('click', function() {
    userPicked('Leo');
});

virBtn.addEventListener('click', function() {
    userPicked('Vir');
});

libBtn.addEventListener('click', function() {
    userPicked('Lib');
});

scoBtn.addEventListener('click', function() {
    userPicked('Sco');
});

sagBtn.addEventListener('click', function() {
    userPicked('Sag');
});

capBtn.addEventListener('click', function() {
    userPicked('Cap');
});

function userPicked(buttonName) {
    console.log('User picked ' + buttonName);

    switch (buttonName) {
        case 'Aqu':
            displayObj.src = '../img/char/wizard.png';
            displayObj.classList.add('visible');
        break;
        case 'Pis':
            displayObj.src = '../img/char/warlock.png';
        break;
        case 'Ari':
            displayObj.src = '../img/char/barbarian.png';
        break;
        case 'Tau':
            displayObj.src = '../img/char/paladin.png';
        break;
        case 'Gem':
            displayObj.src = '../img/char/bard.png';
        break;
        case 'Can':
            displayObj.src = '../img/char/druid.png';
        break;
        case 'Leo':
            displayObj.src = '../img/char/sorcerer.png';
        break;
        case 'Vir':
            displayObj.src = '../img/char/fighter.png';
        break;
        case 'Lib':
            displayObj.src = '../img/char/cleric.png';
        break;
        case 'Sco':
            displayObj.src = '../img/char/rogue.png';
        break;
        case 'Sag':
            displayObj.src = '../img/char/ranger.png';
        break;
        case 'Cap':
            displayObj.src = '../img/char/monk.png';
        break;
        default:
            console.log('An unknown button was clicked!');
    }

}

//
// Calendar input code
//

const userSubmitBtn = document.getElementById('userSubmit');

// add Event Listener
userSubmitBtn.addEventListener('click', function() {
    //console.log('Submit button clicked!');

    const usersFirstName = document.getElementById('name').value;
    //console.log('Users name is: ' + usersFirstName);

    const userBday = new Date(document.getElementById('bday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});