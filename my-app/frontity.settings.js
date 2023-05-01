const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://newsally.studiosally.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "about",
              "/about"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://newsally.studiosally.com",
          "api" : 'https://newsally.studiosally.com/wp-json',
          "homePage" : "/",
          "postTypes":[
            {
              "type" :'portfolio',
              "endpoint":"portfolio",
              "archive" : "/portfolio"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
