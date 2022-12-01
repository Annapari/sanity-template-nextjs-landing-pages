
# Sanity  Kate Vox Website

A website built for client to showcase her artwork.

- A dynamic frontend with [Next.js](https://nextjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Vercel](https://vercel.com)

## Set up if you need to download the files

You'll need to clone the GitHub repo or download the files to your local drive. To quickly do this run a terminal on your computer and cd/mkdir for the project to be save into.
then run this code to clone the git repo

$ git clone 

Open in visual studio code and save a new `.env` file to the main project folder. This will store a few environment variables that Next will use to pull data from the Sanity API.


The Project ID is an alphanumeric 8-character string.

The dataset is  "production".

Once those env variables are in place, you can run the following commands to get Next's development server up and running:

## open a terminal in the project folder and run code:
$ npm uninstall 
$ npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons

### postinstall
run code
$ cd studio 
$ npx @sanity/cli install

----

## insert an email address to test the contact form

sanity-template-nextjs-landing-pages/pages/api/contact.js
line 18, insert an email address to recieve the submitted emails

## After you have the files, run the Studio and the Website using localhost

Run Sanity Studio:

whilst still in the studio folder of the project, run code
$ Sanity start

If successful, the following will appear:
Content Studio successfully compiled! Go to http://localhost:3333


# Run the frontend
open a new terminal in the project folder or open the project folder in VS code, run the terminal and enter code:
$ npm run dev
CTRL + Click on the localhost address showing or copy the URL and enter it in to the address bar of your bbrowser window - this will open the website

CTRL + C to quit


The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.

Dependencies required include:
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.2.1",
    "@fortawesome/free-brands-svg-icons": "^6.2.1",
    "@fortawesome/free-solid-svg-icons": "^6.2.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@portabletext/react": "^1.0.2",
    "@sanity/client": "^3.0.3",
    "@sanity/image-url": "^1.0.1",
    "dotenv": "^16.0.3",
    "groq": "^2.15.0",
    "next": "^12.0.9",
    "next-seo": "^5.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.6.0",
    "react-inlinesvg": "^2.3.0",
    "react-mailchimp-form": "^1.0.2",
    "react-mailchimp-subscribe": "^2.1.3"
  },
