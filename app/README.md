
## Installation

In root directory (app)
$ npm install
$ npm install tailwindcss @tailwindcss/vite
$ npm install lightningcss
$ npm install auth
$ npm install react-datepicker

Create a .env file in the root directory with the following content:
MONGODB_URI="mongodb+srv://<mongodbusername>:<mongodbpassword>@cluster0.jngvkea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
NEXT_PUBLIC_API_KEY="f1993c53ffmsh313277fdcf0b5e9p1227b6jsne4c573d29aba"
NEXT_PUBLIC_HOST="skyscanner89.p.rapidapi.com"
AUTH_SECRET="gi4NH9QtnrlD/M5k1jc73197YYtVmfRjTBvcJtKoE+w="

## Running the Program

While still in root directory:
$ npm run dev

Then open http://localhost:3000 with your browser

About this website:
This website is used to find the cheapest flights for the given inputs.

How to use it:
First, sign up or log in using the buttons on the top right of the screen.
Then switch to the search page.
Type in the desired departure and arrival locations, then click the departure form to select a date on the calendar for departure time.
After all the inputs are filled out, click search.
To save a flight from the search results, click the plus (+) icon on the desired flight card.

Seeing saved flights:
Go to the Flights page to see any flights saved to your account.
You can delete flights by clicking on the trash icon on the desired flight card.

About the team:
·   Steven Tran – Frontend API routes, UI Figma design
·   Amir Cox – Authentication, Backend-API routes
·   Roberto Molina - External API integration, Lead designer
·   Matthew Basil – Front end components, documentation