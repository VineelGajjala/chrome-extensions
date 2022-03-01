const generateHTML = () => {
    return ``
    ;
  };
  
  const generateSTYLING = () => {
    return ``
      ;
  };

  


const today = new Date();
const current_time = today.getHours();
switch (window.location.hostname) {
  case "www.facebook.com":
    if (current_time >= 0 && current_time < 6) {
      document.head.innerHTML = generateSTYLING();
      document.body.innerHTML = generateHTML();
    }
    break;
  case "www.netflix.com":
    if (current_time >= 0 && current_time < 6) {
      document.head.innerHTML = generateSTYLING();
      document.body.innerHTML = generateHTML();
    }
  case "www.youtube.com":
    if (current_time >= 0 && current_time < 6) {
      document.head.innerHTML = generateSTYLING();
      document.body.innerHTML = generateHTML();
    }
    break;
}

