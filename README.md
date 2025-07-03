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
  styles.css
  app/
    app.component.css
    app.component.html
    app.component.spec.ts
    app.component.ts
    Components/
      DailyWidget/
        DailyWidget.component.css
        DailyWidget.component.html
        DailyWidget.component.spec.ts
        DailyWidget.component.ts
      OccupancyWidget/
        OccupancyWidget.component.css
        OccupancyWidget.component.html
        OccupancyWidget.component.spec.ts
        OccupancyWidget.component.ts
      WeekdayWidget/
        WeekdayWidget.component.css
        WeekdayWidget.component.html
        WeekdayWidget.component.spec.ts
        WeekdayWidget.component.ts
    Modal/
      modal/
        modal.component.css
        modal.component.html
        modal.component.spec.ts
        modal.component.ts
    SharedModule/
      bar-chart/
        bar-chart.component.css
        bar-chart.component.html
        bar-chart.component.spec.ts
        bar-chart.component.ts
      line-chart/
        line-chart.component.css
        line-chart.component.html
        line-chart.component.spec.ts
        line-chart.component.ts
  assets/
    mock-data.json
```

**Reasoning and Approach:**
- **Feature Modules:** Each major feature (e.g., DailyWidget, Occupancy, Weekday) is placed in its own folder, making it easy to develop, test, and maintain features independently.
- **SharedModule:** Common components (like charts) are grouped under `SharedModule` for reuse across the app, reducing code duplication.
- **Scalability:** This structure supports adding new features or modules with minimal impact on existing code.
- **Assets:** Static files and mock data are kept in the `assets` folder, following Angular best practices.




