export interface ProductData {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    rating: string;
    reviews: string;
    images: string[];
    category: string;
    tags: string;
    sku: string;
  }

export const products_data = [
    {
        id: 1,
        name: 'Modular Sofa',
        price: 'Rs 25,000.00',
        image: '/images/modularsofa.png',
        product_description1: 'This modular sofa combines style and comfort, perfect for modern living rooms. Designed with a focus on flexibility, it can be arranged to fit any space.',
        product_description2: 'Made with high-quality fabric and a sturdy wooden frame, this sofa ensures durability and ease of maintenance. A versatile choice for every home.',
        category: 'Living Room Furniture',
        tags: 'sofa, modular, living room, furniture',
        sku: 'MS-001',
    },
    {
        id: 2,
        product_name: 'Granite Dining Table with Chairs',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Granite dining table with dining chair 1.png',
        product_description1: 'Elevate your dining experience with this luxurious granite dining table paired with elegant chairs. Its sleek design adds sophistication to your home.',
        product_description2: 'Crafted with polished granite and sturdy wood, this set is both functional and durable, ideal for family meals or formal dinners.',
        category: 'Dining Furniture',
        tags: 'dining table, granite, chairs, dining room',
        sku: 'DT-001',
    },
    {
        id: 3,
        product_name: 'Outdoor Bar Table and Stool',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Outdoor bar table and stool 1.png',
        product_description1: 'Enjoy your evenings outdoors with this stylish bar table and stool set. Perfect for balconies, patios, or garden areas.',
        product_description2: 'Made with weather-resistant materials, this set offers comfort and durability, making it an excellent addition to any outdoor setting.',
        category: 'Outdoor Furniture',
        tags: 'bar table, outdoor, stools, patio furniture',
        sku: 'BT-001',
    },
    {
        id: 4,
        product_name: 'Plain Console with Teak Mirror',
        product_price: 'Rs 25,000.00',
        product_image: '/images/Plain console with teak mirror 1.png',
        product_description1: 'This plain console table paired with a teak mirror exudes simplicity and elegance, suitable for entryways or living rooms.',
        product_description2: 'Constructed with premium teak wood, this set ensures a timeless appeal and exceptional functionality for your home.',
        category: 'Home Decor',
        tags: 'console, mirror, teak, home decor',
        sku: 'PC-001',
    },
    {
        id: 5,
        product_name: 'Grain Coffee Table',
        product_price: 'Rs 15,000.00',
        product_image: '/images/Grain coffee table 1.png',
        product_description1: 'The Grain Coffee Table combines rustic charm with modern design, making it a great centerpiece for your living room.',
        product_description2: 'Made from reclaimed wood, it is eco-friendly and adds a unique touch to any interior decor.',
        category: 'Living Room Furniture',
        tags: 'coffee table, wood, rustic, furniture',
        sku: 'CT-001',
    },
    {
        id: 6,
        product_name: 'Kent Coffee Table',
        product_price: 'Rs 225,000.00',
        product_image: '/images/Kent coffee table 1.png',
        product_description1: 'A luxurious coffee table with a sophisticated design that blends seamlessly into contemporary living spaces.',
        product_description2: 'Constructed from premium materials, the Kent Coffee Table is built for both style and durability.',
        category: 'Living Room Furniture',
        tags: 'coffee table, luxury, kent, modern',
        sku: 'CT-002',
    },
    {
        id: 7,
        product_name: 'Round Coffee Table',
        product_price: 'Rs 251,000.00',
        product_image: '/images/Round coffee table_color 2 1.png',
        product_description1: 'A stunning round coffee table that creates a warm and inviting focal point in any room.',
        product_description2: 'With its unique design and durable finish, this table complements both modern and classic interiors.',
        category: 'Living Room Furniture',
        tags: 'coffee table, round, luxury, furniture',
        sku: 'CT-003',
    },
    {
        id: 8,
        product_name: 'Reclaimed Teak Coffee Table',
        product_price: 'Rs 25,200.00',
        product_image: '/images/Reclaimed teak coffee table 1.png',
        product_description1: 'Eco-friendly and stylish, this reclaimed teak coffee table is perfect for creating a natural vibe in your home.',
        product_description2: 'Handcrafted from recycled wood, each piece is unique and full of character.',
        category: 'Living Room Furniture',
        tags: 'coffee table, teak, eco-friendly, living room',
        sku: 'CT-004',
    },
    {
        id: 9,
        product_name: 'Plain Console Table',
        product_price: 'Rs 258,200.00',
        product_image: '/images/Plain console_ 1.png',
        product_description1: 'This plain console table features a minimalistic design, perfect for modern interiors.',
        product_description2: 'Its spacious top provides ample space for decorative items or daily essentials.',
        category: 'Home Decor',
        tags: 'console, modern, minimal, home decor',
        sku: 'PC-002',
    },
    {
        id: 10,
        product_name: 'Reclaimed Teak Sideboard',
        product_price: 'Rs 20,000.00',
        product_image: '/images/Reclaimed teak Sideboard 1.png',
        product_description1: 'A functional sideboard made from reclaimed teak, offering ample storage and style.',
        product_description2: 'Perfect for dining rooms or hallways, it adds a rustic yet elegant touch to any space.',
        category: 'Dining Furniture',
        tags: 'sideboard, teak, reclaimed, furniture',
        sku: 'SB-001',
    },
    {
        id: 11,
        product_name: 'Outdoor Sofa Set',
        product_price: 'Rs 244,000.00',
        product_image: '/images/Outdoor sofa set 1.png',
        product_description1: 'Relax outdoors with this comfortable and stylish sofa set designed for patios and gardens.',
        product_description2: 'Built with weather-resistant materials, this set ensures longevity and ease of maintenance.',
        category: 'Outdoor Furniture',
        tags: 'sofa set, outdoor, garden, furniture',
        sku: 'OS-001',
    },
    {
        id: 12,
        product_name: 'Bella Chair and Table',
        product_price: 'Rs 100,000.00',
        product_image: '/images/Bella chair and table 1.png',
        product_description1: 'An elegant chair and table set that elevates any space with its modern design.',
        product_description2: 'Perfect for both indoor and outdoor use, crafted with durable materials for long-lasting beauty.',
        category: 'Dining Furniture',
        tags: 'chair, table, bella, modern',
        sku: 'BT-002',
    },
    {
        id: 13,
        product_name: 'Granite Square Side Table',
        product_price: 'Rs 258,800.00',
        product_image: '/images/Granite square side table 2.png',
        product_description1: 'A sleek granite side table that adds sophistication to your living or bedroom.',
        product_description2: 'Its compact size makes it versatile and easy to fit into any corner.',
        category: 'Living Room Furniture',
        tags: 'side table, granite, square, furniture',
        sku: 'ST-001',
    },
    {
        id: 14,
        product_name: 'Asgaard Sofa',
        product_price: 'Rs 250,000.00',
        product_image: '/images/Asgaard sofa 2.png',
        product_description1: 'Luxurious and spacious, the Asgaard Sofa brings comfort and elegance to your living room.',
        product_description2: 'Made with premium upholstery and a robust frame, it’s a perfect blend of style and durability.',
        category: 'Living Room Furniture',
        tags: 'sofa, asgaard, luxury, furniture',
        sku: 'SF-001',
    },
    {
        id: 15,
        product_name: 'Maya Sofa Three-Seater',
        product_price: 'Rs 115,000.00',
        product_image: '/images/Maya sofa three seater 1.png',
        product_description1: 'The Maya Sofa combines timeless design with unparalleled comfort, perfect for family gatherings.',
        product_description2: 'This three-seater is crafted for durability, ensuring it remains a staple in your home for years to come.',
        category: 'Living Room Furniture',
        tags: 'sofa, maya, three-seater, furniture',
        sku: 'SF-002',
    },
    {
        id: 16,
        product_name: 'Kent Outdoor Sofa Set',
        product_price: 'Rs 200,000.00',
        product_image: '/images/SJP_0825  1.png',
        product_description1: 'Experience outdoor luxury with this Kent sofa set, designed for patios or gardens.',
        product_description2: 'With its durable materials and elegant design, it creates a comfortable outdoor retreat.',
        category: 'Outdoor Furniture',
        tags: 'sofa set, outdoor, kent, furniture',
        sku: 'OS-002',
    },
];
