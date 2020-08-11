# Mock API to test the Advanced HTTP Forge component
A simple API meant to be run on Firebase. Follow the steps below to get it running.

## Setup

Setup Firebase tool by following [this link](https://firebase.google.com/docs/cli). Checkout this repository and initialize Firebase.

```bash
> cd outsystems-http-mock-api
> firebase login
> firebase init
```
Setup a new project and deploy.

```bash
> firebase deploy
```

Congratulations, your API is up and running! You will get a URL like below.

```
http://<your-firebase-project>/api
```
## Run Locally

You can also run this API locally by using the following command:

```bash
> firebase serve --host 0.0.0.0
```

You can access it like below.

```
http://<your-local-ip>:5000/outsystems-advanced-http-api/us-central1/api
```

## Service Center

Copy your firebase url and set it as the `ApiEndpoint` site properties. More info about Outsystem's site properties [here](https://success.outsystems.com/Documentation/11/Developing_an_Application/Use_Data/Use_Site_Properties_to_Configure_Behaviors_at_Runtime).
