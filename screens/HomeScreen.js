import data from '../data.js';
const HomeScreen = {
    render: () =>{
        const { product } = data;
        return `
            <ul class="products">
            ${product.map( product => `
                <li>
                    <img src="${product.image}" class="w-100 shadow-1-strong rounded mb-xl-4">
                    <a href="./${product.__id}"> <h4> ${product.name}</h4> </a> 
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p> ${product.price}</p>
                </li>
            `
            ).join('/n')}
        `;
    },
};

export default HomeScreen;

