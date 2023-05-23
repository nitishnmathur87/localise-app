# Getting Started with Localise App Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Primary libraries for translations
We will be using the react-i18next, i18next-browser-languagedetector and i18next-http-backend libraries to get translations to work.

There are a few ways to change the language of the user in the browser,
- cookie (set cookie i18next=LANGUAGE)
- sessionStorage (set key i18nextLng=LANGUAGE)
- localStorage (set key i18nextLng=LANGUAGE)
- querystring (append ?lng=LANGUAGE to URL)
## Resources
- https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next
- https://react.i18next.com/latest/usetranslation-hook
- https://locize.com/blog/react-i18next/
- https://www.i18next.com/how-to/add-or-load-translations
- https://github.com/i18next/i18next-browser-languageDetector 

A quick demo would be [here](demo.mov)