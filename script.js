/* =========================================
   RESTAURANT DATA
========================================= */

const restaurants = [

    {
        name: "Zesto Kitchen",
        cuisine: "North Indian · Chinese · Fast Food",
        rating: "4.8",
        time: "25–35 min",
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Royal Biryani House",
        cuisine: "Biryani · Mughlai · Kebabs",
        rating: "4.7",
        time: "30–35 min",
        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d293?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "South Spice",
        cuisine: "South Indian · Dosa · Meals",
        rating: "4.9",
        time: "20–25 min",
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Pizza House",
        cuisine: "Pizza · Pasta · Italian",
        rating: "4.6",
        time: "25–30 min",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Burger Barn",
        cuisine: "Burgers · Fries · Fast Food",
        rating: "4.7",
        time: "20–25 min",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Dragon Wok",
        cuisine: "Chinese · Noodles · Rice",
        rating: "4.6",
        time: "25–35 min",
        image:
            "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Cafe Bliss",
        cuisine: "Desserts · Coffee · Shakes",
        rating: "4.8",
        time: "15–25 min",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=90"
    },

    {
        name: "Tandoori Nation",
        cuisine: "Tandoori · Starters · North Indian",
        rating: "4.8",
        time: "30–40 min",
        image:
            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=90"
    }

];


/* =========================================
   FOOD DATA
========================================= */

const foods = [

    {
        id: "masala-dosa",
        name: "Masala Dosa",
        restaurant: "South Spice",
        category: "South Indian",
        price: 100,
        image:
            "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=90",
        description:
            "Crispy dosa filled with potato masala."
    },

    {
        id: "ghee-roast",
        name: "Ghee Roast Dosa",
        restaurant: "South Spice",
        category: "South Indian",
        price: 120,
        image:
            "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=90",
        description:
            "Golden crispy dosa roasted with ghee."
    },

    {
        id: "idli",
        name: "Idli Sambar",
        restaurant: "South Spice",
        category: "South Indian",
        price: 80,
        image:
            "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=90",
        description:
            "Soft idlis served with hot sambar."
    },

    {
        id: "vada",
        name: "Medu Vada",
        restaurant: "South Spice",
        category: "Snacks",
        price: 85,
        image:
            "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=90",
        description:
            "Crispy vada served with chutney."
    },

    {
        id: "biryani",
        name: "Veg Biryani",
        restaurant: "Royal Biryani House",
        category: "Biryani",
        price: 160,
        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d293?auto=format&fit=crop&w=800&q=90",
        description:
            "Fragrant basmati rice with aromatic spices."
    },

    {
        id: "pizza",
        name: "Classic Pizza",
        restaurant: "Pizza House",
        category: "Pizza",
        price: 220,
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=90",
        description:
            "Cheesy Italian pizza with fresh toppings."
    },

    {
        id: "burger",
        name: "Classic Chicken Burger",
        restaurant: "Burger Barn",
        category: "Burgers",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90",
        description:
            "Juicy burger with fresh lettuce and sauce."
    },

    {
        id: "noodles",
        name: "Wok Tossed Noodles",
        restaurant: "Dragon Wok",
        category: "Chinese",
        price: 150,
        image:
            "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=90",
        description:
            "Hot noodles tossed with vegetables and sauces."
    },

    {
        id: "chicken-tikka",
        name: "Chicken Tikka",
        restaurant: "Tandoori Nation",
        category: "Starters",
        price: 220,
        image:
            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=90",
        description:
            "Juicy grilled chicken with Indian spices."
    },

    {
        id: "brownie",
        name: "Chocolate Brownie",
        restaurant: "Cafe Bliss",
        category: "Desserts",
        price: 120,
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=90",
        description:
            "Rich and fudgy chocolate brownie."
    },

    {
        id: "milkshake",
        name: "Chocolate Shake",
        restaurant: "Cafe Bliss",
        category: "Drinks",
        price: 140,
        image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=90",
        description:
            "Creamy chocolate milkshake."
    }

];


/* =========================================
   CART
========================================= */

let cart =
    JSON.parse(
        localStorage.getItem("zestoCart") || "[]"
    );


let selectedRestaurant =
    "South Spice";


let selectedCategory =
    "All";


/* =========================================
   PAGE SWITCHING
========================================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const target =
        document.getElementById(
            pageName + "Page"
        );


    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    if (pageName === "restaurants") {

        renderRestaurants();

    }


    if (
        pageName === "menu" ||
        pageName === "offers"
    ) {

        renderMenu();

    }


    if (pageName === "cart") {

        renderCart();

    }


    if (pageName === "checkout") {

        renderCheckout();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   FORMAT CURRENCY
========================================= */

function formatPrice(value) {

    return "₹" +
        value.toLocaleString("en-IN");

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "zestoCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================
   CART COUNT
========================================= */

function updateCartCount() {

    const count =
        cart.reduce(
            (total,item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "navCartCount"
    ).textContent = count;

}


/* =========================================
   RESTAURANT RENDER
========================================= */

function renderRestaurants(
    searchText = ""
) {

    const grid =
        document.getElementById(
            "restaurantGrid"
        );


    const search =
        searchText.toLowerCase();


    const filtered =
        restaurants.filter(
            restaurant => {

                return (
                    restaurant.name
                        .toLowerCase()
                        .includes(search)
                    ||
                    restaurant.cuisine
                        .toLowerCase()
                        .includes(search)
                );

            }
        );


    if (!filtered.length) {

        grid.innerHTML =
            `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:40px;
                color:#888;
            ">
                No restaurants found.
            </div>
            `;

        return;

    }


    grid.innerHTML =
        filtered.map(
            restaurant => `

            <div class="restaurant-card">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                >

                <div class="restaurant-info">

                    <h3>
                        ${restaurant.name}
                    </h3>

                    <div class="cuisine">
                        ${restaurant.cuisine}
                    </div>

                    <div class="restaurant-meta">

                        <span class="restaurant-rating">
                            ★ ${restaurant.rating}
                        </span>

                        <span class="restaurant-time">
                            ◷ ${restaurant.time}
                        </span>

                    </div>

                    <button
                        class="restaurant-menu-button"
                        onclick="
                            chooseRestaurant(
                                '${restaurant.name}'
                            )
                        "
                    >

                        View Menu →

                    </button>

                </div>

            </div>

        `
        ).join("");

}


/* =========================================
   CHOOSE RESTAURANT
========================================= */

function chooseRestaurant(name) {

    selectedRestaurant = name;

    document.getElementById(
        "currentRestaurant"
    ).textContent = name;

    selectedCategory = "All";

    document.querySelectorAll(
        ".category-button"
    ).forEach(button => {

        button.classList.remove(
            "active"
        );

        if (
            button.textContent
                .trim()
                .startsWith("All")
        ) {

            button.classList.add(
                "active"
            );

        }

    });


    document.querySelectorAll(
        ".restaurant-filter-button"
    ).forEach(button => {

        button.classList.remove(
            "active"
        );

        if (
            button.textContent
                .trim() === name
        ) {

            button.classList.add(
                "active"
            );

        }

    });


    showPage("menu");

}


/* =========================================
   SELECT RESTAURANT
========================================= */

function selectRestaurant(
    restaurant,
    button
) {

    selectedRestaurant =
        restaurant;


    document.getElementById(
        "currentRestaurant"
    ).textContent =
        restaurant === "All Restaurants"
            ? "All Restaurants"
            : restaurant;


    document.querySelectorAll(
        ".restaurant-filter-button"
    ).forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    button.classList.add(
        "active"
    );


    renderMenu();

}


/* =========================================
   SELECT CATEGORY
========================================= */

function selectCategory(
    category,
    button
) {

    selectedCategory =
        category;


    document.querySelectorAll(
        ".category-button"
    ).forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    button.classList.add(
        "active"
    );


    renderMenu();

}


/* =========================================
   MENU RENDER
========================================= */

function renderMenu() {

    const grid =
        document.getElementById(
            "menuGrid"
        );


    if (!grid) {
        return;
    }


    const searchInput =
        document.getElementById(
            "menuSearch"
        );


    const search =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const filtered =
        foods.filter(food => {

            const restaurantMatch =
                selectedRestaurant ===
                "All Restaurants"
                ||
                food.restaurant ===
                selectedRestaurant;


            const categoryMatch =
                selectedCategory ===
                "All"
                ||
                food.category ===
                selectedCategory;


            const searchMatch =
                food.name
                    .toLowerCase()
                    .includes(search)
                ||
                food.restaurant
                    .toLowerCase()
                    .includes(search)
                ||
                food.category
                    .toLowerCase()
                    .includes(search);


            return (
                restaurantMatch
                &&
                categoryMatch
                &&
                searchMatch
            );

        });


    if (!filtered.length) {

        grid.innerHTML =
            `
            <div style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                color:#888;
            ">
                No food items found.
            </div>
            `;

        return;

    }


    grid.innerHTML =
        filtered.map(
            food => `

            <div class="food-card">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                >

                <div class="food-info">

                    <h3>
                        ${food.name}
                    </h3>

                    <div class="food-restaurant">
                        ${food.restaurant}
                    </div>

                    <div class="food-description">
                        ${food.description}
                    </div>

                    <div class="food-bottom">

                        <span class="food-price">
                            ${formatPrice(food.price)}
                        </span>

                        <button
                            class="add-food-button"
                            onclick="
                                addToCart(
                                    '${food.id}'
                                )
                            "
                        >
                            + Add
                        </button>

                    </div>

                </div>

            </div>

        `
        ).join("");

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {

    const food =
        foods.find(
            item => item.id === id
        );


    if (!food) {
        return;
    }


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });

    }


    saveCart();


    alert(
        food.name +
        " added to cart!"
    );

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(
    id,
    amount
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== id
            );

    }


    saveCart();

    renderCart();

}


/* =========================================
   REMOVE ITEM
========================================= */

function removeItem(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    renderCart();

}


/* =========================================
   CLEAR CART
========================================= */

function clearCart() {

    cart = [];

    saveCart();

    renderCart();

}


/* =========================================
   SUBTOTAL
========================================= */

function getSubtotal() {

    return cart.reduce(

        (total,item) =>
            total +
            item.price *
            item.quantity,

        0

    );

}


/* =========================================
   CART RENDER
========================================= */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const empty =
        document.getElementById(
            "cartEmpty"
        );

    const totals =
        document.getElementById(
            "cartTotals"
        );


    if (!cart.length) {

        cartItems.innerHTML =
            "";

        empty.style.display =
            "block";

        totals.style.display =
            "none";

        return;

    }


    empty.style.display =
        "none";

    totals.style.display =
        "block";


    const grouped = {};


    cart.forEach(item => {

        if (
            !grouped[
                item.restaurant
            ]
        ) {

            grouped[
                item.restaurant
            ] = [];

        }


        grouped[
            item.restaurant
        ].push(item);

    });


    let html = "";


    Object.entries(
        grouped
    ).forEach(
        ([restaurant,items]) => {

            html +=
                `
                <div class="cart-restaurant">

                    <div class="cart-restaurant-header">

                        <span>
                            🏪 ${restaurant}
                        </span>

                        <span>
                            ⭐ 4.6 · 20–25 min
                        </span>

                    </div>
                `;


            items.forEach(item => {

                html +=
                    `
                    <div class="cart-item">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >

                        <div class="cart-item-details">

                            <h4>
                                ${item.name}
                            </h4>

                            <p>
                                ${formatPrice(item.price)} each
                            </p>

                        </div>


                        <div class="quantity">

                            <button
                                onclick="
                                    changeQuantity(
                                        '${item.id}',
                                        -1
                                    )
                                "
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="
                                    changeQuantity(
                                        '${item.id}',
                                        1
                                    )
                                "
                            >
                                +
                            </button>

                        </div>


                        <div class="item-total">

                            ${formatPrice(
                                item.price *
                                item.quantity
                            )}

                        </div>


                        <button
                            class="remove-item"
                            onclick="
                                removeItem(
                                    '${item.id}'
                                )
                            "
                        >
                            Remove
                        </button>

                    </div>
                    `;

            });


            html +=
                `
                </div>
                `;

        }
    );


    cartItems.innerHTML =
        html;


    const subtotal =
        getSubtotal();


    const total =
        subtotal + 40;


    document.getElementById(
        "subtotal"
    ).textContent =
        formatPrice(subtotal);


    document.getElementById(
        "total"
    ).textContent =
        formatPrice(total);

}


/* =========================================
   CHECKOUT
========================================= */

function renderCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );


    if (!checkoutItems) {
        return;
    }


    checkoutItems.innerHTML =
        cart.map(
            item => `

            <div class="summary-item">

                <span>
                    ${item.name}
                    × ${item.quantity}
                </span>

                <strong>
                    ${formatPrice(
                        item.price *
                        item.quantity
                    )}
                </strong>

            </div>

        `
        ).join("");


    const total =
        getSubtotal() + 40;


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        formatPrice(total);

}


/* =========================================
   CHECKOUT FORM
========================================= */

document.getElementById(
    "checkoutForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (!cart.length) {

            alert(
                "Your cart is empty."
            );

            showPage("menu");

            return;

        }


        const orderId =
            "ZST" +
            Math.floor(
                100000 +
                Math.random() *
                900000
            );


        const name =
            document.getElementById(
                "fullName"
            ).value;


        const phone =
            document.getElementById(
                "phoneNumber"
            ).value;


        const payment =
            document.getElementById(
                "paymentMethod"
            ).value;


        const restaurantsList =
            [
                ...new Set(
                    cart.map(
                        item =>
                            item.restaurant
                    )
                )
            ].join(", ");


        const total =
            getSubtotal() + 40;


        const order = {

            orderId,

            name,

            phone,

            payment,

            restaurants:
                restaurantsList,

            total

        };


        localStorage.setItem(
            "zestoOrder",
            JSON.stringify(order)
        );


        cart = [];

        saveCart();


        renderSuccess();


        showPage("success");

    }
);


/* =========================================
   SUCCESS
========================================= */

function renderSuccess() {

    const box =
        document.getElementById(
            "orderDetails"
        );


    const order =
        JSON.parse(
            localStorage.getItem(
                "zestoOrder"
            )
        );


    if (!order) {
        return;
    }


    box.innerHTML =
        `
        <div class="detail-row">

            <strong>
                Order ID
            </strong>

            <span>
                ${order.orderId}
            </span>

        </div>


        <div class="detail-row">

            <strong>
                Name
            </strong>

            <span>
                ${order.name}
            </span>

        </div>


        <div class="detail-row">

            <strong>
                Phone
            </strong>

            <span>
                ${order.phone}
            </span>

        </div>


        <div class="detail-row">

            <strong>
                Payment
            </strong>

            <span>
                ${order.payment}
            </span>

        </div>


        <div class="detail-row">

            <strong>
                Restaurants
            </strong>

            <span>
                ${order.restaurants}
            </span>

        </div>


        <div class="detail-row">

            <strong>
                Total
            </strong>

            <span>
                ${formatPrice(
                    order.total
                )}
            </span>

        </div>
        `;

}


/* =========================================
   RESTAURANT SEARCH
========================================= */

document.getElementById(
    "restaurantSearch"
).addEventListener(
    "input",
    function() {

        renderRestaurants(
            this.value
        );

    }
);


/* =========================================
   MENU SEARCH
========================================= */

document.getElementById(
    "menuSearch"
).addEventListener(
    "input",
    function() {

        renderMenu();

    }
);


/* =========================================
   INITIAL LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        renderRestaurants();

        renderMenu();

        renderCart();

        renderCheckout();

        renderSuccess();

    }
);