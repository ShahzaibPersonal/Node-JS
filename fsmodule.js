
const fs = require('fs')


ReadFile
 you are suppose to write  file name , encoding ,  ( error that existed into file, data in file)


fs.readFile('file.txt', 'utf-8', (err, data) => {
    /** 
     * TODO:  it works on non-blocking input output model
     *? that means only this function will be executed when data is ready to run else
     *? it will deffer the execution as long as data is not ready to run
     * */

    console.log("Error Status is => " + err, "\nFile Status => " + data)
})

/**
 * ! we are writing this console log below just to show 
 * !how non blocking model works at limitation of read file
 */

console.log(
    "Done reading file !! in case of simple read file function"
)


/**
 *!  sometimes we do want to stop everything until unless other our main task is performed in that case
 *! in that case we use read file sync
 */


const a = fs.readFileSync('file.txt')

console.log(a) // if we write simple this it will show data in form of hex value 
console.log(a.toString()) // IF WE WANT DATA IN REAL FORM WE USE toString() Method

console.log("Done reading file !! in case of readFileSync")
// Writefile



fs.writeFile("file2.txt", "This is data that is added through WriteFile", () => {
    console.log(
        "Data successfully written"
    )
})

console.log("This function is being run as demo to show\nthere is some code that was existing after that function execution ")



fs.writeFileSync("file2.txt", "This is data that is added through WriteFile")
console.log("This function is being run as demo to show\nthere is some code that was existing after that function execution ")