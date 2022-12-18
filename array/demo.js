/** Adds an image with a random link */
const urls = ["https://link-1.com/", "https://link-2.com/", 
"https://link-3.com/", "https://link-4.com/", "https://link-5.com/"];
const person = {
  id:1,
  name:"user name",
  age:22,
};
const rId = Math.round(Math.random() * urls.length - 1);
const uploadedImg = {...person, image:urls[rId] };
console.log(uploadedImg);
