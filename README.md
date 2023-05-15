

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]









<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
   <p align="center">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" width="120" height="100" text-align="center"/>
  <img src="https://aecconsultoras.com/wp-content/uploads/2020/01/logo-asociados-atmira-1024x527.jpg" width="180" height="100" text-align="center"/>
</p>
  </a>
![Uploading image.png…]()

  <h3 align="center">Nasa Apods Api Data</h3>

  <p align="center">
   This is a project with the Nasa API to get a list of Apods with some values getting by response from the JSON file of the API and show data on Angular APP. 
    <br />
        <br />
    <a href="https://ssd-api.jpl.nasa.gov/doc/index.php"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>


## Readme Top
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
         <li><a href="#configuration">Configuration</a></li>
         <li><a href="#run-the-app">Run The App</a></li>
         <li><a href="#build">Build</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project is an Angular web application that utilizes NASA's API to retrieve a list of Astronomy Picture of the Day (APOD) based on selected days. The application's user interface is designed to be user-friendly, allowing users to easily browse through APODs, view them in a table format, and access more detailed information about each APOD on its dedicated page. The application's goal is to provide users with an engaging and informative way to explore the wonders of our universe through NASA's vast collection of APODs.

<p align="center">
     <img src="https://apod.nasa.gov/apod/image/2107/ThorsHelmet_Miller_960.jpg" width="120" height="100" text-align="center"/>
</p>

<h2>Features</h2>
<ul>
	<li>Date selection: allow users to select one or multiple dates to retrieve APODs.</li>
	<li>APOD table: display retrieved APODs in a table, including their date, title, and a thumbnail.</li>
	<li>APOD details page: allow users to click on an APOD in the table to view additional details, including the full title, description, date, and media (image or video)</li>
</ul>


<p align="right">(<a href="#about-the-project">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

<div style="display: inline-block;">
  <a href="https://angular.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white" alt="Angular" width="120px">
    <img src="https://apod.nasa.gov/apod/image/2012/Ngc346_HubbleSchmidt_960.jpg" alt="Angular" width="120px">
  </a>
</div>

<div style="display: inline-block;">
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" width="120px">
  </a>
</div>

<div style="display: inline-block;">
  <a href="https://sass-lang.com/" target="_blank">
    <img src="https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white" alt="Sass" width="120px">
  </a>
</div>

<div style="display: inline-block;">
  <a href="https://karma-runner.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Karma-0A0A0A?logo=karma&logoColor=white" alt="Karma" width="120px">
  </a>
</div>

<div style="display: inline-block;">
  <a href="https://jasmine.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Jasmine-8A4182?logo=jasmine&logoColor=white" alt="Jasmine" width="120px">
  </a>
</div>

<p align="right">(<a href="#about-the-project">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://api.nasa.gov/](https://api.nasa.gov/)
2. Clone the repo
   ```sh
    git clone https://github.com/Ajgarcia01/NasaDataApi.git
   ```
3. Navigate to the project directory:
   `cd nasa-apod-explorer`

4. Install dependencies: 
   `
      npm install
   `
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configuration
1. Create a file named `environment.ts` in the `src/environments` directory.
2. Add the following code to the `environment.ts` file, replacing `YOUR_API_KEY_HERE` with your NASA APOD API key:
  ```ts
  export const environment = {
  production: false,
  apiUrl: 'https://api.nasa.gov/planetary/apod',
  apiKey: 'YOUR_API_KEY_HERE'
};

  ```
<p align="right">(<a href="#about-the-project">back to top</a>)</p>
  
## Run The App
* Run the Proyect:
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

<p align="right">(<a href="#about-the-project">back to top</a>)</p>

## Usage

NASA APOD Explorer is an Angular web application that allows users to retrieve and explore NASA's Astronomy Picture of the Day (APOD) using NASA's API. This guide will help you use the application to its fullest potential.

<ul>
  <li>APOD Table</li>
      <br />
  <ul>
    <li>The APOD table displays the retrieved APODs in a table format, including their date, title, and thumbnail.</li>
    <li>To view additional details about an APOD, click on its row in the table.</li>
  </ul>
      <br />
  
  <li>APOD Details Page</li>
      <br />
  <ul>
    <li>The APOD details page displays additional details about the selected APOD, including the full title, description, date, and media (image or video).</li>
    <liTo return to the APOD table, click on the "Return" button.</li>
  </ul>
      <br />
</ul>

_For more examples, please refer to the [Documentation](https://api.nasa.gov/)_

<p align="right">(<a href="#about-the-project">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

_For more information, please refer to the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0)_

<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* [![LinkedIn][linkedin-shield]][linkedin-url]
* [![GitHub][github-shield]][github-url]
* [![Personal Website][website-shield]][website-url]
* [![Email][email-shield]][email-url]


<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

We would like to express our gratitude to all contributors and open source projects that have made this project possible. We also want to thank NASA for providing the Near Earth Object Web Service and the information necessary to create this microservice.

* [Choose an Open Source License Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Nasa API](https://api.nasa.gov/)

<p align="right">(<a href="#about-the-project">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Ajgarcia01/ApiNasaAtmira/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Ajgarcia01/ApiNasaAtmira/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/Ajgarcia01/ApiNasaAtmira/NasaDataApi/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Ajgarcia01/ApiNasaAtmira/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Ajgarcia01/ApiNasaAtmira/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/jgl11/
[github-shield]: https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/Ajgarcia01/
[website-shield]: https://img.shields.io/badge/-Personal%20Website-green?style=for-the-badge&logo=google-chrome&logoColor=white
[website-url]: https://ajgarcia01.github.io/
[email-shield]: https://img.shields.io/badge/-Email-red?style=for-the-badge&logo=mail.ru&logoColor=white
[email-url]: mailto:jesusgarcialuque11@gmail.com
