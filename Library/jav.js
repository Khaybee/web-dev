let btns = document.querySelectorAll("#book-list .delete")

btns.forEach(function (btn) {
     btn.addEventListener('click', function(e) {
          const li = e.target.parentElement
          li.parentNode.removeChild(li)
     })
})