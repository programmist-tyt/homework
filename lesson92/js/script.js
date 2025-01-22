const modalOpener = document.querySelector('.modal-open-btn')

const modalWrapper = document.querySelector('.modal')

modalOpener.addEventListener('click', () =>{
  modalWrapper.classList.add('modal-open')
})

modalWrapper.addEventListener('click', event =>{

  const target = event.target

  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
    modalWrapper.classList.remove('modal-open')
  }
})
