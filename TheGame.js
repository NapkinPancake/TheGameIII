function getTheNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
////////////////////////////////////////////////////////////////////

let answer
let levelPoints

function setLvl() {
    if (lvl.value == "Easy") {
        answer = getTheNumber(1, 10);
        levelPoints = 10;
        answerField.placeholder = "Нумерочок від 1 до 10"
        console.log(answer);
    } else if (lvl.value == "Medium") {
        answer = getTheNumber(1, 30);
        answerField.placeholder = "Нумерочок від 1 до 30"
        levelPoints = 30;
        console.log(answer)
    } else if (lvl.value == "Hard") {
        answer = getTheNumber(1, 50);
        answerField.placeholder = "Нумерочок від 1 до 50";
        levelPoints = 50;
        console.log(answer)
    } else {

    }
}
////////////////////////////////////////////////////////////////////

var result
var usersNumber
var tryNumber = 0
var games = 0
var victories = 0
var button1 = document.getElementById("pushOne")
var textField = document.getElementById("try1")
var readonlyField = document.getElementById("answer1")
var answerField = document.getElementById("try1")
var attempt = document.getElementById("try1")

let rating

function getValue() {
    usersNumber = attempt.value;
    if (usersNumber == 0) {
        readonlyField.value = "Ні, ну хоч щось введи";
        answerField.value = "";
        result = "0";
    } else if (usersNumber == answer) {
        readonlyField.value = "Вітаннячка!";
        answerField.value = "";
        result = "=";
        victories += 1;
        document.getElementById("WinForm").style.display = "block";
        games += 1;
        creatingRait();
        NameAndRait();
    } else if ((3 * usersNumber) < answer) {
        readonlyField.value = "То зовсім мало!";
        answerField.value = "";
        result = ">";
    } else if ((2 * usersNumber) < answer) {
        readonlyField.value = "Бери більше";
        answerField.value = "";
        result = ">";
    } else if (usersNumber < answer) {
        readonlyField.value = "Ще більше";
        answerField.value = "";
        result = ">";
    } else if ((3 * usersNumber) > answer) {
        readonlyField.value = "Ти диви - розігнавсь!";
        answerField.value = "";
        result = "<";
    } else if ((2 * usersNumber) > answer) {
        readonlyField.value = "Ну що ви - менше!";
        answerField.value = "";
        result = "<";
    } else if (usersNumber > answer) {
        readonlyField.value = "Ще трішки менше!";
        answerField.value = "";
        result = "<";
    } else if (usersNumber !== answer) {
        readonlyField.value = "Пане, я Вас прошу!";
        answerField.value = "";
        result = "Розумник знайшовся";
    } else {
        readonlyField.value = "My hata is in the border, i dont't  know nothing";
        answerField.value = "";
    }
}

function triesCounter() {
    tryNumber += 1;
}

function UserTry() {
    this["Number of try"] = tryNumber,
        this["Users Variant"] = usersNumber,
        this.Result = result
}



function savingResulsts() {
    let userTries = new UserTry()
    //console.log(userTries)
    BigBase.push(userTries)
    console.log(BigBase)
}

let BigBase = []

//var liedershipTable

function raunds() {
    if (BigBase.length >= 10) {
        document.getElementById("answer1").value = "Шкода, але відповідь " + answer;
        button1.disabled = true;
        textField.disabled = true;
        NameAndRait();
        saveRait();

    } else if (usersNumber == answer) {
        button1.disabled = true;
        textField.disabled = true;
    } else {

    }
}



function theNewBeginning() {
    button1.disabled = false;
    textField.disabled = false;
    getTheNumber(1, 10);
    answer = getTheNumber(1, 10);
    BigBase.length = 0;
    document.getElementById("WinForm").style.display = "none";

}

//=====================================================================================================================
//=====================================================================================================================

let username = document.getElementById("Username");
let button2 = document.getElementById("resetButt");
let lvl = document.getElementById("lvl");

let ThatsTable

$(document).ready(function () {
    (() => setTimeout($('#overlay').css('display', 'block'), 2000));
    let try1Disabled = $("#try1").prop({ disabled: true })
    let pushOneDisabled = $("#pushOne").prop({ disabled: true })
    let resetButtDisabled = $("#resetButt").prop({ disabled: true })

    $('#LiederShipTable').fadeOut()

    $("#nameButt").click(function () {
        addRait = new NameAndRait();
        liedershipTable.push(addRait);

        games = 0;
        rating = 0;
        tryNumber = 0;
        raitSum = []
    })
    $("#lvl").click(function () {
        setLvl();
    })
    $("#pushOne").click(function () {
        $('#name').prop({ disabled: true })
        if (usersNumber == answer) {
            console.log(username.value + ":" + FinalRait);
            console.log(typeof FinalRait);
            $('#LiederShipTable').prepend('<h5>' + username.value + ":" + FinalRait.toFixed(1) + '</h5>')
            $('#LiederShipTable').fadeIn(750);
        }
    })
    $("#resetButt").click(function () {
        $('#name').prop({disabled: false})
        console.log(answer)
        function OneAfterAnother() {
            $('#LiederShipTable').fadeOut(750);
            function Empty() {
                $('#LiederShipTable').empty();
            }
            setTimeout(Empty, 1000)
        }
        OneAfterAnother()
        
    })
    $(window).on('unload', function () {
        function saveRait() {
            addRait = new NameAndRait();
            liedershipTable.push(addRait);
            CodedRait = JSON.stringify(liedershipTable);
            localStorage.setItem("rating", CodedRait);
            try1Disabled;
        }
        saveRait();
    })

    $('#name').click(() =>
        $('#overlay').css('display', 'block'))
    $('#overlayButt').click(() => {
        if (username.value.length == 0) {
            $('#Username').css({'border-color': 'darkred', 'padding':'5px', 'border-style': ' solid '})
            return false;
        } else {
            $('#Username').css({'border-color': 'none', 'padding':'none', 'border-style': 'none '})
            $("#Username").prop({ disabled: false })
            $("#try1").prop({ disabled: false })
            $("#pushOne").prop({ disabled: false })
            $("#resetButt").prop({ disabled: false })
            $('#overlay').css('display', 'none')
            setLvl();
        }
    })
})



if (username.value.length == 0) {
    textField.disabled = true;
    button1.disabled = true;
    button2.disabled = true;


}


function blockTheName() {
    if (username.value.length > 0) {
        username.disabled = true;
    }
}

function unblockTheName() {
    username.disabled = false;
}

function NameAndRait() {
    this[username.value] = FinalRait;
}


let liedershipTable = []
let CodedRait
let addRait = new NameAndRait();
let content1
let raitSum = []

var sum = 0;
var FinalRait

function creatingRait() {
    rating = levelPoints / tryNumber
    raitSum.push(rating);
    function summingUp(array) {
        sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }
    summingUp(raitSum);
    FinalRait = sum / games;
    tryNumber = 0;
}
