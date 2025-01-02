// Function to apply text formatting (bold, italic, underline, etc.)
function formatText(command) {
    document.execCommand(command, false, null);
}

// Function to clear the editor content
function clearEditor() {
    document.getElementById("textEditor").innerHTML = "";
}
