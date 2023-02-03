const menuOpener = document.querySelector('.menu-opener')
const menuCloser = document.querySelector('.menu-closer')
const modalCloser = document.querySelector('.model-closer')
const dropDown = document.querySelector('.drop-down')
const overlay = document.querySelector('.overlay')
const totle = document.querySelector('#totle')

const radioBtn = document.querySelectorAll('.radio-btn')
const article = document.querySelectorAll('.select-article')
const innerBtn = document.querySelectorAll('#inner-btn')
const outerBtn = document.querySelectorAll('#outer-btn')
const backProject = document.querySelector('#back-project')
const backers = document.querySelector('#totle-backers')
const selectModal = document.querySelector('.model-select')
const modalSuccess = document.querySelector('.model-success-container')

menuOpener.addEventListener('click', () => {
  menuClassAdd()
})
menuCloser.addEventListener('click', () => {
  menuClassRemove()
})

article.forEach(function (art) {
  const radioBtn = art.querySelector('.radio-btn')

  radioBtn.addEventListener('click', function (btn) {
    article.forEach(function (arte) {
      if (arte !== art) {
        arte.classList.remove('show-article')
      }
    })
    art.classList.toggle('show-article')
  })
})
outerBtn.forEach(function (oBtn) {
  oBtn.addEventListener('click', function () {
    modalSuccess.classList.add('show-success')
    overlay.classList.add('show-overlay')
    const gotBtn = modalSuccess.querySelector('#btn')
    gotBtn.addEventListener('click', function () {
      modalSuccess.classList.remove('show-success')
      overlay.classList.remove('show-overlay')
    })
  })
})
backProject.addEventListener('click', function () {
  addClasses()

  innerBtn.forEach(function (iBtn) {
    iBtn.addEventListener('click', function (e) {
      const curBtn = e.currentTarget
      const leftValue =
        curBtn.parentElement.parentElement.previousSibling.previousSibling
          .children[0]

      const inputFeild = curBtn.previousSibling.previousSibling

      const value = parseInt(inputFeild.value)
      let outerTotel = parseInt(totle.textContent)
      let newValue = outerTotel + value
      totle.textContent = `${newValue}`
      inputFeild.value = 0

      let backersI = parseInt(backers.textContent)

      let newBackerVlue = backersI + 1
      backers.textContent = newBackerVlue
      let decValue = leftValue.textContent - 1

      leftValue.textContent = decValue

      removeClasses()
      modalSuccess.classList.add('show-success')
      overlay.classList.add('show-overlay')
      const gotBtn = modalSuccess.querySelector('#btn')
      gotBtn.addEventListener('click', function () {
        modalSuccess.classList.remove('show-success')
        overlay.classList.remove('show-overlay')
      })
    })
    // const gotBtn = modalSuccess.querySelector('#btn')
    // gotBtn.addEventListener('click', function () {
    //   modalSuccess.classList.remove('show-success')
    //   overlay.classList.remove('show-overlay')
    // })
  })
})

modalCloser.addEventListener('click', () => {
  removeClasses()
})

function addClasses() {
  selectModal.classList.add('show-select-modal')
  overlay.classList.add('show-overlay')
}
function removeClasses() {
  selectModal.classList.remove('show-select-modal')
  overlay.classList.remove('show-overlay')
}

function menuClassAdd() {
  dropDown.classList.add('show-menu')

  menuCloser.classList.add('show')
  menuOpener.classList.add('hide')
  overlay.classList.add('show-overlay')
}

function menuClassRemove() {
  dropDown.classList.remove('show-menu')
  menuCloser.classList.remove('show')
  menuOpener.classList.remove('hide')
  overlay.classList.remove('show-overlay')
}
