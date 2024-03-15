# Next Js why

1. Build fullstack apps(backend + front-end)
2. File Based Routing
3. Server Side Rendering

# Two Different Ways

1. App Router(New and Partially Buggy)
2. Pages Router(Older Way)

# NextJs Essentials

1. Routing,Pages and Components
2. Fetching and Sending Data
3. Styling, Images and Metadata

# Nextjs relies on special reserved filenames

page.js ------------> Define page content
layout.js ----------> Define wrapper around pages
not-fonund.js ------> Define "Not Found" fallback page
error.js -----------> Define Error fallback page
loading.js ---------> Fallback page which is shown whilst sibling or nested pages (or layouts) are
while fetching data

# Use Next js Link component(02..../app/page.js)

The link component allows next js pages to not be reloaded again so the app behaves like SPA after the page
has been rendered.

# layout.js

It is a reserved filename which wraps aroung app/page.js.
Here title and description for head section is defined in metadata variable. So this variable is reserved
global.css is imported so the whole css can be applied to every page

# icon.png

It is a reserved name and will be used as a favicon

# Project Organisation Strategies

https://nextjs.org/docs/app/building-your-application/routing/colocation

<Image>
The image component provided by next js provides lazy loading out of the box and also helps in responsivness

# React Server Components

In next js all components are react server component by default. These components are only rendered at the
server

# React client Side Components

Components that are pre-rendered on the server but then also potentilly on the client
Opt-in via "use client" directive
03.....//components/images/image-slideshow

This directive should be used as far down in the component tree as possible so that
majority of the components should remain server side component
03......//components/main-header/nav-link

# usePathName()

hook gives currently active path name
03......//components/main-header/main-header

# better-sqlite3

This is the package which can be use to create database locally without any extra configurations
We will use this to populate the meals data for 03.....
03..../initdb.js
To run this file to create db - node initdb.js

# notFound()

This not found function provided by next js can be used if the page is not found.This function finds
the closest not found file and render it.
03.../meals/[mealslug]/page.js

# server actions

use server makes shure that function is executed at the server
In case function we have to explicitly state inside the function
03.../meals/[mealslug]/page.js -> shareMeal()

# Building for production

npm run build
npm run start

When you go to the website and add a meal and gets redirected to the meals page. The new added meal
will not be seen since next js on build process do aggressive caching which caches the page and shows
the cache page only.
Therefore we used revalidatePath to explicitly tell next js to throw away cache
03..../lib/actions.js/shareMeal

# revalidatePath('/meals', 'layout');

layout ---> Cache all the nested pages
page ----> Cache only one page and not nested

# metadata

Metadata is used for seo purpose so that engine can crawl pages with efficiency

In file layout.js 03.../app/layout.js exporting metadata. This is static generation of metadata
In file with dynamic routs 03.../app/meals/mealSlug exporting generateMetadata. This is dynamic generation of metadata

# public folder

public folder is a special folder in next js because whatever is stored in there is served statically

# \_\_app.js

This is the root component where different page components are rendered in.Next js use \_\_app component
to hand your page content to it whenever you switch to display it
05../\_\_app
