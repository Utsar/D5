// Excercise A

let test = "This is string"

console.log(test)

// Excercise B

let sum = 10+20

console.log(sum)

// Excercise C

let random = Math.random()*20

console.log(random)

// Excerise D

let me = {
    name: "Kristian",
    surname: "Utsar",
    age: "32"
}

console.log(me)

// Excerise E

delete me.age

console.log(me)

// Excerise F

let mySkills = ["Beer drinking", "Netflix binging"]

me.skills = mySkills

console.log(me)

// Excerise G

delete me.skills.pop()

console.log(me)

// Excerise 1

const dice = function(){
    let randomNum = Math.random()*6
    return Math.floor(randomNum)
}
dice()
console.log(dice())

// Excerise 2

const whoIsBigger = function(n1,n2) {
    if (n1>n2) 
    {return n1}
    else {return n2}    
}
console.log(whoIsBigger(1,2))

// Excerise 3

const splitMe = function(str) {
    return str.split(" ")   
}
console.log(splitMe("Hello world how are you?"))

// Excerise 4

// const deleteOne = function (str1, b) {
//     if (a === true){
//         str1.split("").splice([0]).join("")
//     }
//     else{str1.split("").splice([-1].join(""))}
// }
// console.log(deleteOne("Hello",a))

// Excerise 5

const onlyLetters = function (str2) {
    return str2.replace(/\d+/g, "")     
}
console.log(onlyLetters("Hello my age is 24, is your are 32?"))  

// Excerise 6

const isThisAnEmail = function (str3) {
    return str3.includes("@")    
}

console.log(isThisAnEmail("Kristian@Utsar"))
console.log(isThisAnEmail("KristianUtsar"))

// Excerise 7

const whatDayIsIt = function (date) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = date.getDay()
    return weekdays[day]}
console.log(whatDayIsIt())

// Excerise 8

// const rollTheDices = function (num) {
//     let myObject = {
//         sum:{},
//         values:[],
//     }
//     num = dice()
    
// }
// console.log(rollTheDices(3))

// Excerise 9

// const howManyDays = function (anydate) {
//     let 
    
// }

// Excerise 10

const isTodayMyBirthday = function () {
    let myBDay = Date(1988,09,25)
    let toDay = Date()
    return myBDay === toDay
    }
console.log(isTodayMyBirthday())

// Excerise 11


const deleteProp = function (str,) {
    
}

// Excerise 12
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]



//   Excercise 13

const countMovies = function () {
    return movies.length
}
console.log(countMovies())

//   Excercise 14
let myArray = []
const onlyTheTitles = function () {
    for (i in movies.length){
        myArray.push(movies.Title)
    }
    return
    
}
onlyTheTitles()
console.log(myArray)

//   Excercise 15

