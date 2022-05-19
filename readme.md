# Crypto Rain

[Click here to see deployed game](https://github.com/lucacode99/crypto-rain)

## Description
It's 2032 and economy and the world both are at the verge of collapsing. Safe yourself and your beloved ones and use this last chance to collect some bitcoins, the only 
trustworthy currency left out there. Collect 10 Bitcoins and achieve true wealth! But be cautious, if you accidently collect a hideous Shitcoin your wealth will disappear.


## MVP
- Player wants to achieve 10 Bitcoins by moving to the left and right
- Bitcoins and Shitcoins randomly fall from the sky
- Catched cryptocurrrency disappears 
- Player loses his/her life when catching a shitcoin
- The Game includes a restart-function both for sore losers and true winners

## Backlog
- Epic music will accompany seekers of true wealth
- Live-counter of collected Bitcoins
- Add more styles (round coins)

## Data structure

## startGame () {}
- animate() {}
- gameMusic.play();

## loadLosingScreen () {}
- gameMusic.pause() {}
- winningMusic.play() {}

## launchAstronaut () {}
- drawImage () {}

## animate () {}
- launchAstronaut() {}
- blessingOfAMillionBitcoins() {}
- curseOfTooManyShitcoins() {}

## blessingOfAMillionBitcoins() {}
- move () {}
- drawImage () {}

## bitcoin.js
-  move () {}
-  randomStartingPoint() {}

## States y States Transitions
- splashScreen
- gameScreen
- gameOverScreen
- gameWonScreen


## Task
- animate - buildDom
- animate - buildGameScreen
- animate - playGameMusic
- animate - launchAvatar
- animate - launchBitcoins
- animate - launchShitcoins
- animate - checkForVictory
- animate - checkForDefeat
- launchAstronaut - drawAvatar
- launchAstronaut - enableAvatarMovement
- loadWinningScreen - drawWinningScreen
- loadWinningScreen - stopGameMusic
- loadWinningScreen - playWinMusic
- loadWinningScreen - enableGameRestart
- loadLosingScreen - drawLosingScreen
- loadLosingScreen - stopGameMusic
- loadLosingScreen - playDefeatMusic
- loadLosingScreen - enableGameRestart

## Links

- [Github repository Link](https://github.com/lucacode99)
- [Deployment Link](https://lucacode99.github.io/crypto-rain/)

