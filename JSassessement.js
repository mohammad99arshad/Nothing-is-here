// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eye_color, shirt_type, bling) {
    const NFT = {
        "names" : name,
        "eyecolors" : eye_color,
        "shirtTypes" : shirt_type,
        "blings" : bling
    }
    NFTs.push(NFT);
    console.log("Minted: " + name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID: \t\t" +(i+1));
        console.log("Name: \t\t" +NFTs[i].names);
        console.log("Eye Color: \t" +NFTs[i].eyecolors);
        console.log("Shirt Type: " +NFTs[i].shirtTypes);
        console.log("Bling: \t\t" +NFTs[i].blings);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" +NFTs.length);
}
// call your functions below this line
mintNFT("Arsh", "Blue", "Burger", "Gold chain");
mintNFT("Sid", "Red", "Noodle", "Silver chain");
mintNFT("Asim", "Black", "Chicken", "Gold chain");
listNFTs();
getTotalSupply();
