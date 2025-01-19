function slugify(title) {
    // tabnine solution better because it can account for punctuation characters
    // return title.toLowerCase().replace(/[^a-z0-9-]+/g, '-');

    return title.toLowerCase().split(' ').join('-');
}



console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"