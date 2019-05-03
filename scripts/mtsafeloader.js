// Sample MTCaptcha Config
// mtcaptchaConfig = {
//     "sitekey": "<Replace with your sitekey>", 
//     "render": "explicit", <This will make sure your captcha will not be rendered by default>
//     "renderQueue": []
//   };
(function(){
    //Time to wait for the recaptcha to load.  If the recaptcha does not load
    //MTCaptcha will be rendered
    var waitTime = 5000;
    setTimeout(checkIfRecaptchaLoaded, waitTime);

    function checkIfRecaptchaLoaded(){
        if(window.grecaptcha) return;

        if(window.mtcaptcha && window.mtcaptchaConfig){
            removeRecaptcha(); 
            showMTCaptcha(); 
            renderMT(); 
        }
    }
    //Remove all the instance of Recaptcha
    function removeRecaptcha(){
        var e1 = window.document.getElementsByClassName("g-recaptcha");
        var e2 = window.document.getElementsByClassName("g-recaptcha-response"); 
        var e1Count = e1.length;
        var e2Count = e2.length;
        //Remove recaptcha container
        for (var i = 0; i < e1Count; i++) {
            e1[0] !== undefined && e1[0].parentNode.removeChild(e1[0]);
        }
        //Remove recaptcha response container
        for (var i = 0; i < e2Count; i++) {
            e2[0] !== undefined && e2[0].parentNode.removeChild(e2[0]);
        }
    }

    // Make MTCaptcha Visible
    function showMTCaptcha(){
        var mt = window.document.getElementsByClassName("mtcaptcha");
        for (var i = 0; i < mt.length; i++) {
            mt[i] !== undefined && mt[i].setAttribute("style", "")
        }
    }

    //Render MTCaptcha
    function renderMT(){
        // mt1 is the id of the container where MTCaptcha will render
        window.mtcaptchaConfig.renderQueue.push('mt1');
    }

})()