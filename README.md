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


## App Structure and Reasoning

The application follows a modular and feature-based folder structure to promote scalability, maintainability, and clear separation of concerns. Here is an overview of the structure:

```
src/
  app/
    DailyWidget/           # Daily statistics widget component
    Modal/                 # Modal dialog components
      modal/
    Occupancy/             # Occupancy-related features
      OccupancyWidget/
    SharedModule/          # Shared reusable components (charts, etc.)
      bar-chart/
      line-chart/
    Weekday/               # Weekday-related features
      weekday-widget/
    app.component.*        # Root component files
    app.config.*           # App configuration files
    app.routes.*           # App routing files
  assets/                  # Static assets and mock data
  index.html               # Main HTML entry point
  main.ts                  # Main application bootstrap
  main.server.ts           # Server-side entry point (if SSR)
  server.ts                # Server configuration (if SSR)
  styles.css               # Global styles
```

**Reasoning and Approach:**
- **Feature Modules:** Each major feature (e.g., DailyWidget, Occupancy, Weekday) is placed in its own folder, making it easy to develop, test, and maintain features independently.
- **SharedModule:** Common components (like charts) are grouped under `SharedModule` for reuse across the app, reducing code duplication.
- **Separation of Concerns:** Routing, configuration, and core app logic are separated into dedicated files for clarity and easier updates.
- **Scalability:** This structure supports adding new features or modules with minimal impact on existing code.
- **Assets:** Static files and mock data are kept in the `assets` folder, following Angular best practices.

This approach aligns with Angular's recommended best practices for large-scale applications, ensuring the codebase remains organized and maintainable as it grows.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.



