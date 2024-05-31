
document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameters from the URL
    function getQueryParams() {
        const params = {}; // Object to store query parameters
        const queryString = window.location.search.substring(1); // Get the query string from the URL
        const queries = queryString.split("&"); // Split the query string into an array of key-value pairs
        queries.forEach(function(query) { // Iterate through each query parameter
            const [key, value] = query.split("="); // Split the key and value
            params[key] = decodeURIComponent(value); // Decode the URI component and store in the params object
        });
        return params; // Return the params object
    }

    // Product data (this would usually come from a database or API)
    const products = {
        // Define product objects with their properties
        1: {
            title: "Netzschwefel Stulln",
            image: "image1.jpg",
            price: "$19.99",
            description: "Netzschwefel Stulln Df Fungicide Agro Stullen Sulfur 80 1kg Sulphur Sulfer Swat Agro Chemicals Agrostulln Gmbh, Germany."
        },
        2: {
            title: "Full Green",
            image: "image2.jpg",
            price: "$10.99",
            description: "Full Green Bop 50kg Solex Chemicals Bio Phos Phosphate Solubiulizing Bacteria (Psb) Hdom"
        },
        3: {
            title: "Trichoderma Green",
            image: "image3.jpg",
            price: "$15.99",
            description: "Trichoderma Green Soil 350gm T4 Non Toxic Bio Fertilizer / Fungicide Hara Organic Centre Soil Best Fungi"
        },
        4: {
            title: "Bop 50kg Bio Organo Phosphate",
            image: "image4.jpg",
            price: "$17.99",
            description: "Bop 50kg Bio Organo Phosphate P2o5 20 Organic Matter 15 Best Bop Fertilizer 50kg Bio Organo Phosphate Pakistan Green Group Of Companies Tezgam بی او پی"
        },
        3: {
            title: "Trichoderma Green",
            image: "image3.jpg",
            price: "$15.99",
            description: "Trichoderma Green Soil 350gm T4 Non Toxic Bio Fertilizer / Fungicide Hara Organic Centre Soil Best Fungi"
        },
        4: {
            title: "Bop 50kg Bio Organo Phosphate",
            image: "image4.jpg",
            price: "$17.99",
            description: "Bop 50kg Bio Organo Phosphate P2o5 20 Organic Matter 15 Best Bop Fertilizer 50kg Bio Organo Phosphate Pakistan Green Group Of Companies Tezgam بی او پی"
        },
        5: {
            title: "Seaweed Liquid Spray",
            image: "image5.jpg",
            price: "$6.99",
            description: "Seaweed Liquid Spray, Seaweed 500ml, Fertilizer Maxicrop Soaking Seeds And Bulbs Cutting And Rooting Plants Water Soluble Seedling"
        },
        6: {
           title: "Rhizophos 1Litre",
           image: "image6.jpg",
           price: "$21",
           description: " Rhizophos 1Litre Agritech Crop Science Phosphorus Solubilizing Bacteria Consultant Agro Zia Consultant Rhizo Phos Bacteria To Grow Fast "
        },
        // Add more product data as needed
    };

    // Get the product ID from the query parameters
    const params = getQueryParams(); // Call the getQueryParams function to get query parameters
    const productId = params["product_id"]; // Get the product_id parameter from the params object

    // Fetch the product data based on the ID
    const product = products[productId]; // Get the product object from the products object using the product ID

    // Update the HTML with the product data
    if (product) { // Check if the product exists
        document.getElementById("product-title").textContent = product.title; // Set the text content of the element with id "product-title" to the product title
        document.getElementById("product-image").src = product.image; // Set the src attribute of the image element with id "product-image" to the product image
        document.getElementById("product-price").textContent = product.price; // Set the text content of the element with id "product-price" to the product price
        document.getElementById("product-description").textContent = product.description; // Set the text content of the element with id "product-description" to the product description
    } else { // If the product does not exist
        document.querySelector(".container").innerHTML = "<h1 class='text-center'>Product not found</h1>"; // Display "Product not found" message in the container element
    }
});