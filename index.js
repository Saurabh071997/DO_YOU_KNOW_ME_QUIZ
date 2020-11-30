// https://repl.it/@saurabhkamboj/DOYOUKNOWME?embed=1&output=1

// https://repl.it/@saurabhkamboj/DOYOUKNOWME#index.js

var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log('Hi !!');
var userName = readlineSync.question('Please provide your name to continue with the game : ');

console.log('Hi '+userName+',\n\n\n');
console.log('Welcome to '+chalk.yellow.bold(' DO YOU KNOW ME ?\n\n\n'));
console.log('Let\'s see how much you know about '+chalk.blue.bold('Saurabh ')+'??\n');
console.log(chalk.cyanBright('=============================================================================='));
console.log(chalk.magenta('Guide'));
console.log(chalk.magenta('> There are multiple choice questions'));
console.log(chalk.magenta('> Choose the anser from options given below by selecting any of the keys from 1,2,3,4\n\n'));
console.log(chalk.cyanBright('=============================================================================='));
console.log(chalk.greenBright.bold('\n\nGood Luck !!\n\n'));
console.log(chalk.cyanBright('=============================================================================='));



var questionBank = [
  {
    question : 'When is my BirthDay ??',
    options : ['Dec 7, 1997', 'Dec 4, 1997','Dec 10,1997','Dec 11, 1997'],
    answer :'Dec 7, 1997'
  },
  {
    question : 'Where Do I Live ?',
    options : ['Yamunanagar, Haryana', 'Ambala, Haryana', 'Karnal, Haryana','Kurukshetra, Haryana'],
    answer : 'Yamunanagar, Haryana'
  },
  {
    question :  'From which school did I completed my schooling ?',
    options : ['Swami Vivekanand Public School' ,'Sant Nischal Public School','Sacred Heart Public School', 'SpringFields Public School'],
    answer : 'Swami Vivekanand Public School'
  },
  {
    question : 'From where did I completed my graduation ?',
    options : ['Thapar University', 'Chandigarh University', 'Lovely Professional University','Chitkara University'],
    answer : 'Lovely Professional University'
  },
  {
    question : 'Which of the school teams was I a part of ?',
    options : ['Cricket','VolleyBall','Tennis','Badminton'],
    answer : 'VolleyBall'
  },
  {
    question : 'Which department did I belonged to in high-school ?',
    options : ['Medical','Non-Medical','Arts & Humanities','Commerce'],
    answer : 'Non-Medical'
  },
  {
    question : 'What were my majors during my graduation ?',
    options : ['Information Technology','Computer Science','Electronics and Communication','Mechanical'],
    answer : 'Computer Science' 
  },
  {
    question : 'What kind of movies do I prefer ?',
    options : ['Comedy', 'Science Fiction', 'Thrillers', 'Horror'],
    answer : 'Thrillers'
  },
  {
    question : 'Can you guess my favourite television series ?',
    options : ['Breaking Bad', 'Game Of Thrones', 'The Office', 'Brooklyn 99'],
    answer : 'The Office'
  }
]


function displayQuestion(questionObj){
  console.log(chalk.magentaBright.bold(questionObj.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+questionObj.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\nChoose your Answer : ', {limit: '$<1-4>'});

  var userAnswer = questionObj.options[index - 1];
  if(userAnswer === questionObj.answer){
    console.log(chalk.bgGreen.black.bold('\nCorrect\n'));
    score = score +2;
  }
  else{
    console.log(chalk.bgRed.black.bold('\nWrong Answer\n'));
  }
}

for(var i =0;i< questionBank.length ;i++){
  displayQuestion(questionBank[i]);
  console.log(chalk.cyanBright('=============================================================================='));
}

 console.log(chalk.cyanBright('==============================================================================')); 
console.log(chalk.yellow.bold('\n\n Final Score : ', score+'\n\n'));
if(score === 18){
  console.log(chalk.green.bold('Congratulations !!!! \n\n You Answered All Questions Correct \n'));
  console.log(chalk.yellow.bold('You DO KNOW ME !!!'));
}

 console.log(chalk.cyanBright('=============================================================================='));