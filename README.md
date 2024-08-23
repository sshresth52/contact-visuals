# Contact Management App 

This contact management app is built with ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (Tanstack Query). It offers a streamlined way to manage your contacts while also providing interactive data visualizations, including charts and maps for tracking COVID-19 statistics. The combination of these technologies ensures a responsive and dynamic user experience, with state management handled by Redux and data fetched using modern best practices.

## Objective: Page Contacts 

### Features
- ➕ **Add new contacts** using the provided form.
- 📋 **Display a list** of all added contacts.
- 👁️ Each contact has a button to **view their details**.
- 📝 **Edit and delete contacts** functionality.
- 🗄️ **Redux is used** to store the contact data.

## Objective: Page Charts and Maps 

### Features
The app features a simple dashboard with the following components:
- 📈 **Line Graph:** A line graph displaying the fluctuations in COVID-19 cases over time.
- 🗺️ **React Leaflet Map:** An interactive map with markers that indicate country-specific COVID-19 data. The markers display the country name, total number of active, recovered cases, and deaths as a popup.

## Data Sources 
The COVID-19 data is fetched from the following APIs:
- **World-wide COVID-19 cases:** `https://disease.sh/v3/covid-19/all`
- **Country-specific COVID-19 cases:** `https://disease.sh/v3/covid-19/countries`
- **Historical COVID-19 graph data:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

## Instructions 

1. **Clone the Repository:** Start by cloning the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Navigate to the Project Directory:** Move into the project directory using the following command:

    ```bash
    cd your-repo
    ```

3. **Install Dependencies:** Install the necessary dependencies by running:

    ```bash
    npm install
    ```

4. **Start the App:** Launch the app using the following command:

    ```bash
    npm start
    ```

    This will start a development server and open the app in your default web browser. You can access it at `http://localhost:3000`.

5. **Explore the App:** Now you can explore the contact management app. Add new contacts, view contact details, edit and delete contacts. You can also navigate to the Charts and Maps section to visualize COVID-19 data using React ChartJS 2 for charts.

6. **Deployment:** If you wish to deploy the app to a hosting service like Vercel, GitHub Pages, or Heroku, you can follow their respective deployment guides to publish your app online.

## 🛠️ Technologies Used

- **React**: A robust JavaScript library for building dynamic user interfaces.
- **TypeScript**: Ensures better code quality by adding static type checking to JavaScript.
- **TailwindCSS**: A utility-first framework that simplifies styling with pre-built classes.
- **React Router v6**: Manages seamless navigation and routing within the application.
- **React Query (Tanstack Query)**: Efficiently handles API data fetching and caching.
- **Redux**: Manages global state for the contact management system.
- **React Leaflet**: Integrates map features with interactive markers and popups.
- **React ChartJS 2**: Provides responsive and visually engaging data charts.

- **Deployed Link**: https://sshresth52contact-visuals.netlify.app/addcontact
