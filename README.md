# Find Words

This project was created as a take-home assignment for a job opportunity.

## Introduction

This app lets users enter a string of letters and returns valid English words that can be created using only the given letters.

#### Run `npm install`

This will install all necessary dependencies.

#### Run `npm start`

This will run the app on [http://localhost:3000](http://localhost:3000) by default.

## Usage

- User can only enter valid english letters (A_Z or a-z).
- The input is not case-sensitive.
- Numbers, spaces, and special characters are not allowed.
- Minimum of 2 letters are needed to submit the search.
- Maximum of 5 letters can be entered due to runtime and daily usage limits of WordsAPI.
- Searching "oodg" returns more valid words than given in the description. 
  - example: "dg" is a valid abbreviation of director general.

## Roadmap

- Maintain search history through local storage.
- Add word definitions.
- Find another API that allows batch queries to improve performance.
- API key can be hidden but not necessary for current implementation since it's free and has a daily limit.

## Optimization

In order the optimize this app for production, it may be possible to implement a multi-way search tree.

  - Download all dictionary data (~ 385,000 words).
  - Restructure all data as a M-way tree and save to own database.
  - For each user query, retrieve all data in a single DB call.
  - Search through M-way tree to find valid words without having to generate all possible combinations first.
    - example: if our input is "fodg", if there are no words starting "dg", then it is no longer necessary to look up "dgo, dgf, dgof, dgfo, etc."
  - The time complexity of this method would be O(log m (n)), instead of the current implementation, which is O(n²).
  - This method could allow the search of more than 5 letters without a serious compromise to user experience.
