//fetching from meme data
async function fetchmeme() {
  try {
    const res = await fetch("https://api.imgflip.com/get_memes");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data.data.memes;
  } catch (error) {
    console.error("Error fetching todo data:", error);
    return null;
  }
}
//fetchmeme();

//display data in the DOM
async function displayMemeData() {
  const memeData = await fetchmeme();
  if (memeData) {
    const appele = document.querySelector("#app");
    memeData.map((mem) => {
      const memdiv = document.createElement("div");
      const memele = document.createElement("p");
      const meimg = document.createElement("img");
      meimg.src = mem.url;
      // Set the width and height attributes (adjust as needed)
      meimg.width = 200;
      meimg.height = 200;
      memele.innerText = `${mem.id}: ${mem.name}`;
      memdiv.append(memele, meimg);
      appele.append(memdiv);
    });
  }
}
displayMemeData();
