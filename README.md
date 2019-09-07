# Not Face Blind
**https://not-face-blind.herokuapp.com/**

**Not Face Blind** is a simple web application that detects faces in images. In order to use the application, users must register, and login upon subsequent visits to the site. However, **USER DATA IS NOT USED FOR ANYTHING**. Feel free to use fake information. The website is secure, fully responsive, and mobile-friendly too! Thanks for visiting.

*This is the **back-end** repository. For the front-end, see: [not-face-blind](https://github.com/spencerericfong/not-face-blind).*

---

The back-end of this project includes a RESTful API as well as a relational database for users and logins. The server was built in Javascript, using **Node.js** and **Express.js**. The database stores user and login information, and was created using **PostgreSQL**. The site itself is hosted and deployed on [**Heroku**](https://heroku.com/).

---

*Unfortunately, there is a minor issue with the site on some mobile devices where uploaded images appear in the incorrect orientation. This is not an application issue, but a browser issue where the browser incorrectly reads or ignores the image file's EXIF data, which contains information about the correct image orientation. However, the application functionality is unaffected and will still work as intended. Sorry for the inconvenience!*
