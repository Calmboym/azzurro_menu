const placeholderImgs = [
  "placeholder1.jpg",
  "placeholder2.jpg",
  "placeholder3.jpg"
];
/* data: categories and items (from your list) */
const categories = [
  { id:'hot', title:'نوشیدنی گرم بر پایه قهوه', items:[
    {name:'اسپرسو',price:'86,000', img:'images/espresso.jpg'},
    {name:'اسپرسو ماکیاتو',price:'0,000', img:'images/macchiato.jpg'},
    {name:'کورتادو',price:'108,000', img:'images/cortado.jpg'},
    {name:'فلت وایت',price:'0,000', img:'images/flatwhite.jpg'},
    {name:'لاته',price:'124,000', img:'images/latte.jpg'},
    {name:'فلیور لاته',price:'0,000', img:'images/flavorlatte.jpg'},
    {name:'اسپانیش لاته',price:'0,000', img:'images/spanishlatte.jpg'},
    {name:'موکا',price:'138,000', img:'images/mocha.jpg'},
    {name:'آمریکانو',price:'98,000', img:'images/americano.jpg'},
    {name:'آفوگاتو',price:'138,000', img:'images/affogato.jpg'},
    {name:'آتزور کافی (ویژه)',price:'0,000', img:'images/azzurro-special.jpg'}
  ]},
  { id:'cold', title:'نوشیدنی سرد بر پایه قهوه', items:[
    {name:'آیس اسپرسو',price:'98,000', img:'images/ice-espresso.jpg'},
    {name:'آیس آمریکانو',price:'0,000', img:'images/ice-americano.jpg'},
    {name:'آیس کورتادو',price:'0,000', img:'images/ice-cortado.jpg'},
    {name:'آیس لاته',price:'0,000', img:'images/ice-latte.jpg'},
    {name:'آیس موکا',price:'0,000', img:'images/ice-mocha.jpg'},
    {name:'آیس کارامل ماکیاتو',price:'0,000', img:'images/ice-caramel-macchiato.jpg'},
    {name:'آیس آتزورو کافی (ویژه)',price:'0,000', img:'images/ice-azzurro-special.jpg'},
    {name:'کوکونات فراپاچینو',price:'0,000', img:'images/coconut-frappuccino.jpg'},
    {name:'هازلنات فراپاچینو',price:'0,000', img:'images/hazelnut-frappuccino.jpg'},
    {name:'موکا فراپاچینو',price:'0,000', img:'images/mocha-frappuccino.jpg'},
    {name:'آیس اسپرولینا نارگیل', price:'136,000', img:'images/ice-spirulina-coconut.jpg'},
    {name:'آیس اسپرولینا توت‌فرنگی', price:'146,000',img:'images/ice-spirulina-straberry.jpg'},
    {name:'آیس اسپرولینا پسته', price:'168,000',img:'images/ice-spirulina-pistachio.jpg'},
    {name:' کاراملآیس لاته',price:'148,000', img:'images/ice-latte-caramel.jpg'}
  ]},
  { id:'maq', title:'قهوه های دمی', items:[
    {name:'V60',price:'0,000', img:'images/v60.jpg'},
    {name:'آیروپرس',price:'0,000', img:'images/aeropress.jpg'},
    {name:'سایفون',price:'0,000', img:'images/siphon.jpg'},
    {name:'کلدبرو',price:'0,000', img:'images/coldbrew.jpg'}
  ]},
  { id:'special', title:'گرم های ویژه', items:[
    {name:'چای',price:'0,000', img:'images/tea.jpg'},
    {name:'موکاتزو',price:'0,000', img:'images/mokazzo.jpg'},
    {name:'ماسالا',price:'0,000', img:'images/masala.jpg'},
    {name:'هات‌چاکلت',price:'0,000', img:'images/hotchocolate.jpg'},
    {name:'ایتلین چاکلت',price:'0,000', img:'images/italian-chocolate.jpg'}
  ]},
  { id:'mocktail', title:'موکتل ها', items:[
    {name:'آتزورو لیموناد',price:'0,000', img:'images/limonade.jpg'},
    {name:'آتزورو موهیتو',price:'0,000', img:'images/mojito.jpg'},
    {name:'سونیوبلو',price:'188,000', img:'images/sonioblu.jpg'},
    {name:'گراناتو',price:'168,000', img:'images/granato.jpg'},
    {name:'روبینو روسو',price:'168,000', img:'images/rubino.jpg'},
    {name:'ورداویوو',price:'168,000', img:'images/verdavivo.jpg'},
    {name:'ماچاتزو',price:'198,000', img:'images/machazzo.jpg'},
    {name:'پرلارزا',price:'168,000', img:'images/perlarza.jpg'},
    {name:'آئورا',price:'168,000', img:'images/aura.jpg'}
  ]},
  { id:'shake', title:'شیک ها', items:[
    {name:'آروتزو',price:'198,000', img:'images/arotzo.jpg'},
    {name:'چوکومنتا',price:'198,000', img:'images/chocomenta.jpg'},
    {name:'سانگریاکس',price:'198,000', img:'images/sangriax.jpg'},
    {name:'اپلزا',price:'198,000', img:'images/appleza.jpg'},
    {name:'چوکوناتس',price:'198,000', img:'images/choconuts.jpg'}
  ]},
  { id:'smoothie', title:'اسموتی ها', items:[
    {name:'ملوگرانو',price:'152,000', img:'images/melograno.jpg'},
    {name:'انکافتو',price:'152,000', img:'images/encaffeto.jpg'},
    {name:'فیاما',price:'152,000', img:'images/fiama.jpg'},
    {name:'اسپرو ویوا',price:'152,000', img:'images/spero-viva.jpg'},
    {name:'فریس وردا',price:'152,000', img:'images/fres-verda.jpg'}
  ]}
];

/* build categories grid (covers categories page) */
function buildCategoriesGrid(){
  categories.forEach((c, idx)=>{
    const card = document.createElement('div');
    card.className = 'cat-card';

    // عکس کاور هر دسته: اگر اولین آیتم عکس داشت → همونو می‌گیریم
    const img = document.createElement('img');
    if (c.items[0] && c.items[0].img) {
      img.src = c.items[0].img;
    } else {
      img.src = 'images/' + placeholderImgs[idx % placeholderImgs.length];
    }
    img.alt = c.title;

    const title = document.createElement('div');
    title.className = 'cat-title';
    title.textContent = c.title;

    card.appendChild(img);
    card.appendChild(title);

    card.onclick = ()=> {
      document.getElementById('menu').scrollIntoView({behavior:'smooth', block:'start'});
      showCategory(c.id);
    };

    categoriesGrid.appendChild(card);
  });
}

/* build slides and category bar */
function buildSlides(){
  categories.forEach((c, idx)=>{
    // category bar button
    const btn = document.createElement('button');
    btn.textContent = c.title;
    btn.onclick = ()=> showCategory(c.id);
    if(idx===0) btn.classList.add('active');
    catBar.appendChild(btn);

    // slide container
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = 'slide-' + c.id;

    const heading = document.createElement('h3');
    heading.textContent = c.title;
    heading.style.textAlign='center';
    slide.appendChild(heading);

    const itemsWrap = document.createElement('div');
    itemsWrap.className = 'items';

    // create item cards
    c.items.forEach((itemData, i)=>{
      const it = document.createElement('div');
      it.className = 'item';

      const img = document.createElement('img');
      if(itemData.img){
        img.src = itemData.img;
      } else {
        img.src = 'images/' + placeholderImgs[i % placeholderImgs.length];
      }
      img.alt = itemData.name;
      img.onclick = ()=> openModal(img.src);

      const meta = document.createElement('div');
      meta.className = 'meta';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = itemData.name;

      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = (itemData.price || '—') + ' تومان';

      meta.appendChild(title);
      meta.appendChild(price);

      it.appendChild(img);
      it.appendChild(meta);
      itemsWrap.appendChild(it);
    });

    slide.appendChild(itemsWrap);
    slidesEl.appendChild(slide);
  });
}

/* show category with slide animation */
function showCategory(id){
  const newSlide = document.getElementById('slide-' + id);
  if(!newSlide) return;

  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });

  Array.from(catBar.children).forEach(b => b.classList.remove('active'));

  newSlide.classList.add('active');
  currentSlide = newSlide;

  Array.from(catBar.children).forEach(b => {
    if(b.textContent === newSlide.querySelector('h3').textContent){
      b.classList.add('active');
    }
  });

  newSlide.scrollTop = 0;
}

/* modal for image zoom */
function openModal(src){
  const m = document.getElementById('modal');
  const im = document.getElementById('modalImg');
  im.src = src;
  m.style.display = 'flex';
}
function closeModal(){
  const m = document.getElementById('modal');
  m.style.display = 'none';
}

/* helpers for navigation */
function goMenu(){
  document.getElementById('categories').scrollIntoView({behavior:'smooth', block:'start'});
  showCategory(categories[0].id);
}
function goHome(){
  document.getElementById('home').scrollIntoView({behavior:'smooth', block:'start'});
}

/* init */
window.addEventListener('load', ()=>{
  buildCategoriesGrid();
  buildSlides();
  showCategory(categories[0].id);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-btn");
  const dropdownMenu = document.querySelector(".dropdown");

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});



