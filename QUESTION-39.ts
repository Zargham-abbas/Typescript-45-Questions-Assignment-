// Zargham Abbas
// zarghamabbas859@gmail.com
// 0334-3591835

//                                        Question 39 of 45 Questions


// QUESTION NO:39
// Album: Create objects for music albums.
function make_album(artist:string , title:string , tracks:number) {
    let album = { artist , title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One","The First Album",1));
console.log(make_album("Artist two","The Second Album",2));
console.log(make_album("Artist Three","The third Album",3));