import qr from "qr-image";
import fs from "fs";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
        message:"Type in your URL: ",
        name:"URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;  // get the url
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("image-url.txt", url, (err) =>{
        if (err) throw err;
        console.log("The image has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });