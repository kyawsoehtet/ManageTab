function updateCount(tid, isOnRemoved) {
    browser.tabs.query({})
    .then((tabs) => {
      let lengths = tabs.length;

      if (isOnRemoved && tabId && tabs.map((t) => { return t.id; }).includes(tid)) {
        lengths--;
      }

      browser.browserAction.setBadgeText({text: lengths.toString()});
      if (lengths < 5) {
          browser.browserAction.setBadgeBackgroundColor({'color': '#16a085'});
      } else if (lengths > 10){
          browser.browserAction.setBadgeBackgroundColor({'color': '#16a085'});
      } else {
          browser.browserAction.setBadgeBackgroundColor({'color': "#16a085"});
      }
    });
  }


  browser.tabs.onRemoved.addListener(
    (tid) => { updateCount(tid, true);
  });
  browser.tabs.onCreated.addListener(
    (tid) => { updateCount(tid, false);
  });
  updateCount();
