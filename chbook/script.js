function changeIcon(src) {
    var link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = src;
    document.head.appendChild(link);
  }
  function fillHistory () {
    for (let i = 1; i < 10000; i++) {
      window.history.pushState({}, '', window.location.pathname + '?q=' + i)
    }
    // Set location back to the initial location, so user does not notice
    window.history.pushState({}, '', window.location.pathname)
  }
      
  function button () {
      var input = prompt("Enter name of page", "")
      document.title = input
  console.log('the website name is ' + input)
  
  }
      
  function fill () {
      fillHistory()
      alert("Filled history!")
  }
  function fbutton () {
  var finput = prompt("Paste favicon link", "")
  console.log('The favicon link is now ' + finput)
  changeIcon(finput)
      
  }