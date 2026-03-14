import fs from "fs";
// Create a file using fs module
fs.writeFile('hello.txt', "Hello, my name is Pratik. I am learning node js backend",() => {})

// Read a file
fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log(data)
    }
})


// Append data to file
fs.appendFile('hello.txt', '\nToday I learn fs module', () =>{})


// Remove file name (hello.txt -> about.txt)
fs.rename('hello.txt', 'about.txt', () => {})


// Deleting file
fs.unlink('../FS_Modules/about.txt', (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("file deleted successfully")
    }
})


fs.console