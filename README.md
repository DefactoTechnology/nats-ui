# nats-ui

A solution for displaying NATS Streaming data streams in a user-friendly interface

## :floppy_disk: Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/username/repo.git`
2. Navigate to the project directory: `cd nats-ui`
3. Install the dependencies: `npm install`
4. Add your own NATS Streaming address as shown below in the urls.
```
..src/assets/urls.json
[
    
    { "text": "test","url": "http://localhost:8222/streaming"},
    { "text": "prod","url": "http://localhost:8223/streaming" },
    ...
]
```

## :pencil: Usage

To use the project, follow these steps:

1. Start the application: `ng serve -o`
2. Open your web browser and navigate to `http://localhost:4200`

## :ship: Docker Usage

To use Docker for running the project, follow these steps:

1. Create a `.env` file and define the required environment variables inside it:

     ```bash
    URL_JSON=[{ "text": "test", "url": "http://localhost:8222/streaming" },{ "text": "prod", "url": "http://localhost:8223/streaming" }]
    ```
     
3. Run the project with Docker command

    ```bash
    docker run --env-file .env -p 4200:80 -d defactotechnology/nats-ui:tagname
    ```
## :city_sunset: Screens

![Serverz](screenshot/1.png)
![Serverz](screenshot/3.png)

## :star: Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## :black_nib: License

This project is licensed under the [MIT License](LICENSE).
