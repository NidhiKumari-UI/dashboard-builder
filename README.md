## How to Run the Application

Before you start, make sure you have the following installed on your machine:

- **Node.js**: v20.11.1 or higher
- **Angular CLI**: v19.2.15

If you don't have Angular CLI, you can install it globally with:

```bash
npm install -g @angular/cli@19.2.15
```

To run the application locally:

1. Open a terminal and navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open your browser and go to [http://localhost:4200/](http://localhost:4200/)

The app will reload automatically if you make changes to the source files.


## App Structure
Project Structure is as below:
```
src/
  app/
    Components/
      DailyWidget/           # Daily statistics widget 
      OccupancyWidget/       # Occupancy widget component
      WeekdayWidget/         # Weekday widget component
    Modal/
      modal/                 # Modal dialog component
    SharedModule/
      bar-chart/             # Bar chart reusable component
      line-chart/            # Line chart reusable component
    app.component.css        # Root component stylesheet
    app.component.html       # Root component template
    app.component.spec.ts    # Root component tests
    app.component.ts         # Root component class
   assets/                    # Static assets and mock data
    mock-data.json
```

**Reasoning and Approach:**
- **Feature Modules:** Each major feature (e.g., DailyWidget, Occupancy, Weekday) is placed in its own folder, making it easy to develop, test, and maintain features independently.
- **SharedModule:** Common components (like charts) are grouped under `SharedModule` for reuse across the app, reducing code duplication.
- **Scalability:** This structure makes it simple to add new features or modules without disrupting existing code.
- **Assets:** All static files and mock data are organized in the `assets` folder, following Angular best practices.
- **Responsiveness:** I made sure the layout and components are responsive, so the app looks good and works well on any device.
- **Reactive Forms:** I used Angular Reactive Forms (see `Modal/modal.component.ts` and `.html`) for robust and flexible form handling.
- **Thoughtful Process:** Throughout the project, I focused on keeping the codebase clean and maintainable. I broke down features into logical modules, reused components where possible, and always considered how future changes could be made easily. My goal was to make the development process smooth for myself and anyone else who works on this app.


**What I would improve with more time:**
- I would write comprehensive test cases for all created components.
- I would further enhance the design and user interface.
- I would create a Dockerfile for containerization.
- I would add localStorage persistence for better data retention.


Please Find the image below:
![Dashboard Builder](image-1.png)
![Add New Widget Modal](image-3.png)
