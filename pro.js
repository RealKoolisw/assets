(function() {
let funCaptchaToken = null;
const localeToFunCaptchaLanguageCodeMap = {
    "de-de": "de",
    "en-us": "en",
    "es-es": "es",
    "fr-fr": "fr",
    "pt-br": "pt-br",
    "ko-kr": "ko",
    "zh-cn": "zh",
    "zh-tw": "zh-tw",
    "ja-jp": "ja"
};
const userLocation = new Roblox.Intl();
function showFunCaptchaInModal() {
    Roblox.Dialog.open({
        bodyContent: '<div id="funcaptcha-container" class="funcaptcha-modal-body"></div>',
        allowHtmlContentInBody : true,
        showAccept: false,
        showDecline: false,
        xToCancel: false
    });
    const modalDialog = document.getElementById("modal-dialog");
    modalDialog.style.width = "330px";
};
 
function renderFuncaptcha() {
    showFunCaptchaInModal();
    new ArkoseEnforcement({
        public_key : "476068BF-9607-4799-B53D-966BE98E2B81",
        target_html : "funcaptcha-container",
        language : localeToFunCaptchaLanguageCodeMap.hasOwnProperty(userLocation.locale) ? localeToFunCaptchaLanguageCodeMap[userLocation.locale] : "en",
        data : {
            blob : null
        },
        async callback(e) {
            console.clear()
            console.log('You\'ve completed the challenge. Please wait moment.')
            funCaptchaToken = e
          	console.log(e)
 
            setTimeout(() => Roblox.Dialog.close() , 1000)
        },
        onsuppress() {
            setTimeout(() => {
                if(!funCaptchaToken) {
                    Roblox.Dialog.close()
                    showFunCaptchaInModal()
                }
            } , 1000)
        },
        loaded_callback() {
            console.clear()
        }
    });
};
 
function run(){
setTimeout(renderFuncaptcha , 1000)
};
})()
