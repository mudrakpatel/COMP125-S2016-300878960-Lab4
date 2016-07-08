/**
 * @ author : Mudrak Patel
 * @ student number : 300878960
 * @ fileName : app.js
 * @ Lab4
 * @ comp125
 * @ summer 2016, centennial college
 */

/**
 * This is an self executing function
 * A.K.A IFEE
 */
(function() {
    /**
     * Hooking needed elements on the webpage using javascript
     */
    var h1=document.getElementById("h1");
    h1.innerHTML="Console Checking Form";
    var legend=document.getElementById("legend");
    legend.innerHTML="300878960";
    var form=document.getElementById("form");
    var username=document.getElementById("username").nodeValue;
    var password=document.getElementById("password").nodeValue;
    var submitButton=document.getElementById("submitButton");
    submitButton.innerHTML="Login";	
    /**
     * Adding event listener to button element present on the webpage
     */
    submitButton.addEventListener("click",buttonIsClicked);
    function buttonIsClicked() {
        console.log("App Started");
        
        var UserObject = new Object();
        UserObject.userName=username;
        UserObject.Password=password;
        console.log(UserObject.userName);
        console.log(UserObject.Password);
    }
})();