var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var towns = request.response;
  townInfo(towns);
  /*populateHeader(superHeroes);*/
  /*showHeroes(superHeroes);*/
}

function townInfo(jsonObj){
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++){
        if (i != 2){
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var para1 = document.createElement('p');
            var para2 = document.createElement('p');
            var para3 = document.createElement('p');
            var para4 = document.createElement('p');
            var myList = document.createElement('ul')
            
            myH2.textContent = towns[i].name;
            myH3.textContent = towns[i].motto;
            para1.textContent = 'Founded: ' + towns[i].yearFounded;
            para2.textContent = 'Population: ' + towns[i].currentPopulation;
            para3.textContent = 'Avg. Rainfall: ' + towns[i].averageRainfall + '\'\'';
            para4.textContent = 'Events: ';
            
            events = towns[i].events;
            for (var j = 0; j < events.length; j++){
                var listItem = document.createElement('li');
                listItem.textContent = events[j];
                myList.appendChild(listItem);
            }
            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myH3);
            myArticle.appendChild(para1);
            myArticle.appendChild(para2);
            myArticle.appendChild(para3);
            myArticle.appendChild(para4);
            myArticle.appendChild(myList);
            
            section.appendChild(myArticle);
        }
    }
    
}



/*function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['towns'];
  section.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}*/

/*function showTowns(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}*/