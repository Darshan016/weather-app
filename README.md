<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
</head>
<body>
  <h1>Weather App</h1>

  <h2>Features</h2>
  <ul>
    <li>Fetches weather data from the <a href="https://www.weatherapi.com/">Weather API</a> using the provided city name.</li>
    <li>Displays the temperature in Celsius, current time, region and country name.</li>
    <li>Uses the <a href="https://www.npmjs.com/package/inquirer">Inquirer</a> package to accept input from the user.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone &lt;repository-url&gt;</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd weather-app</code></pre>
    <li>Install the dependencies:</li>
    <pre><code>npm install</code></pre>
  </ol>

  <h2>Running with Docker</h2>
  <p>You can also run the Weather App in a Docker container to simplify the environment setup.</p>
  <ol>
    <li>Make sure you have Docker installed on your system.</li>
    <li>Build the Docker image:</li>
    <pre><code>docker build -t weather-app .</code></pre>
    <li>Run the Docker container:</li>
    <pre><code>docker run -it weather-app</code></pre>
    <li>Follow the prompts to enter the city name and retrieve weather information.</li>
  </ol>

  <h2>Acknowledgements</h2>
  <ul>
    <li><a href="https://www.weatherapi.com/">Weather API</a> for providing weather data.</li>
    <li><a href="https://www.npmjs.com/package/inquirer">Inquirer</a> package for user input handling.</li>
  </ul>

  <p>Feel free to modify and enhance the app as per your needs.</p>
  <p>P.S: You will need your own API keys to run the application. <a href="https://www.weatherapi.com/">Get API Keys here for free!</a></p>
</body>
</html>
