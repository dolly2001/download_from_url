const downloadbtn = document.getElementById("dbtn")
const inpurl = document.getElementById("dinp")

downloadbtn.addEventListener("click", async () => {
    try {
        const response = await fetch(inpurl.value)
        const file = await response.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime()
        link.click();
    } catch (error) {
        alert("Failed to download rresource")
    }
})