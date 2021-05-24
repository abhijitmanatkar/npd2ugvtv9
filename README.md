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
