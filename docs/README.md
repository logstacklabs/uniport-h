<div align="center">
<!--![uniport-h](https://socialify.git.ci/msio808/uniport-h/image?custom_description=&description=1&font=Rokkitt&forks=1&issues=1&language=1&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)-->
<img src="https://socialify.git.ci/msio808/uniport-h/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&logo=https%3A%2F%2Fgohugo.io%2Fimages%2Fhugo-logo-wide.svg&name=1&owner=1&pattern=Brick+Wall&pulls=1&stargazers=1&theme=Auto" alt="uniport-h" width="640" height="320" />
    <p>
        <img src="https://img.shields.io/badge/HUGO-white?logo=hugo" alt="">
        <img src="https://img.shields.io/badge/HTML5-white?logo=html5" alt="">
        <img src="https://img.shields.io/badge/CSS3-blue?logo=css3" alt="">
        <img src="https://img.shields.io/badge/JS-black?logo=javascript" alt="">
        <img src="https://img.shields.io/badge/MD-black?logo=markdown" alt="">
    </p>
    <h1 id="uniport-h">Uniport-H <span style="font-size: small">v1.0.0</span></h1>
</div>

UniPort is a lightweight customizable one-page portfolio theme built for [Hugo](https://gohugo.io/).
The design is partly inspired by [Brian Yu's Website](https://brianyu.me)

## 🧐 Features
- Lightweight
- Customizable
- RSS Integration
- Single Page Layout
- Google Analytics Support
- Supports dark & light mode

## 🚀 Demo
- Demo [links]()
  - [🔗 Demo website](https://uniport-h.msio.me/)
  - [🔗 My own website](https://msio.me/)

| 📸 Screenshots                   |
|----------------------------------|
| ![](screenshots/polar-night.png) |
|                                  |
| ![](screenshots/snow-storm.png)  |

## 🛠️ Setup

> ### Prerequisites:
> - Git
> - nodejs & npm
> - npm sharp v0.33.5
> - Hugo _(minimum v0.123.0)_

1. This theme is available as a template.
   - Click on the <kbd>Use this template</kbd> button and then select <kbd>Create a new repository</kbd>.
   - Name the new repository with a name of your choice.
   - Clone the repository then modify to your satisfaction.

2. If you don't want to use the template you can follow the steps below:
   - In your site's root directory run the following commands below
     ```sh
     $ git init
     ```
     ```sh
     $ git submodule add https://github.com/msio808/uniport-h.git themes/uniport-h
     ```
---

After completing any of the steps above:
- In the `static/img` directory, place your avatar namef avatar.png & logo named brand.png.
- Move the [config.toml](../.idea/config.toml) file from the [.idea/](../.idea) directory to your site's root directory.
- If you chose option 2 add the theme name in the config.toml file with the following command:
  ```shell
    $ echo 'theme = "uniport-h"' >> config.toml
  ```

- Run the following command to generate favicons, twittercard & opengraph images for your site
  ```shell
  npm install
  ```
This will install the required package/s to generate favicons and twittercard & opengraph images

When you're done, run either of the following command:

- To live preview your site
  ```shell
  npm run preview
  ```
- To build your hugo site
  ```shell
  npm run build
  ```
- Or if you have sharp installed but you haven't generated favicons yet:
  ```sh
  npm run favicons
  ```

Preview your site at [localhost:1313](http://localhost:1313).

## 🍰 Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
- Check out this guide [link](https://daily.dev/blog/how-to-contribute-to-open-source-github-repositories)
- Also makesure to record your changes in the [changelog](CHANGELOG.md) file.

## 🛡️ License:
<p xmlns:cc="https://creativecommons.org/ns#" xmlns:dct="https://purl.org/dc/terms/">
    <a property="dct:title" rel="cc:attributionURL" href="https://github.com/msio808/uniport-h.git">This project</a>
    <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://msio.me" ></a>
    is licensed under
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
    target="_blank" rel="license noopener noreferrer" style="display: inline-block">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International </a>
    <img style="height: 16px !important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
    <img style="height: 16px !important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
    <img style="height: 16px !important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="" />
    <img style=" height: 16px !important; margin-left: 3px; vertical-align: text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/>
</p>

## 🙏 Acknowledgement
- The team behind [NordTheme](https://www.nordtheme.com/)
- The team and community behind [Hugo](https://gohugo.io)
- [GOOGLE FONTS](https://fonts.google.com/)
- [FONT AWESOME](https://fontawesome.com/)
- [Brian Yu](https://brianyu.me)
- [CANVA](https://canva.com)
