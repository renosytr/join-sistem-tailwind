// DOM manipulation, Dokumen Object Model

// Class Name
const title = document.getElementsByClassName("judul-utama")
title[0].innerHTML = "Join Sistem"
title[0].classList.add("lowercase")
title[0].classList.remove("text-white")
title[0].setAttribute("time", "1000")

const color = title[0].getAttribute("color")
title[0].style.color = color

// Event Handling
let isClick = false
title[0].addEventListener("click", () => {
  if(isClick == true) {
    title[0].style.color = color
    title[0].style.transition = "0.25s ease-in-out"
    isClick = false
  } else {
    title[0].style.color = "red"
    title[0].style.transition = "0.25s ease-in-out"
    isClick = true
  }
})

let mainNavbar = document.querySelector('.main-navbar')
mainNavbar.addEventListener("mouseover", () => {
  mainNavbar.style.backgroundColor = "rgb(163 230 53)"
})

mainNavbar.addEventListener("mouseout", () => {
  mainNavbar.style.backgroundColor = "rgb(248 113 113)"
  mainNavbar.style.transition = "0.25s ease-in-out"
})

//  Function
const fetchData = (callback) => {
  // console.log("panggilan pertama")
  setTimeout(() => {
    callback()
  }, 2000)
}

// Callback
// fetchData(() => {
//   console.log("Notifikasi: Call back telah selesai")
// })


// Promise
const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // AJAX Request
      const url = "https://example.org/products.json"; // contoh API endpoint
      const response = fetch(url); // eksekusi pengambilan data dari API

      if(response.ok) {
        resolve("OK")
      } else {
        reject(`Response status: ${response.status}`)
      }
    }, 2000)
  })
}

fetchDataPromise()
  .then((result) => {
    // terpanggil ketika resolve dipanggil
    console.log("proses then", result)
  })
  .catch((error) => {
    // terpanggil ketika reject dipanggil
    console.log("proses catch", error)
  })

  // Async/Await
  const fetchDataAsync = async () => {
    // code block akan dipanggil secara paralel
    setTimeout(() => {
      console.log("panggilan pertama 1000ms")
    }, 1000)
    setTimeout(() => {
      console.log("panggilan kedua 500ms")
    }, 500)
  }

  // fetchDataAsync().then(() => {
  //   console.log("Notifikasi: Async telah selesai")
  // })