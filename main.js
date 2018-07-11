var app = new Vue({

    el: "#app",

    data: {
        product: "socks",
        image: "greenSocks.jpeg",
        inventory: 1000,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[

            {
                variantId: 2234,
                variantColor: "Green"
            },

            {
                variantId: 2235,
                variantColor: "Blue"
            }

        ],

        sizes: ["Small", "Medium", "Large"]


        
    }
})