# OpenAI Image Generator

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/img/screen.png" width="500">

[![Netlify Status](https://api.netlify.com/api/v1/badges/99790e84-1993-4562-ab82-28ec473d2180/deploy-status)](https://app.netlify.com/sites/wilson-nodejs-openai-image/deploys)

## Usage

Rename the `example.env` file to `.env`.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:5000` in your browser.

The endpoint is at `POST http://localhost:5000/openai/generateimage`.
