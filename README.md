# TH Servers
#### About the application
IoT (Internet of Things) Application for tracing, reading and alerting temperatures and humidities in any data center.

This application is split into two main projects, a fullstack web application and a hardware prototype.  

#### Disclaimer
This project is part of the final mockup project of the college course `Internet or Things` from Tecnológico de Monterrey, therefore, it is not finished. 

## Installation

To install this project, first clone the repository
#### HTTP
``` bash
git clone https://github.com/sgarnica1/thservers.iot.git
```
##### SSH
``` bash
git clone git@github.com:sgarnica1/thservers.iot.git

```
Now, move to the base directory
``` bash
cd thservers.iot
```
Inside you will find two base directories where you will find the hardware and software code
``` bash
./
├── hardware
└── software
    ├── backend
    └── frontend
```
Inside the `./software` directory you will find two more directories with the `backend` and `frontend` code.

To run the project locally, go through the following steps:

### Frontend

Move to the `frontend` directory
``` bash
cd ./software/frontend
```
and run the following command
``` bash
npm install
```

After installing, now run the app in the development mode
``` bash
npm start
```
And open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.


#### More Commands

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



### Backend
Move to the `backend` directory
``` bash
cd ./software/backend
```
and run the following command
``` bash
npm install
```

After installing, now run the app in the development mode
``` bash
npm run dev
```
And open [http://localhost:4000](http://localhost:4000) to view it in your browser.

#### Notes
To view the project best, open it with an API platform application.

### Hardware
Move to the `hardware` directory
``` bash
cd ./hardware
```

## About
### Frontend
- This app was created with Create React App [(documentation)](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

### Backend
- Built with Node.js, Express.js and MongoDb Atlas
- Deployed under the `/api` endpoint in 

#### Routes available
#### `/api/data/get`
- Method: `GET` 
- Brief: Gets all data from database (temperature and humidity)

#### `/api/data/post?temperature=temp&humidity=hum&alarm=alarm`
- Method: `GET` 
- Brief: Posts data to database. Send information through query params via URL
- `temp`: Float value for temperature
- `hum` : Float value for humidity
- `alarm`: Boolean value for activating/deactivating alarm


#### `/api/data/params`
- Method: `GET` 
- Brief: Gets all params defined by user (Max and Min temperature and humidity)

#### `/api/data/params`
- Method: `POST` 
- Brief: Post new values for Max-Min temperatures and humidities. 
- Body: JSON
``` bash
{
  "maxTemp": integer,
  "minTemp": integer,
  "maxHum": integer,
  "minHum": integer,
}
```


### Hardware
#### General settings:
- NodeMCU Version: `Robotistan, NodeMCU 1.0 V2, ESP8266MOD`
- Arduino Version: `1.8.19`
- NodeMCU Driver: `1.0`
- ESP32 Driver: `ESP8266 2.7.4 `

#### Components
- Buzzer
- DHT22 Module Sensor 
- NodeMCU Robotistan, NodeMCU 1.0 V2, ESP8266MOD
- LCD 16x2 I2C

## Deployment
#### Frontend
- Deployed in Netlify
- You can view the frontend application on [https://thservers.netlify.app/](https://thservers.netlify.app)

#### Backend
- Deployed in Heroku
- You can view the API on [https://thservers.herokuapp.com](https://thservers.herokuapp.com/)
- Alternative URL [https://thservers.onrender.com/](https://thservers.onrender.com/)

