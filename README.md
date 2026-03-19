# 🌤️ Angular Weather App

A modern, responsive weather application built with Angular 21 that provides real-time weather data and 4-day forecasts for any city in the world.

## 📸 Screenshots
<img width="956" height="418" alt="image" src="https://github.com/user-attachments/assets/e286c998-60f9-4418-8ec4-6975ad4424e1" />
<img width="818" height="418" alt="image" src="https://github.com/user-attachments/assets/c83be7bb-1015-4245-a3e5-b09d822dec68" />
<img width="623" height="415" alt="image" src="https://github.com/user-attachments/assets/f3c21152-5587-4580-97b5-31062b7511fd" />
<img width="795" height="271" alt="image" src="https://github.com/user-attachments/assets/6072a616-a6fc-4ffe-a605-e762c4a22302" />
<img width="756" height="238" alt="image" src="https://github.com/user-attachments/assets/5b8b94f0-f67c-4ae7-bd08-c397358912aa" />
<img width="779" height="242" alt="image" src="https://github.com/user-attachments/assets/bb21a237-7ba5-4ff2-92a5-be56aa009766" />
---

## ✨ Features
- 🔍 Search weather by city name
- 🌡️ Current temperature with feels like
- 💧 Humidity, wind speed and visibility details
- 📅 4-day weather forecast
- 🔄 Toggle between °C and °F
- ⚡ Built with Angular Signals (modern reactive state)
---
## 🛠️ Tech Stack

| Angular 21 | Frontend Framework |
| Angular Material | UI Components |
| Angular Signals | State Management |
| Open-Meteo API | Weather Data (free, no API key) |
| SCSS | Styling |
| TypeScript | Language |
---
## 🌐 API
This app uses [Open-Meteo](https://open-meteo.com/) — a completely free weather API that requires **no API key and no signup**.
- Geocoding API → converts city name to coordinates
- Forecast API → returns current weather + 4-day forecast
---
## 📁 Project Structure
```
src/app/
├── services/
│   └─── weather.service.ts       # API calls
│       └── weather-state.service.ts # Global signals state
│
├── components/
│   ├── header/
│   ├── search/
│   ├── weather-card/
│   └── footer/
│
├── model/
│   └── weather.model.ts
│
└── utils/
    └── weather-condition.ts
```
---

## ⚙️ Installation & Setup
### Prerequisites
- Node.js 18+
- Angular CLI
### Steps
1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app
```
2. Install dependencies
```bash
npm install
```
3. Run the app
```bash
ng serve
```
4. Open your browser
```
http://localhost:4200
```
> No API key needed! The app works out of the box.
---

## 🏗️ Architecture

This app uses a **Signal-based state management** pattern:
- `WeatherStateService` holds all app state as readonly signals
- `SearchComponent` **writes** to state (setLoading, setData, setError)
- `AppComponent` and `WeatherCardComponent` **read** from state
- Components never write to state directly
---

## 📖 What I Learned

- Angular Signals and computed state
- Reactive state management with a shared service
- API integration with RxJS switchMap
- Angular Material component styling
- Responsive UI design with SCSS

---

## 🔮 Future Improvements

- [ ] Hourly forecast
- [ ] Search history
- [ ] Geolocation support
- [ ] Dark/Light theme toggle
- [ ] Weather alerts

---
