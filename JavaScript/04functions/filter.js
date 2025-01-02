const arr = [1, 5, 8, 7, 9, 3]

const result = arr.filter((item) => {         //this is used for performing some oper on specific values
    return item > 3
})
console.log(result)

const books = [
    {
        title: "To the Stars",
        genre: "Science Fiction",
        publishDate: 2020
    },
    {
        title: "Mystery at Ravenwood",
        genre: "Mystery",
        publishDate: 2018
    },
    {
        title: "Love in the Mountains",
        genre: "Romance",
        publishDate: 2021
    },
    {
        title: "Echoes of Eternity",
        genre: "Fantasy",
        publishDate: 2019
    },
    {
        title: "The Forgotten War",
        genre: "Historical Fiction",
        publishDate: 2017
    },
    {
        title: "Tales of the Deep",
        genre: "Science Fiction",
        publishDate: 2023
    },
    {
        title: "The Quantum Paradox",
        genre: "Science Fiction",
        publishDate: 2022
    },
    {
        title: "Mind Over Matter",
        genre: "Self-help",
        publishDate: 2015
    },
    {
        title: "The Silent Storm",
        genre: "Drama",
        publishDate: 2016
    },
    {
        title: "Life in the Wild",
        genre: "Biography",
        publishDate: 2021
    }
];


const mybooks = books.filter((item) => item.genre == "Science Fiction")
let detail = books.filter((item) => {
    return item.publishDate>2018
})
console.log(mybooks)
console.log(detail)