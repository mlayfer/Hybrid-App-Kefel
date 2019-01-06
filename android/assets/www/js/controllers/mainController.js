'use strict';
/* Controllers */

appControllers.controller('mainCtrl', ['$scope',
    function ($scope) {
        //properties

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function on_device_ready()
    {
    	document.addEventListener("pause", onPause, false);
    	document.addEventListener("resume", onResume, false);
    }
        document.addEventListener("pause", onPause, false);
        document.addEventListener("resume", onResume, false);

    function onPause() {
        var bg = document.getElementById("bg");
        bg.muted = true;
    }
    function onResume() {
        var bg = document.getElementById("bg");
        bg.muted = false;
    }

        $(".pz1").css("color", "transparent");
        $(".pz2").css("color", "transparent");
        $(".pz3").css("color", "transparent");
        $(".pz4").css("color", "transparent");
        $(".pz5").css("color", "transparent");
        $(".pz6").css("color", "transparent");
        $(".pz7").css("color", "transparent");
        $(".pz8").css("color", "transparent");
        $(".pz9").css("color", "transparent");

        $(".pz1").css("-webkit-text-stroke-color", "transparent");
        $(".pz2").css("-webkit-text-stroke-color", "transparent");
        $(".pz3").css("-webkit-text-stroke-color", "transparent");
        $(".pz4").css("-webkit-text-stroke-color", "transparent");
        $(".pz5").css("-webkit-text-stroke-color", "transparent");
        $(".pz6").css("-webkit-text-stroke-color", "transparent");
        $(".pz7").css("-webkit-text-stroke-color", "transparent");
        $(".pz8").css("-webkit-text-stroke-color", "transparent");
        $(".pz9").css("-webkit-text-stroke-color", "transparent");

        $scope.showAdd = function() {
            admob.requestInterstitialAd({ publisherId: "pub-3635941250247073", interstitialAdId: "ca-app-pub-3635941250247073/6487625463" });
        };
        $scope.mutedbtn = '0';

        $scope.winner = 0;
        $scope.mute = function() {
            var bg = document.getElementById("bg");
            bg.muted = true;
            var blop = document.getElementById("blop");
            blop.muted = true;
            var winner = document.getElementById("winner");
            winner.muted = true;
            var gotPiece = document.getElementById("gotPiece");
            gotPiece.muted = true;
            var wrong = document.getElementById("wrong");
            wrong.muted = true;
            $scope.mutedbtn = '1';
            console.log('is muted: ' + $scope.mutedbtn);
        };
        $scope.unMute = function() {
            var bg = document.getElementById("bg");
            bg.muted = false;
            var blop = document.getElementById("blop");
            blop.muted = false;
            var winner = document.getElementById("winner");
            winner.muted = false;
            var gotPiece = document.getElementById("gotPiece");
            gotPiece.muted = false;
            var wrong = document.getElementById("wrong");
            wrong.muted = false;
            $scope.mutedbtn = '0';
            console.log('is muted: ' + $scope.mutedbtn);
        };

        var currentPicArray = ['lion', 'cat','elephant','girrafe','horse','rabbit'];
        $scope.currentPic = currentPicArray[Math.floor(Math.random() * currentPicArray.length)];
        $scope.currentPoints = 0;
        $scope.puzzle = 0;
        $scope.answer = 0;

        $scope.correctCards = 0;

        $(document).ready(function () {
            $scope.up1 = Math.ceil(Math.random() * 11)-1;
            $scope.up2 = Math.ceil(Math.random() * 11)-1;
            $scope.up3 = Math.ceil(Math.random() * 11)-1;
            while (($scope.up1 == $scope.up2) || ($scope.up1 == $scope.up3) || ($scope.up2 == $scope.up3)) {
                $scope.up1 = Math.ceil(Math.random() * 11)-1;
                $scope.up2 = Math.ceil(Math.random() * 11)-1;
                $scope.up3 = Math.ceil(Math.random() * 11)-1;
            }
            $scope.down1 = Math.ceil(Math.random() * 11)-1;
            $scope.down2 = Math.ceil(Math.random() * 11)-1;
            $scope.down3 = Math.ceil(Math.random() * 11)-1;
            while (($scope.down1 == $scope.down2) || ($scope.down1 == $scope.down3) || ($scope.down2 == $scope.down3)) {
                $scope.down1 = Math.ceil(Math.random() * 11)-1;
                $scope.down2 = Math.ceil(Math.random() * 11)-1;
                $scope.down3 = Math.ceil(Math.random() * 11)-1;
            }

            $scope.ans1 = $scope.up1 * $scope.down1;
            $scope.ans2 = $scope.up2 * $scope.down1;
            $scope.ans3 = $scope.up3 * $scope.down1;
            $scope.ans4 = $scope.up1 * $scope.down2;
            $scope.ans5 = $scope.up2 * $scope.down2;
            $scope.ans6 = $scope.up3 * $scope.down2;
            $scope.ans7 = $scope.up1 * $scope.down3;
            $scope.ans8 = $scope.up2 * $scope.down3;
            $scope.ans9 = $scope.up3 * $scope.down3;

            $scope.random1 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random1 != $scope.up1) && ($scope.random1 != $scope.up2) && ($scope.random1 != $scope.up3)) {
                $scope.random1 = Math.ceil(Math.random() * 11)-1;
            }
            $scope.random2 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random2 != $scope.down1) && ($scope.random2 != $scope.down2) && ($scope.random2 != $scope.down3)) {
                $scope.random2 = Math.ceil(Math.random() * 11)-1;
            }

            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz1").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz5").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz9").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)){
                $(".up2").css("background-color", "red");
                $(".up3").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz2").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz4").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz8").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz6").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)){
                $(".up3").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz3").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz7").css("background-color", "blue");
            }

            $scope.action = '*';
            $scope.answer = $scope.random1 * $scope.random2;
            console.log('the answer is: ' + $scope.answer);
            $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            while ((($scope.randAnswer1 != $scope.answer) && ($scope.randAnswer2 != $scope.answer) && ($scope.randAnswer3 != $scope.answer)) ||
            ($scope.randAnswer1 == $scope.randAnswer2) || ($scope.randAnswer1 == $scope.randAnswer3) || ($scope.randAnswer2 == $scope.randAnswer3)) {
                $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            }
        });

        $scope.randomPrompt = function() {
            $scope.random1 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random1 != $scope.up1) && ($scope.random1 != $scope.up2) && ($scope.random1 != $scope.up3)) {
                $scope.random1 = Math.ceil(Math.random() * 11)-1;
            }
            $scope.random2 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random2 != $scope.down1) && ($scope.random2 != $scope.down2) && ($scope.random2 != $scope.down3)) {
                $scope.random2 = Math.ceil(Math.random() * 11)-1;
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz1").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz5").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz9").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)){
                $(".up2").css("background-color", "red");
                $(".up3").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz2").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz4").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz8").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz6").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)){
                $(".up3").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz3").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz7").css("background-color", "blue");
            }
            $scope.action = '*';
            $scope.answer = $scope.random1 * $scope.random2;
            $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            while ((($scope.randAnswer1 != $scope.answer) && ($scope.randAnswer2 != $scope.answer) && ($scope.randAnswer3 != $scope.answer)) ||
            ($scope.randAnswer1 == $scope.randAnswer2) || ($scope.randAnswer1 == $scope.randAnswer3) || ($scope.randAnswer2 == $scope.randAnswer3)) {
                $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            }
        };

        $scope.checkAnswer = function(userAnswer) {
            if (userAnswer == $scope.random1 * $scope.random2) {
                if($scope.currentPic == 'cat') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/cat/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/cat/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/cat/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/cat/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/cat/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/cat/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/cat/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/cat/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/cat/7.jpg")');
                    }
                }
                if($scope.currentPic == 'lion') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/lion/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/lion/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/lion/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/lion/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/lion/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/lion/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/lion/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/lion/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/lion/7.jpg")');
                    }
                }
                if($scope.currentPic == 'elephant') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/elephant/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/elephant/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/elephant/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/elephant/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/elephant/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/elephant/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/elephant/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/elephant/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/elephant/7.jpg")');
                    }
                }
                if($scope.currentPic == 'girrafe') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/girrafe/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/girrafe/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/girrafe/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/girrafe/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/girrafe/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/girrafe/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/girrafe/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/girrafe/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/girrafe/7.jpg")');
                    }
                }
                if($scope.currentPic == 'horse') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/horse/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/horse/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/horse/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/horse/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/horse/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/horse/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/horse/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/horse/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/horse/7.jpg")');
                    }
                }
                if($scope.currentPic == 'rabbit') {
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)) {
                        $(".pz1").css("color", "white");
                        $(".pz1").css("-webkit-text-stroke-color", "black");
                        $(".pz1").css("background-image", 'url("images/rabbit/1.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)) {
                        $(".pz5").css("color", "white");
                        $(".pz5").css("-webkit-text-stroke-color", "black");
                        $(".pz5").css("background-image", 'url("images/rabbit/5.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)) {
                        $(".pz9").css("color", "white");
                        $(".pz9").css("-webkit-text-stroke-color", "black");
                        $(".pz9").css("background-image", 'url("images/rabbit/9.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)) {
                        $(".pz2").css("color", "white");
                        $(".pz2").css("-webkit-text-stroke-color", "black");
                        $(".pz2").css("background-image", 'url("images/rabbit/2.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)) {
                        $(".pz4").css("color", "white");
                        $(".pz4").css("-webkit-text-stroke-color", "black");
                        $(".pz4").css("background-image", 'url("images/rabbit/4.jpg")');
                    }
                    if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)) {
                        $(".pz8").css("color", "white");
                        $(".pz8").css("-webkit-text-stroke-color", "black");
                        $(".pz8").css("background-image", 'url("images/rabbit/8.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)) {
                        $(".pz6").css("color", "white");
                        $(".pz6").css("-webkit-text-stroke-color", "black");
                        $(".pz6").css("background-image", 'url("images/rabbit/6.jpg")');
                    }
                    if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)) {
                        $(".pz3").css("color", "white");
                        $(".pz3").css("-webkit-text-stroke-color", "black");
                        $(".pz3").css("background-image", 'url("images/rabbit/3.jpg")');
                    }
                    if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)) {
                        $(".pz7").css("color", "white");
                        $(".pz7").css("-webkit-text-stroke-color", "black");
                        $(".pz7").css("background-image", 'url("images/rabbit/7.jpg")');
                    }
                }

                document.getElementById("demo").innerHTML =
                    "<br> נכון מאוד! המשיכו לשאלה הבאה";
                $scope.isRight = true;
                $scope.currentPoints += 1;
            } else {
                document.getElementById("demo").innerHTML =
                    "<br> אוי.. זאת טעות. נסו שנית";
                $scope.isRight = false;
                document.getElementById('wrong').play();
            }
            $scope.random1 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random1 != $scope.up1) && ($scope.random1 != $scope.up2) && ($scope.random1 != $scope.up3)) {
                $scope.random1 = Math.ceil(Math.random() * 11)-1;
            }
            $scope.random2 = Math.ceil(Math.random() * 11)-1;
            while (($scope.random2 != $scope.down1) && ($scope.random2 != $scope.down2) && ($scope.random2 != $scope.down3)) {
                $scope.random2 = Math.ceil(Math.random() * 11)-1;
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down1)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz1").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down2)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz5").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down3)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz9").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down1)){
                $(".up2").css("background-color", "red");
                $(".up3").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz2").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down2)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz4").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up2) && ($scope.random2 == $scope.down3)){
                $(".up2").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down2").css("background-color", "transparent"); $(".down1").css("background-color", "transparent");
                $(".pz8").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down2)){
                $(".up3").css("background-color", "red");
                $(".up1").css("background-color", "transparent");$(".up2").css("background-color", "transparent");
                $(".down2").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down3").css("background-color", "transparent");
                $(".pz6").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up3) && ($scope.random2 == $scope.down1)){
                $(".up3").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up1").css("background-color", "transparent");
                $(".down1").css("background-color", "red");
                $(".down3").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz3").css("background-color", "blue");
            }
            if (($scope.random1 == $scope.up1) && ($scope.random2 == $scope.down3)){
                $(".up1").css("background-color", "red");
                $(".up2").css("background-color", "transparent");$(".up3").css("background-color", "transparent");
                $(".down3").css("background-color", "red");
                $(".down1").css("background-color", "transparent"); $(".down2").css("background-color", "transparent");
                $(".pz7").css("background-color", "blue");
            }

            var color1 = $('.pz1').css('color');
            var color2 = $('.pz2').css('color');
            var color3 = $('.pz3').css('color');
            var color4 = $('.pz4').css('color');
            var color5 = $('.pz5').css('color');
            var color6 = $('.pz6').css('color');
            var color7 = $('.pz7').css('color');
            var color8 = $('.pz8').css('color');
            var color9 = $('.pz9').css('color');

            console.log(color1 + color2 + color3 + color4 + color5 + color6 + color7 + color8 + color9);

            if ((color1 == 'rgb(255, 255, 255)') && (color2 == 'rgb(255, 255, 255)') && (color3 == 'rgb(255, 255, 255)') && (color4 == 'rgb(255, 255, 255)') &&
                (color5 == 'rgb(255, 255, 255)') && (color6 == 'rgb(255, 255, 255)') && (color7 == 'rgb(255, 255, 255)') && (color8 == 'rgb(255, 255, 255)') &&
                (color9 == 'rgb(255, 255, 255)')) {
                console.log("it's blue!\nColor detected: ");
                document.getElementById('winner').play();
                $scope.winner = 1;
                $scope.$apply();
            }
            $scope.action = '*';
            $scope.answer = $scope.random1 * $scope.random2;
            $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
            $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            while ((($scope.randAnswer1 != $scope.answer) && ($scope.randAnswer2 != $scope.answer) && ($scope.randAnswer3 != $scope.answer)) ||
            ($scope.randAnswer1 == $scope.randAnswer2) || ($scope.randAnswer1 == $scope.randAnswer3) || ($scope.randAnswer2 == $scope.randAnswer3)) {
                $scope.randAnswer1 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer2 = Math.ceil(Math.random() * 101)-1;
                $scope.randAnswer3 = Math.ceil(Math.random() * 101)-1;
            }
        };

        $scope.refreshTable = function (page) {
            location.href = "#" + page;
        };
        $scope.goToMain = function () {
            location.href = "#main";
            document.getElementById('bg').play();
        };
        $scope.goToSplash = function () {
            location.href = "#splash";
        };

        // Back handlers
        $scope.back = function (ev) {
            backPressed();
        };
        $scope.$on('backbutton', function () {
            backPressed();
        });
        function backPressed() {
            var bg = document.getElementById("bg");
            bg.muted = true;
            navigator.app.exitApp();
        }
        // Back handlers end
    }]);