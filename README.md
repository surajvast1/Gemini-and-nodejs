---

# Gemini AI-Powered Content Generator

Gemini is an AI-powered content generator built using Node.js and Google's Generative AI. It allows you to generate content by providing prompts through HTTP requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Obtaining API Key](#obtaining-api-key)
- [Making a POST Request](#making-a-post-request)
- [Additional Notes](#additional-notes)

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/gemini-content-generator.git
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

Once the installation is complete, you can start the server using the following command:

```bash
npm run start
```

This will start the server, and you'll be able to make HTTP requests to generate content.

## Setting Up Environment Variables

The project uses environment variables to securely store sensitive information such as API credentials. To set up environment variables, create a `.env` file in the root directory of the project and add the following variables:

```plaintext
API_KEY=YOUR_API_KEY
PORT=3000
```

Replace `YOUR_API_KEY` with the API key obtained from Google Developers Console.

## Obtaining API Key

Before using Gemini, you need to obtain an API key from Google Developers Console. Follow these steps:

1. Sign in to your Google account.
2. Go to https://makersuite.google.com/app/apikey.
3. Create an API key.
4. Replace `YOUR_API_KEY` in the `.env` file with the API key you obtained.

## Making a POST Request

To generate content using Gemini, make a POST request to `http://localhost:3000/generate` with the following JSON payload:

```json
{
  "prompt": "Give information on burger king in india"
}
```

You will receive a response with the generated content.

## Additional Notes

- Customize the prompt in the JSON payload according to your requirements.
- Ensure that your `.env` file is properly configured with the API key and port.
- You can modify the server port in the `.env` file if needed.

---
