// Handling errors
function handleErrors(response) {
    if (!response.ok) {
        document.getElementById("serverStatus").innerHTML = "cvbxcvb";
        document.getElementById("serverStatusM").innerHTML = "xcvbxcvb";
        document.getElementById("serverLogoName").classList.remove("hidden");
    }
    return response;
}

// Fetch API, mcsrvstat
fetch("https://api.mcsrvstat.us/{% if site.useBedrockForOnlineStatus == true %}bedrock/{% endif %}2/{{ site.serverIP }}")
    .then(handleErrors)
    .then(response => {
        return response.json();
    })