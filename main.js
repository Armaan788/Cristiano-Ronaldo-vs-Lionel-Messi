var images=["https://asianews.network/wp-content/uploads/2022/12/ronaldo_vs_messi_photo-_ashif_ahmed_rudro.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkieJmKul-K5c90QtObI_jC9pZQOvX2BAu0ffjEboQYG4-YfJflOKHyU6o-YYqgfsAcxY&usqp=CAU"]

var i=0;
function nextslide()  {
    document.getElementById("snap").src= images[i];
    
    i++;
}