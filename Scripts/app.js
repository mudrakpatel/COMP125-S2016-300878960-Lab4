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
(function () {
    /**
     * Hooking needed elements on the webpage using javascript
     */
    var h1 = document.getElementById("h1");
    h1.innerHTML = "Console Checking Form";
    var legend = document.getElementById("legend");
    legend.innerHTML = "300878960";
    var form = document.getElementById("form");
    var username;
    var password;
    var submitButton = document.getElementById("submitButton");
    submitButton.innerHTML = "Login";
    
    form.addEventListener('submit', function (e) {

        //prevent the normal submission of the form
        e.preventDefault();
        console.log("App Started");
        /**
         * @ creating object UserObject
         */
        var UserObject = {
            UserName : document.getElementById("username").value,
            Password : document.getElementById("password").value
        }
        console.log(UserObject.UserName);
        console.log(UserObject.Password);
    });
})();