let login = document.forms.login 

    login.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(login)

    fm.forEach((value, key) => {
        user[key] = value

    })


    console.log(user);
}

let exampleForm = document.forms.login
let reuiredInps = document.querySelectorAll(".required")

exampleForm.onsubmit = (event) => {
   event.preventDefault()
   let isError = false

   reuiredInps.forEach((inp) => {
      inp.classList.remove('error')

      if (inp.value.length === 0) {
         inp.classList.add('error')
         inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
         isError = true
      }
   })
   if(isError === true){
   } else {
      submit()
   }
}

function submit() {
   let user = {}
   let fm = new FormData(exampleForm)

   fm.forEach((value, key) => {
       user[key] = value
   })

   console.log(user)
}


