# HTTP Server with NodeJS

This project is a NodeJS-based server with the objective of promoting a *ficticious* car rental business. It manages communications between the browser and the server.

## Getting Started

For testing this project you need to use the following command in the command line of your preference.

```
node app.js
```

### Prerequisites

#### Alternative 1

- Linux operating system

- NodeJS

If you do not wish to use Docker, you may want to use NodeJS instead. You can get it in the following link: https://nodejs.org/en

Check the version using the comand:

```
node -v
```

And then simply run:

```
node app.js
```

#### Alternative 2

- Linux operating system

- Docker

Another alternative is to use the Docker image linked in this same document.
For the latter case, use the following command to download it:

```
docker pull hecmeduach/pbd_node_server:latest   
```

Once that has been done, with the following command you can have the server up and running:

```
docker run -p 8888:8888 hecmeduach/pbd_node_server 
```

### Installing

Use the next command to clone this repository:

```
git clone git@github.com:Adrigondo/UACH-pbd-project-2.git
```

#### Docker hub

You may find the Docker image in the following link:
https://hub.docker.com/r/hecmeduach/pbd_node_server

## Versioning

Version 1.0.0

## Authors

* **Adrian Alejandro Gonzales Dominguez** - 359834
* **Hector Daniel Medrano Meza** - 361345
* **Manuel Abraham Escudero Moreno** - 355208

## License

This project is licensed under the MIT License - see the [license.txt](license.txt) file for details

## Acknowledgments

* Special thanks to our teacher **Luis Antonio Ramirez Martinez** for the knowledge necessary to do this project.

