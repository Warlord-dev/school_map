# LiveBy School Map

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Repository

This repository contains a template for setting up a map with a sidebar next to it.

The entry file for this project is `pages/index.js`. This file will render 2 other components. There is one component for rendering a leaflet map, and one for making an unordered list.
The map component can be found in `components/map.js`. The sidebar can be found in `components/schools.js`.

This repository is also setup for a next.js API endpoint. That API endpoint exists in `pages/api/schools.js`. It currently expects to be sent a `POST` request with JSON data in the body.

## Objectives

For LiveBy, this project is not about making sure you can do everything. This is for us to gauge where your skills best shine.

While I have screenshots to help you understand what we envision this project to be, focus on what you can do best.  We want to make the best products we can, not just the products we are shown to make.

That being said, we are expecting some basic skills shown. We will be watching to make sure you DO:
  - keep your code organized and readable
  - write commit messages that describe what the commit changes

Some things we want to make sure you DO NOT DO:
  - commit login/API key information
  - expose security vulerabilities in SQL


First, make a branch from the main branch to work on.
When you are at a point where you would like to stop, push that branch to origin, and create a pull request against the main branch. 
Please specify what you were able to accomplish, and what is still required to finish in the body of your pull request.

In this project we would like to add schools from a database to the map, and to the sidebar.

The sidebar will contain the name and address of the school.
The map will have a marker for each school.

When the school is clicked on the map or on the sidebar, a popup should appear with the schools name and address. 
There should also be an area showing the name and address of the school that was clicked above the sidebar.

As the map is moved, the app should update the schools on the map and in the sidebar based on the map's current viewport.

The schools exist in a postgres table named `public.schools`. It has columns for the school's id, name, address, and coordinates. Please refer to the email from Joel for information on how to connect to this postgres server.

|    Column    |         Type         |
---------------|----------------------|
ID             | character varying(12)
 SchoolName    | character varying(80)
 AddressStreet | character varying(30)
 AddressCity   | character varying(30)
 AddressState  | character varying(2)
 AddressZip    | character varying(5)
 geom          | geometry(Point)

## Resources

Here are links to documentation and resources that should help you build this.

[React](https://reactjs.org/docs/react-api.html)

[Next.js](https://nextjs.org/)

[Leaflet](https://leafletjs.com/reference-1.7.1.html)

[React Leaflet](https://react-leaflet.js.org/docs/en/components)

[Postgres](https://www.postgresql.org/docs/10/index.html)

[PostGIS](https://postgis.net/docs/manual-3.0/reference.html)

[node-postgres](https://node-postgres.com/)


 ## Examples

### Here are some screenshots of what a finished project could look like

#### Initial Load
![Initial Load](.github/initial.png)

#### Popup Example
![Popup](.github/popup.png)

#### Changed Viewport view
![Changed Viewport](.github/changedviewport.png)

#### Changed Viewport while a Popup is open
![Changed Viewport and Popup Open](.github/changedviewportpopup.png)
