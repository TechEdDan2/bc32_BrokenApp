const fs = require('fs');
const process = require('process');
const axios = require('axios');
/**
 * This is a command-line tool to read url text 
 * and return data from the URLs.
 */
if (require.main === module) {
    const inputPath = process.argv[3] || './urls.txt';
    retrieveURL(inputPath);
}

/**
 * The RetrieveURL function will read the file at the 
 * given path and parse out the URLs, then call myWebCat 
 * for each URL.
 * 
 * @param {string} path - The path to the file containing URLs
 */
function retrieveURL(path) {
    fs.readFile(path, 'utf-8', function (err, data) {
        if (err) {
            console.log(`Error reading file located at: ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
            //parse out the lines to create an array of urls
            const myURLs = data.split('\n').map(line => line.trim()).filter(line => line !== '');
            console.log(myURLs);

            for (const url of myURLs) {
                myWebCat(url);
            }

        }
    });
}

/**
 * myWebCat will retrieve the HTML content of the given URL
 * 
 * @param {*} url - The URL of the Website 
 */
async function myWebCat(url) {
    try {
        let res = await axios.get(url);
        // Extract domain name for filename
        let domainName;
        try {
            domainName = new URL(url).hostname;
            if (domainName.startsWith('www.')) {
                domainName = domainName.slice(4);
            }
        } catch (e) {
            domainName = 'output';
        }
        // Remove the TLD (e.g., .com, .org) for the filename
        const baseName = domainName.split('.')[0];
        const fileName = `./my-html/${baseName}.html`;
        /* At the end of working on this part of the
            assignment, I had Copilot check for any bugs, 
            it said the would be an error if no directory 
            exists
        */
        const dir = './my-html';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        createMyFile(res.data, fileName);
    } catch (err) {
        console.log(`Error returning your requested URL: ${url}: ${err}`);
    }
}

/**
 * The createMyFile function will create a file with 
 * the given text at the specified pathName, or print 
 * to console if no pathName is provided.
 * 
 * @param {*} text - The text content to write 
 * @param {*} pathName - The file path to write to
 */
function createMyFile(text, pathName) {
    if (pathName) {
        fs.writeFile(pathName, text, 'utf-8', function (err) {
            if (err) {
                console.log(`Error writing to ${pathName}: ${err}`);
                process.exit(1);
            } else {
                console.log(`Saved HTML to ${pathName}`);
            }
        });
    } else {
        console.log(text);
    }
}