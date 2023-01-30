const dealsContent = document.getElementById('deals-content');
const prevButtonDeals = document.getElementById('prev-btn-deals');
const nextButtonDeals = document.getElementById('next-btn-deals');

prevButtonDeals.style.display = "none";
nextButtonDeals.style.display = "none";

if(dealsContent.scrollWidth > dealsContent.clientWidth){
    nextButtonDeals.style.display = "block";
}

nextButtonDeals.onclick = ()=>{
    dealsContent.scrollLeft = dealsContent.scrollWidth;
    prevButtonDeals.style.display = "block";
    nextButtonDeals.style.display = "none";
};

prevButtonDeals.onclick = ()=>{
    dealsContent.scrollLeft = -dealsContent.scrollWidth;
    prevButtonDeals.style.display = "none";
    nextButtonDeals.style.display = "block";
};

const productsContent = document.getElementById('products-content');
const prevButtonProducts = document.getElementById('prev-btn-products');
const nextButtonProducts = document.getElementById('next-btn-products');

prevButtonProducts.style.display = "none";
nextButtonProducts.style.display = "none";

if(productsContent.scrollWidth > productsContent.clientWidth){
    nextButtonProducts.style.display = "block";
}
nextButtonProducts.onclick = ()=>{
    productsContent.scrollLeft = productsContent.scrollWidth;
    prevButtonProducts.style.display = "block";
    nextButtonProducts.style.display = "none";
};

prevButtonProducts.onclick = ()=>{
    productsContent.scrollLeft = -productsContent.scrollWidth;
    prevButtonProducts.style.display = "none";
    nextButtonProducts.style.display = "block";
};

window.onresize = ()=>{
    if(dealsContent.scrollWidth > dealsContent.clientWidth){
        nextButtonDeals.style.display = "block";
    }else{
        nextButtonDeals.style.display = "none";
    }

    if(productsContent.scrollWidth > productsContent.clientWidth){
        nextButtonProducts.style.display = "block";
    }else{
        nextButtonProducts.style.display = "none";
    }
};