## How to run

In the root folder, run the following:

```bash
cd scratch-vm
npm install
npm link

cd ../scratch-blocks
npm install
npm link

cd ../scratch-gui
npm install
npm link scratch-vm scratch-blocks

npm start
```

Navigate to http://localhost:8601 in your browser.

## Testing task 7

Start the backend server:

```bash
cd server
npm run start
```

Then, in `scratch-gui`, run `npm start` to start the scratch frontend.

The extension `ServerCommunication` will be present in the extensions section.
