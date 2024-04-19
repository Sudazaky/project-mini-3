import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";
import { drawProduct_sort } from "./drawProducts-sort.js";
drawProduct_sort();

const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function(){
    search();
});

inputSearch.addEventListener("keydown", function(e) {
    console.log(e.key);
    if(e.key === "Enter"){
        search();
    }
})

// Filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function(e) {
    switch (e.target.value){
        case "mac-dinh":
            params.sort = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            break;
        case "gia-cao-den-thap":
            params.sort = "-price";
            break;
        case "giam-gia-nhieu":
            params.sort = "-discountPercentage";
    }
    drawProduct_sort();
})
// End filter

// Pagination
const pagiPrev = document.querySelector("#paginationPrev");
const pagiNext = document.querySelector("#paginationNext");
const pagiNumber = document.querySelector("#paginationNumber");

pagiNext.addEventListener("click", function(){
    if(params.page < 5){
        params.page += 1;
        pagiNumber.innerHTML = params.page;
        drawProduct_sort();
    }
})

pagiPrev.addEventListener("click", function(){
    if(params.page > 1){
        params.page -= 1;
        pagiNumber.innerHTML = params.page;
        drawProduct_sort();
    }
})


// End Pagination