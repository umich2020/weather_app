# weather_app
The Odin Project. We're creating a weather app. This flexes my api skills. I'm also going to work with css variables and have a dark mode 

We also have to do this without burning our api keys which seem to happen with live reloading. We're probably going to have a button
Spec list:
1. Search bar to take location and return weather data for location
    a. Start with console.log the info
2. Button that changes the api so it includes a kay. This is to prevent me burning all my api keys. Done
3. Function to process json data and get only data I want DONE
    a. should be able to have today date
    b. weather data for the next 5 days
        1. High, low. Maybe replace with "feels like High Low"
        2. Feels like _ currently
        3. Description of today's weather
        4. Precipitation if today's weather is rain
        5. Reciptype
        6. Sunset time
4. Show icons. We use dynamic import()
5. Have the appropriate logic of icons. Icons are symbolized
by what type of weather is it. Shorts? Jacket? Jeans? Boots for snow
6. Dark mode because I want to try css variables
### Notes
-Remember to have a default city  
### Styling Notes
-Format the date so it doesn't show the year