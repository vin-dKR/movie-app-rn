# React Native OTT App – Custom Data Source Approach

Inspired by [JavaScript Mastery: React Native Course for Beginners in 2025](https://www.youtube.com/watch?v=f8Z9JyB2EIE)  
Alternate data source: [Hugging Face - Full TMDB Movies Dataset](https://huggingface.co/datasets/ada-datadruids/full_tmdb_movies_dataset/tree/main)

---

## Project Overview

This project is an OTT-style React Native mobile app, based on the widely followed JavaScript Mastery course. The original tutorial demonstrates building a full-stack movie app using React Native (Expo) and the TMDB API as the backend data source. Due to issues with the TMDB API, a different method was adopted to enable robust and extensive data access for movies and TV series. At this moment writing this md file i see the TMDB works fine.

---

## Key Differences from the Course

- **Original Course:**  
  Fetches live movies data from the TMDB API using REST endpoints.

- **Custom Solution:**  
  - TMDB API access was unreliable or unavailable.
  - Instead, the [ada-datadruids/full_tmdb_movies_dataset](https://huggingface.co/datasets/ada-datadruids/full_tmdb_movies_dataset/tree/main) from Hugging Face was used.
  - This dataset provides over 1 million movie and TV series records from TMDB in downloadable, offline-ready format (e.g., CSV/JSON).
  - The entire dataset was downloaded and imported into a custom backend for optimal querying and scalability.

---

## Data Pipeline & Architecture

1. **Dataset Sourcing:**  
   The full TMDB movies dataset was obtained from [Hugging Face's ada-datadruids project](https://huggingface.co/datasets/ada-datadruids/full_tmdb_movies_dataset/tree/main).

2. **Database Backend:**  
   - Instead of querying a third-party API for each request, all data is managed in a personal Supabase instance.
   - This approach supports ultra-fast database queries and better user experience (no rate limiting, full text search, sorting, filtering, etc.).

3. **Data Loading:**  
   - All downloaded movie/TV show records were bulk-imported into a Supabase database, matching or extending the fields needed for the OTT app UI.

4. **Data Fetching in the App:**  
   - The app's React Native frontend fetches movie/show data directly from the Supabase backend.
   - Custom endpoints or Supabase's native querying APIs are used in place of TMDB's API.

---

## Technical Stack

- **Frontend:**  
  - React Native (Expo)
  - UI/UX inspired by the JavaScript Mastery OTT app build
  - NativeWind for styling (Tailwind-like CSS for React Native)

- **Backend:**  
  - Supabase (Postgres + API layer)
  - Database schema mirrors essential TMDB movie fields (title, year, genres, cast, overview, poster path, etc.)

- **Data Source:**  
  - Complete TMDB dataset provided by Hugging Face (`ada-datadruids/full_tmdb_movies_dataset`), not fetched live via API.

---

## Why This Approach?

- **Reliability:**  
  Bypasses API downtime, rate limits, and outages.
- **Performance:**  
  Optimized for app-specific queries with custom indexes and denormalized tables in Supabase.
- **Flexibility:**  
  Enables advanced filtering, recommendations, trending, and search algorithms directly on top of the full dataset.
- **Self-Hosted:**  
  Greater control over the data, privacy, and future extensibility.

---

## Limitations

- **Static Dataset:**  
  Data won't update automatically as TMDB releases new content, unless the dataset is periodically re-downloaded and refreshed.
- **Initial Setup Overhead:**  
  Downloading and importing a large dataset (~1M+ records) can require extra time and backend resources.

---

## Reference Resources

- [JavaScript Mastery – React Native Full-Stack App Course](https://www.youtube.com/watch?v=f8Z9JyB2EIE)
- [Hugging Face – Full TMDB Movies Dataset](https://huggingface.co/datasets/ada-datadruids/full_tmdb_movies_dataset/tree/main)
- [Supabase Docs (for setup and querying)](https://supabase.com/docs)

---

## Summary

This project showcases a resilient, scalable method for building an OTT app using React Native, leveraging a local Supabase database filled with the full TMDB dataset imported from Hugging Face. The result is a modern, robust app architecture—free from external API limitations yet providing all the rich metadata needed for a first-class movie discovery and streaming experience.

---

**Feel free to use, fork, or extend this approach for your own full-stack movie or OTT app projects!**

---

**Notes:**  
- Replace URI or path references above with your local repo or cloud database addresses as appropriate.  
- Add screenshots, database schema diagrams, or detailed setup scripts as needed to enrich the documentation.

---

