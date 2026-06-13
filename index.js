const { getJson } = require("serpapi")
// getJson({
//     engine: "google",
//     q: "Virat Kohli",
//     location: "India",
//     google_domain: "google.com",
//     hl: "en",
//     api_key: "952d7d2b0104d7fbb67a1181e46a3afda388dad7c0fc0ba0dbca7db2c06523af"
// }, (json) => {
//     console.log(json)
// })


// getJson({
//     engine: "google_short_videos",
//     q: "Virat Kohli",
//     location: "India",
//     google_domain: "google.com",
//     hl: "en",
//     api_key: "952d7d2b0104d7fbb67a1181e46a3afda388dad7c0fc0ba0dbca7db2c06523af"
// }, (json) => {
//     console.log(json)
// })

getJson({
    engine: "google_lens",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84Mm_PyTmXinZoJXaw3cd2pd6vE4zzORWA&s",
    location: "India",
    google_domain: "google.com",
    hl: "en",
    api_key: "952d7d2b0104d7fbb67a1181e46a3afda388dad7c0fc0ba0dbca7db2c06523af"
}, (json) => {
    console.log(json['visual_matches'])
})
