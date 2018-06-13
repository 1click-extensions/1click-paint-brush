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

 chrome.runtime.onMessage.addListener(function (data, sender, callback) {
  //console.log(sender)
  switch (data.data) {
      case 'createImg':
        console.log(screenshot.canvas);
        screenshot.canvas.width = data.width;
        screenshot.canvas.height = data.height;
        chrome.tabs.create({url: chrome.extension.getURL('editor.html') + '#last'});
        break;
    }
});
