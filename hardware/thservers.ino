#include <Wire.h> // Libraries for screen connection LCD 16x2 with I2C
#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h> // Libraries for connecting NodeMCU to the internet
#include <WiFiClient.h>  // Libraries for connecting NodeMCU to a data receiver link
#include <ESP8266HTTPClient.h>
#include "DHT.h" // Library for the connection of the Temp/Hum sensor

// Pin definition in the GPIO of the NodeMCU, PIN D1
#define DHTPIN 5

// Definition of the DHT sensor type, type=22
#define DHTTYPE DHT22

// Declaration for the sensor variable type
DHT dht(DHTPIN, DHTTYPE);

// Variable declaration for WiFi connection
// Note: only support 2.4 network
const char *ssid = "";     // Add network name
const char *password = ""; // Add network password

// Declaration of host variable that contains part of the link
const char *host = "http://thservers.herokuapp.com/api/data/get"; // Host URL where backend is stored. Replace with your own URL if backend is deployed elsewhere

// Definition of the variable of the pin in the GPIO of the NodeMCU of the Buzzer
int buz = 4; // GPIO13 PIN D2

// Variable declaration for the LCD
LiquidCrystal_I2C lcd(0x3F, 16, 2);

// Configuration that is carried out once each power on and hardware reset
void setup()
{
  Wire.begin(2, 0); // I2C connection initialization
  lcd.init();       // LCD power on
  lcd.backlight();  // LCD light on
  lcd.clear();      // Function to clear characters from the screen

  lcd.setCursor(0, 0);       // Function to place the pointer to write on the lcd, coordinate in (x, y)
  lcd.print("Iniciando..."); // Function for printing characters on the screen
  delay(1000);               // Function to implement a pause in milliseconds
  lcd.setCursor(0, 1);
  lcd.print("Conectando WiFi!");

  // Declaration of the type of operation of the pin, in this case output
  pinMode(buz, OUTPUT);

  // Function to declare what comes out on the pin being:
  // LOW = 0 volts
  // HIGH = 3.3 volts
  digitalWrite(buz, LOW);

  // Function to start the serial port
  Serial.begin(115200);

  // Function to print on the serial port with an enter
  Serial.println();
  Serial.println();
  Serial.println("DHT22 Output!");

  // Function to start the DHT
  dht.begin();
  Serial.println("\nWiFi station setting");

  // Function needed to make the WiFi connection work
  WiFi.mode(WIFI_STA); // Mode connection type

  // Function to initiate the connection to WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting...");

  // Loop, while not connected to the internet shows a dot on the serial port
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi ready");
  Serial.print("My ip address: ");

  // Print the LocalIP of the WiFi connection
  Serial.println(WiFi.localIP());
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Bienvenido!");
  delay(2000);
}
// Function that implements the audible alarm
// Receives a string (ON / OFF)
void peligro(String alarma)
{
  // If it is on, the sound function starts
  if (alarma == "ON")
  {
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Alarma!!");
    digitalWrite(buz, HIGH);
    delay(50);
    digitalWrite(buz, LOW);
    delay(500);
    digitalWrite(buz, HIGH);
    delay(50);
    digitalWrite(buz, LOW);
    delay(500);
    digitalWrite(buz, HIGH);
    delay(50);
    digitalWrite(buz, LOW);
    delay(500);
    digitalWrite(buz, HIGH);
    delay(50);
    digitalWrite(buz, LOW);
    delay(500);
    digitalWrite(buz, HIGH);
    delay(100);
    digitalWrite(buz, LOW);
    delay(250);
    digitalWrite(buz, HIGH);
    delay(100);
    digitalWrite(buz, LOW);
    delay(250);
    digitalWrite(buz, HIGH);
    delay(100);
    digitalWrite(buz, LOW);
    delay(250);
    digitalWrite(buz, HIGH);
    delay(100);
    digitalWrite(buz, LOW);
    delay(250);
    digitalWrite(buz, HIGH);
  }
  // If it is not ON, turn off the buzzer
  else
  {
    digitalWrite(buz, LOW);
  }
}
// Function that repeats indefinitely as long as the device has power
void loop()
{
  // Creacion de variables
  String alarma;
  float temperature = dht.readTemperature(); // Function to obtain the temp value of the DHT
  float humidity = dht.readHumidity();       // Function to obtain the hum value of the DHT

  // Conditional that asks if there are sensor values or not
  // In case of disconnecting the sensor, nan values appear
  // If the sensor is not working, nan values appear
  if (isnan(temperature) || isnan(humidity))
  {
    // En caso de tener valores nan: -->
    Serial.println("Failed to read DHT22");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Failed DHT22");
    // If values exist: -->
  }
  else
  {
    // Depending on the values, check if there is an overstep of those declared
    // to know if it starts the alarm
    if (temperature > 26.00 || humidity > 70.00)
    {
      // Alarm range
      alarma = "1";
      peligro("ON");
    }
    else
    {
      alarma = "0";
      peligro("OFF");
    }
    // Start printing values on screen and port
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("T=");
    lcd.setCursor(2, 0);
    lcd.print(temperature);
    lcd.setCursor(8, 0);
    lcd.print("H=");
    lcd.setCursor(10, 0);
    lcd.print(humidity);
    Serial.print("Alarma: ");
    Serial.print(alarma);
    Serial.print(" \t");
    Serial.print("Humidity: ");
    Serial.print(humidity);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.println(" *C");
    delay(500);
  }
  // Ask if there is an internet connection
  if (WiFi.status() != WL_CONNECTED)
  {
    // If there is no connection then:
    lcd.setCursor(0, 1);
    lcd.print("WiFi=OFF");
    Serial.println("WiFi OFF");
  }
  else
  {
    // If there is a connection then:
    lcd.setCursor(0, 1);
    lcd.print("WiFi=ON ");
    Serial.println("WiFi ON");
  }
  // We initialize the types of connection variables to our host
  WiFiClient client;
  HTTPClient http;

  // First part of the link = host
  // http://thservers.herokuapp.com/api/data/get
  // Variables for full link creation
  String getData, link;

  // Variable that is made up of the structure necessary to send the data to the server
  getData = ("?temperature=") + String(temperature) + ("&humidity=") + String(humidity) + ("&alarm=") + String(alarma);

  // Grouping of the strings for the creation of the complete link
  link = host + getData;

  // Initialization of connection to the server with sending of data
  http.begin(client, link);

  // Variable to recognize the connection code
  int httpCode = http.GET();

  // Response code printing
  lcd.setCursor(9, 1);
  lcd.print("RC=");
  lcd.setCursor(12, 1);
  lcd.print(httpCode);
  Serial.print("Response Code: ");
  Serial.println(httpCode);

  // Close connection to the server to avoid errors or problems
  http.end();

  // 60 second time delay; change depending on data need
  delay((1000 * 60));
}