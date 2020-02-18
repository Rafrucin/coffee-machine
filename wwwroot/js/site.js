// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


lock = false
$('#drink').on('click', function (e) { MakeDrink(e); });

function MakeDrink(n) {


    if (lock == false) {
        lock = true;
        if ($(n.target).hasClass('lemonTea')) {

            LemonTea();
        }
        if ($(n.target).hasClass('coffee')) {

            Coffee();
        }
        if ($(n.target).hasClass('chocolate')) {

            Chocolate();

        }

    }
}



function LemonTea() {
    $('#result').html("Making Lemon Tea");
    BoilWater();
    setTimeout(function () { SteepWater() }, 3000);
    setTimeout(function () { PourIn() }, 6000);
    setTimeout(function () { AddLemon() }, 9000);
    setTimeout(function () { DrinkReady() }, 11000);
    setTimeout(function () { lock = false }, 11000);
}

function Coffee() {
    $('#result').html("Making Coffee");
    BoilWater();
    setTimeout(function () { BrewCoffee() }, 3000);
    setTimeout(function () { PourIn() }, 6000);
    setTimeout(function () { AddSugar() }, 9000);
    setTimeout(function () { DrinkReady() }, 11000);
    setTimeout(function () { lock = false }, 11000);
}

function Chocolate() {
    $('#result').html("Making Hot Cholate");
    BoilWater();
    setTimeout(function () { AddChoco() }, 3000);
    setTimeout(function () { PourIn() }, 6000);
    setTimeout(function () { DrinkReady() }, 8000);
    setTimeout(function () { lock = false }, 8000);

}

function DrinkReady() {
    $('#result').html("Your drink is ready.");
    $('#action').html("Enjoy!");
}

function BoilWater() {
    $('#action').html("Boiling water...");

}

function PourIn() {
    $('#action').html("Pouring your drink...");
}

function SteepWater() {
    $('#action').html("Steeping water in the tea...");
}

function AddLemon() {
    $('#action').html("Adding lemon...");
}

function BrewCoffee() {
    $('#action').html("Brewing coffee...");
}

function AddSugar() {
    $('#action').html("Adding sugar and milk...");
}

function AddChoco() {
    $('#action').html("Adding drinking chocolate...");
}