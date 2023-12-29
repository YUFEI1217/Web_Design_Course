
# About my project

* All of the image files are in the images folder, the source of image in the images.txt.
  * There are 2 picture of logo taken by myself, the others are from http://unsplash.com
 
* My project is to create a game website, there are 4 main pages in my project
  * The first is Home page, in this page I introduce the production: PS5, Xbox, Switch and PC in my web. There is a subscribe button in each card. You can use this link look like button to show a modal form.
  * The second page is Game, in this page, I introduce 3 different games: Mario, COD and PUBG. There is a read more button on each card, you can use this button redirect to a sub page of GameDetail. There are some more specific information about the game Mario. All of the 3 button will redirect to the same child-page.
  * The third page is Store, there are some games detail information, including price, game Category and game name. And there is a filter button on the top of main area, you can use this button to sort the game item by price from low to high or high to low.
    * The Store has a submenu which will redirect you to production detail page. I create 2 pages for production detail. One is PS5 detail, the other is PC detail. In this page you can check the price of different productions and choose the one you want to buy.
    * The last page is About, there is a carousel of image on the top of main content and a short sentence to describe what this web is about. On the bottom of page is a Accordions part of Q&A, you can click the +/- to show/hide the Accordion.
 
# Requirement detail
* Drop down navigation menu
   * In the navbar "Store", you can click or move your mouse on the store, the drop down menu will show

* An Adaptive "hamburger menu"
   * In the navbar, when the page width < 44rem, the navmenu will change to hamburger icon. If you click the icon, the hamburger menu will show 

* Accordions or Tabs
   * In the About page Q&A part, you can click the +/- to show/hide the accordions content. 

* Theme selection
   * On the top of header, click this button can switch all the pages' backgroud color between darkblue or skyblue.

* Cards or Panels that include an image and text grouped together visually
   * The Game page shows cards
   * The Home page shows Panels(I used float in this page, because I need the text wrap the image) 

* A Carousel of images (where one image is shown at a time)
   * In the About, Game detail and production detail page. It can switch images automatically. 

* A "gallery" that shows many items (images/cards/panels/rows/etc) that can be filtered or sorted or otherwise changes which items are shown
   * On the Store page, there is a sort button on the top right of the main content. You can click this button to sort the game productions by price from low to high or high to low.

* A "complex" form interaction (Ex: Specific Fields that appear/show or use a different input type based on criteria). Examples of complex form interactions:
   * On the Home page, there is a link look like button on the bottom of each panels. You can click the subscribe button to show the form. In this form, you need to fill the username, email, comfirm email and checkbox. Otherwise, there are some error text will show.

* A Modal form that alters some data shown in the app. Examples of "altering some data shown in the app" include changing your Display Name in Slack or changing if emails are shown in "Compact" mode in Gmail
   * On the Store, game detail and Production detail page, when you click buy the production or download the game, a prompt modal will appear and different alters will be displayed according to your different choices.

# Extra credit
* Add some UI. When you move the mouse over the image, the image will scale or change shape.
* The theme of all pages is skyblue and similar colors or matching colors


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
