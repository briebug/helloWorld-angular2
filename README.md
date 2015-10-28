This is the third demo in a series on how to refactor your AngularJS 1.x application to Angular 2. The first two demos refactored John Papa's Hot Towel project into a componentized, TypeScript application. This third demo actually converts the AngularJS 1.x TypeScript application (https://github.com/briebugconsulting/helloWorld-typescript) into an Angular 2 app.

This demo will be presented alongside a slide deck that will introduce the basic parts of an Angular 2 application and provide resources for learning more about Angular 2. In addition, we will do a side-by-side comparison of AngularJS 1.x components from the previous demo and their Angular 2 counterparts in this application.

NOTE:
This project is a work in progress. As Angular 2 matures and new features are released and locked down, we will update this project to demonstrate the best way to construct an Angular 2 application.

## Installation

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g typescript
    ```

3. Install project dependencies (execute from project's root folder)

    ```bash
    npm install
    ```

4. Compile the application

	```bash
	npm run tsc
	```

5. Run the application (execute from project's root folder)

    ```bash
    node src/server/app.js
    ```

6. Open a browser and navigate to http://127.0.0.1:2020
