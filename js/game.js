var Coin = require('./coin.js');
var Furry = require('./furry.js');

function Game () {
    this.board = document.querySelectorAll("#board div");
    var furry = new Furry();
    var coin = new Coin();
    var score = 0;
    this.index = function (x, y) {
        return x + (y * 10);
    };
    this.showFurry = function () {
        this.board[this.index(furry.x, furry.y)].classList.add('furry');
    };
    this.showCoin = function () {
        return this.board[this.index(coin.x, coin.y)].classList.add('coin');
    };
    this.hideFurry = function () {
        document.querySelector(".furry").classList.remove('furry');
    };

    this.checkCoin = function () {
        if (furry.x === coin.x && furry.y === coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            score++;
            document.querySelector('#score strong').innerText = score;
            coin = new Coin();
            this.showCoin();
        }
    };

    var self = this;
    this.moveFurry = function () {
        if (furry.direction === "right") {
            furry.x = furry.x + 1;
        }
        else if (furry.direction === "left") {
            furry.x = furry.x - 1;
        }
        else if (furry.direction === "up") {
            furry.y = furry.y - 1;
        }
        else if (furry.direction === "down") {
            furry.y = furry.y + 1;
        }
        self.gameOver();
        self.hideFurry();
        self.showFurry();
        self.checkCoin();
    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                furry.direction = "left";
                break;
            case 38:
                furry.direction = "up";
                break;
            case 39:
                furry.direction = "right";
                break;
            case 40:
                furry.direction = "down";
                break;
        }
    };

    this.gameOver = function () {
        if (furry.x < 0 || furry.y < 0 || furry.x > 9 || furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideFurry();
            var over = document.querySelector('#over');
            var end = document.createElement("div");
            var end1 = document.createElement("div");
            over.classList.remove("invisible");
            over.appendChild(end);
            over.appendChild(end1);
            over.style.display = "flex";
            over.style.justifyContent = "center";
            over.style.alignItems = "center";
            over.style.flexDirection = "column";
            end.innerText = "Game Over \n";
            end.style.fontSize = "50px";
            end.style.color = "red";
            end1.innerText = score+" points";
            return score;

        }

    };

    this.startGame = function () {
        this.idSetInterval = window.setInterval(function () {
            self.moveFurry();
        }, 250);
    };
}

module.exports = Game;
