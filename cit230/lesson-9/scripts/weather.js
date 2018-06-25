var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var towns = request.response;
  townInfo(towns);
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



