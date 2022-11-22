# Newsreact
(this repository is responsible for the reactjs script)

frontend server: reactjs__javascript (with react bootstrap)

backend server: springboot__java

database: mysql

cloud server: aws elastic bean + aws amplify

backend script: https://github.com/alexso0121/sthnews-reactjs-springboot

website: www.sosthweb.com

(mainly designed based on mobile phone)

# Version 1
-basic authentication

-web scraping news (jsoup) every day (HKT 08:00) and store to the database by springboot scheduler

-weather forecast by hk observation free api

-store news function after autheticate

-read history function after authenticate

-personal profile

# Version 2
-springboot security to protect the database from being accessed 

-json web token is used to allow authentication to backend server

-search news function

-send email to the client after sign up when valid

-clear outdate news with springboot schedular

# Architecture of reactjs
click for the src

-News.js in News package is the main page

-index.js is the react router

-weather package is for weather api


