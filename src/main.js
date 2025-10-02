import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="bg-white rounded-md shadow-2xl p-3 m-4">
  <img class="rounded-lg" src="assets/images/illustration-article.svg">
  <div class="bg-amber-200 inline-block p-1 text-sm my-1 rounded-md font-bold">Learning</div>

  <div class="text-[11px] font-bold">Published 21 Dec 2023</div>

  <div class="font-bold py-2">HTML & CSS foundations</div>

  <div class="font-light text-[11px]">These languages are the backbone of every website, defining structure, content, and presentation.<div>

  <div class="flex my-4 items-center gap-x-2"><img src="assets/images/image-avatar.webp" class="size-7 rounded-full "><span class="font-extrabold">Greg Hooper</span></div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
