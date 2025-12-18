// ِDate
let date = Date.now();
let dateFormat = new Intl.DateTimeFormat("fa").format(date);
document.querySelector("#date").innerHTML = dateFormat;

function openContents(evt, iran) {
  var i, tabcontentlast, tablinkslast;
  tabcontentlast = document.getElementsByClassName("tabcontentlast");
  for (i = 0; i < tabcontentlast.length; i++) {
    tabcontentlast[i].style.display = "none";
  }
  tablinkslast = document.getElementsByClassName("tablinkslast");
  for (i = 0; i < tablinkslast.length; i++) {
    tablinkslast[i].className = tablinkslast[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(iran).style.display = "grid";
  evt.currentTarget.className += " active";
}

// Iran News
let url_iran = ['https://www.zoomit.ir/feed/', 'https://digiato.com/feed/', 'https://techna.news/feed', 'https://www.technolife.ir/blog/feed/'];
let textarea_iran = document.querySelectorAll(".feed-textarea-iran");
for (let i = 0; i <= url_iran.length; i++) {
  feednami.load(url_iran[i])
    .then(feed => {
      textarea_iran[i].value = '';
      for (let entry of feed.entries) {
        let li = document.createElement('li');
        var time = new Date(entry.pubDate);
        var hr = time.getHours().toString().padStart(2, 0)
        var min = time.getMinutes().toString().padStart(2, 0)
        li.innerHTML = `<a href="${entry.link}" target="_blank">${entry.title}<span>${hr}:${min}</span></a>`;
        textarea_iran[i].appendChild(li);
      }
    });
}

// Foreign News
let url_out = ['https://www.cnet.com/rss/all/', 'https://www.wired.com/feed', 'https://www.techradar.com/rss', 'https://techcrunch.com/feed/'];
let textarea_out = document.querySelectorAll(".feed-textarea-out");
for (let i = 0; i <= url_out.length; i++) {
  feednami.load(url_out[i])
    .then(feed => {
      textarea_out[i].value = '';
      for (let entry of feed.entries) {
        let li = document.createElement('li');
        var time = new Date(entry.pubDate);
        var hr = time.getHours().toString().padStart(2, 0)
        var min = time.getMinutes().toString().padStart(2, 0)
        li.innerHTML = `<a href="${entry.link}" target="_blank">${entry.title}<span>${hr}:${min}</span></a>`;
        textarea_out[i].appendChild(li);
      }
    });
}
