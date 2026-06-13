const { getJson } = require("serpapi")
// getJson({
//     engine: "google",
//     q: "Virat Kohli",
//     location: "India",
//     google_domain: "google.com",
//     hl: "en",
//     api_key: ""
// }, (json) => {
//     console.log(json)
// })


// getJson({
//     engine: "google_short_videos",
//     q: "Virat Kohli",
//     location: "India",
//     google_domain: "google.com",
//     hl: "en",
//     api_key: ""
// }, (json) => {
//     console.log(json)
// })

getJson({
    engine: "google_lens",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84Mm_PyTmXinZoJXaw3cd2pd6vE4zzORWA&s",
    location: "India",
    google_domain: "google.com",
    hl: "en",
    api_key: ""
}, (json) => {
    console.log(json['visual_matches'])
})
