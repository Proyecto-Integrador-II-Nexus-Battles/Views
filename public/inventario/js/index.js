function index() {
    window.location.href = "/";
  }
  
if (localStorage.getItem('showmodal')) validateModal()

function validateModal() {
    const modal = document.getElementById('modal-toast')
    if (!modal) return
    modal.style.display = 'block'
    modal.classList.add('show')
    setTimeout(()=>{ 
        modal.classList.remove('show')
        modal.classList.add("hide");
    }, 5000);
    localStorage.removeItem('showmodal')
}

