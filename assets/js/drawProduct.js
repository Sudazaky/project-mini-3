import { fetchApi } from "./fetApi.js";
import { API_PRODUCT } from "./contants.js";
import { params } from "./variable.js";

const product = document.querySelector("#products");

export const drawProduct = () => {
    // console.log(params);
    const api = `${API_PRODUCT}/search?q=${params.q}`;
    fetchApi(api)
    .then(data => {
    let htmls = data.products.map(item => {
        return `
            <div class="product__item">
                <div class="product__image">
                    <img src="${item.thumbnail}" alt="${item.title}"/>
                    <div class="product__percent">
                        ${item.discountPercentage}%
                    </div>
                </div>
                <div class="product__content">
                    <h3 class="product__title">${item.title}</h3>
                    <div class="product__meta">
                        <div class="product__price">
                            ${item.price}$
                        </div>
                        <div class="product__stock">
                            Còn lại: ${item.stock} sp
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    product.innerHTML = htmls.join("");
    })
}