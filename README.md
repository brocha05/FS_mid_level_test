# FS_mid_level_test by Jorge Dávalos

## Installation

After you have cloned the repository, open a command prompt and navigate to the directory and install the necessary dependencies by running:
```
npm install
```
Then make sure to compile the typescript files so that they can be executed by Node with the following command:
```
npm run compile
```
A folder called dist will be created where the already compiled js files will be.
Now you can run each file using the following commands:
```
node ./dist/src/missingNumbers
node ./dist/src/findIndexTarget
```
Or you can use a script that runs both files at the same time with:
```
npm run start
```
To run the tests, just execute the following command:
```
npm run test
```
And in general those would be all the steps to run this project :)
