import React from 'react'

export default function FeaturedProducts() {
    const products = [
        {
            id: 1, name: 'TV 43" Class TU7000 Series Crystal UHD 4K Smart TV',
            price: '$599.00', origPrice: '$678.95', save: '$80 (5%)',
            img: 'https://i.ibb.co.com/LzdM1Qns/32-inch-android-led-tv-612.jpg'
        },
        {
            id: 2, name: 'EARBUDS Apple AirPods 3rd generation with Charging Case', price: '$170.00', origPrice: '$250.00', save: '$80 (10%)',
            img: 'https://i.postimg.cc/jdxqWqWN/25baefac5d2a64cff300295923077243.jpg'
        },
        {
            id: 3, name: 'GAMING CONSOLE Apple Mac Mini M4 Chip 16/512GB Silver (10C CPU 10...)',
            price: '$666.00', origPrice: '$750.00', save: '$84 (10%)',
            img: 'https://i.postimg.cc/gk2dzM5H/c2dee5d94568d5f8415e1de463039aa2.jpg'
        },
        {
            id: 4, name: 'GAMING CONSOLE Apple MacBook Pro 16 in M4 Pro Chip Liquid Retina XDR...',
            price: '$3,759.00', origPrice: '$4,434.90', save: '$675 (10%)',
            img: 'https://i.postimg.cc/wv2Pnz68/1480ac68643aad7626f6084589292944.jpg'
        },
        {
            id: 5, name: 'Product 5',
            price: '$199.00', origPrice: '$250.00', save: '$51 (10%)',
            img: 'https://i.ibb.co.com/kgQHjkfB/Apple-i-Phone-17-Pro-Max.png'
        },
        {
            id: 6, name: 'Product 6',
            price: '$299.00', origPrice: '$350.00', save: '$51 (10%)',
            img: 'https://i.ibb.co.com/T9gR2Ks/foodela-baglamoti-rice.jpg'
        },
        {
            id: 7, name: 'Product 7',
            price: '$499.00', origPrice: '$550.00', save: '$51 (10%)',
            img: 'https://i.ibb.co.com/LzdM1Qns/32-inch-android-led-tv-612.jpg'
        },
        {
            id: 8, name: 'Product 8',
            price: '$699.00', origPrice: '$750.00', save: '$51 (10%)',
            img: 'https://i.ibb.co.com/GQZyX8gh/497-4972831-transparent-leather-jacket-png-cute-red-leather-jacket.png'
        },
    ]

    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Products
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">
                    Check & Get Your Desired Product! 
                </p>
            </div>

            {/* First row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {products.slice(0, 4).map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="text-blue-600 text-xs mb-1">{product.save}</div>
                            <h3 className="text-gray-900 font-semibold text-sm mb-1">{product.name}</h3>
                            <div className="text-red-600 font-bold text-sm mb-2">
                                {product.price} <span className="text-gray-500 line-through text-xs">{product.origPrice}</span>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6">
                {products.slice(4, 8).map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="text-blue-600 text-xs mb-1">{product.save}</div>
                            <h3 className="text-gray-900 font-semibold text-sm mb-1">{product.name}</h3>
                            <div className="text-red-600 font-bold text-sm mb-2">
                                {product.price} <span className="text-gray-500 line-through text-xs">{product.origPrice}</span>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
