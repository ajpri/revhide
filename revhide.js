//Creating Elements
var btn = document.createElement("BUTTON")
var t = document.createTextNode("RevHide is armed!");
btn.appendChild(t);
//Appending to DOM 
document.body.appendChild(btn);

window.addEventListener("load", function(){
    // 
    var jobPostings = document.querySelectorAll("[class^=tapItem]");
    //console.log(jobPostings);
    var jobArr = [...jobPostings];
    for (i=0;i<jobArr.length;i++){
        //console.log(jobArr[i].id);
        if (document.getElementById(jobArr[i].id).innerHTML.indexOf("Revature") != -1) { 
            document.getElementById(jobArr[i].id).remove();
        }
    }
});

// Class 
// tapItem fs-unmask result job_a375ac4c2d4b22eb sponsoredJob resultWithShelf sponTapItem desktop vjs-highlight
