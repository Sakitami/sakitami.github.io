// build time:Sat Aug 10 2019 21:47:57 GMT+0800 (GMT+08:00)
window.onload=function(){var t=document.querySelector(".hitokoto");var e=document.querySelector(".from");o();function o(){gethi=new XMLHttpRequest;gethi.open("GET","https://v1.hitokoto.cn");gethi.send();gethi.onreadystatechange=function(){if(gethi.readyState===4&&gethi.status===200){var o=JSON.parse(gethi.responseText);t.innerHTML=o.hitokoto;e.innerHTML="from: <b>"+o.from+"</b>"}}}};
//rebuild by neat 