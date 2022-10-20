# OptioProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

# About Project

This project is about revenue analysis. For first, you need to choose start and end date and press a buton search. data will be displayed.first chart will be categories chart, then intensity chart and last one is a table. Categories chart is representing categories from which user got an income.
Second chart is showing intensity, at what period of time it happened and what was the amount when hovering on it. Lastly a table is showing columns with next data:
Dimension,Date,Quanitity,Volume,Average,Difference quantity,Difference volume.

## How to start a project and it's features

since project is developed on Angular you must run in your terminal npm start or Angular ClI command ng serve, which will do both same, start a development server
on localhost:4200 by default.You can also build a project for production with CLI command ng build and it will generate a builded folder.
features used in here are:

1. lazy loading, which helps angular to load modules by demand and not all of them in same time.
2. Material module, it helps angular theming and gives UI components.
3. Folder by feature structure, it helps to udnerstand what is located in specific folder with correct naming
4. Interfaces to describe custom type of objects.
5. Services to send http requests.
6. Rxjs for asynchronous data handling.
7. Inputs for data passing from parent to child components.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
