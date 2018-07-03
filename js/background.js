chrome.runtime.setUninstallURL("https://1ce.org");

if (!localStorage.created) {
  chrome.tabs.create({ url: "https://1ce.org" });
  var manifest = chrome.runtime.getManifest();
  localStorage.ver = manifest.version;
  localStorage.created = 1;
}
// chrome.browserAction.onClicked.addListener(function(tab){
//   console.log('clicke');
//   screenshot.canvas 
  
//   //chrome.tabs.create({"url" : chrome.runtime.getURL('pages/upload.html')});
// //  screenshot.createBySimpleImg('    ', 700, 700);  
//  });
localStorage['pngjpg'] = "png";
chrome.browserAction.onClicked.addListener(function (data, sender, callback) {
  //console.log(sender)
  // switch (data.data) {
  //     case 'createImg':
      
        if(!screenshot.canvas){
          screenshot.canvas = document.createElement('canvas');
        }

        screenshot.canvas.width = window.screen.availWidth - 50;
        screenshot.canvas.height = window.screen.availHeight - 250;
        chrome.tabs.create({url: chrome.extension.getURL('editor.html') + '#last'});
    //     break;
    // }
});
