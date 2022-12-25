

function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
   let div=document.getElementById('joke-container');
   let para=document.createElement('p');
   const att = document.createAttribute("class");
   att.value = "joke-text";
   if(data==undefined){
    let node=document.createTextNode('something went wrong');
    para.setAttribute('class','joke-text');
    para.appendChild(node);
    div.appendChild(para);
   }else{
    let node=document.createTextNode(data.value);
    para.setAttribute('class','joke-text');
    para.appendChild(node);
    div.appendChild(para);
   }
   
   
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const movies = await response.json();
 
  return movies;
};

let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${event}`);
  const movies = await response.json();
  return movies;

};
window.onload = async function () {
  // add click event to button
  // add change event to select tag
    document.getElementById('get-category').addEventListener('change',function (){
      
    })
    document.getElementById('get-jokes-data').addEventListener('click',function(){
      let category = document.getElementById('get-category').value;
      if((category.length)>0){
       let result=getJokeByCategory(category);
       try {
        result.then(result=>{
          setJokes(result);
          console.log(result)
        })
       } catch (error) {
        console.error(error)
       }
      }else{
        let result=getRandomJoke();
       try {
        result.then(result=>{
          setJokes(result)
          console.log(result)
        })
       } catch (error) {
        console.error(error)
       }
      }
    })    
      


    
      //  document.getElementById('get-jokes-data').addEventListener('click',function(){
      //    console.log(document.getElementById('get-category').value.length==0);
      // })
    
      //  let res=document.getElementById('get-category').value;
      //  getRandomJoke(res);
      //  console.log(document.getElementById('get-jokes-data').value)
    //}
  
  
};


// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
