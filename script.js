//resume download
document.addEventListener("DOMContentLoaded", function() {
    var downloadButton = document.getElementById("downloadButton");
    
    downloadButton.addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = "208R1A66D3 Dudi vinay venkata sai durga avinash.pdf";
        link.download = "resume.pdf";
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
