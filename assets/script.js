const topics = ['HTML' , 'CSS' , 'Git' , 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];


function liisttopics() {
    for(let x = 0; x < topics.length; x++) {
     console.log(topics[x]);
    }
}

function selecttopic(){
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  }else if ( randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if ( randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if ( randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
    }
 }


console.log('Here are the topics we learned through Prework:');
liisttopics();
console.log('Which topic should we study first?');
selecttopic();