document.write("Hello from the js file!");
document.write("Check out my pyramid (made of punctuation)!");

/*
 0123456789 +hcount
0    /\
1   /__\
2  /____\
3 /______\
4/________\
 0123456789
+vcount

on pyramid: use "/" on left, "\\" on right
inside pyramid: use "_" hcount
outside pyramid: use " "

hcount-vcount==size  \
hcount+vcount+1==size /

if it's inbetween the / and \, then it's a _
hcount-vcount<size && hcount+vcount+1>size

*/

// todo: make it so the user can input a size through a form, hit submit, and the pyramid generates with the user's preferred size.
// add an option to make it a game

// todo: make a game with this that has the player inputting directions, and the pyramid has a template 2DTemplate[][] of the pyramid
// and when the player moves, the 2DTemplate[][] replaces the tiles the player moved from, and the player overrides the 2DMap[][]
var size=5;
for (vcount=0;vcount<size;vcount++) {
    document.write("<br />");
    for (hcount=0;hcount<size*2;hcount++) {
        if (hcount+vcount+1==size) // left side pyramid
            document.write("/")
        else if (hcount-vcount==size) // right side pyramid
            document.write("\\");
        else if (hcount-vcount<size && hcount+vcount+1>size) // left of pyramid's right side, and right of pyramid's left side (the inside)
            document.write("_");
        else // everything else (outside the pyramid)
            document.write("~");
    }   
}
console.log("kalakajdhf");
// let's make a 2DTemplate
function getTemplate2D(size) {
    var Template2D = new Array;
    for (vcount=0;vcount<size;vcount++) {
        for (hcount=0;hcount<size*2;hcount++) {
            if (hcount+vcount+1==size) // left side pyramid
                Template2D[hcount][vcount]="/";
            else if (hcount-vcount==size) // right side pyramid
                Template2D[hcount][vcount]="\\";
            else if (hcount-vcount<size && hcount+vcount+1>size) // left of pyramid's right side, and right of pyramid's left side (the inside)
                Template2D[hcount][vcount]="_";    
            else // everything else (outside the pyramid)
                Template2D[hcount][vcount]="~"; 
        }
    }
    // return the 2D template
    return Template2D;
}

function printTemplate2D() {

}