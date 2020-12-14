marked.setOptions({
    breaks: true
});

function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markDownText = marked(editorValue);
    previewElement.innerHTML = markDownText;
}

function placeHolder() {
    let placeHolderText = `# Header
## Sub-Header

This link takes you to the [freeCodeCamp](https://freecodecamp.org) website.

When you type \`console.log(\"Hello world!")\` the string will appear in your console.

\`\`\` 
function thisIsACodeBlock(){
	return console.log(\'A string or some more code.\')
}
\`\`\`

<dl> 
<dt>You can add a list</dt>
<dd>Inline</dd>
<dd>Like this one</dd>
</dl>

### Or you can make a list:
- Like 
- This
- One
	- And Even
	- Add More
- Items

You can make text standout by making the font **BOLD.**

> You can also share your favorite quotes. 

![Wear Your Mask](http://www.simpleimageresizer.com/_uploads/photos/66e82fc8/jon-tyson-7x13D6qqOho-unsplash_50.jpg)
`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = placeHolderText;
    previewElement.innerHTML = marked(placeHolderText);
}