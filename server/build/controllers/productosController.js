"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductosController {
    index(req, res) {
        res.json([
            {
                "id": 1,
                "name": "Essential TypeScript 4: From Beginner to Pro",
                "price": 45,
                "description": "Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java.",
                "categoryId": 1,
                "stock": 0,
                "image": "https://m.media-amazon.com/images/I/41MKHMQQj-L._AC_SY780_.jpg"
            },
            {
                "id": 2,
                "name": "Hackeando el cerebro de tus compradores: PsychoGrowth",
                "price": 5,
                "description": "En Hackeando del cerebro de tus compradores, Corti nos revela cómo muchas compañías crean productos digitales o procesos de venta capaces de conectar con la psicología del comprador.",
                "categoryId": 1,
                "stock": 10,
                "image": "https://m.media-amazon.com/images/I/41uaJde6L5L.jpg"
            },
            {
                "id": 3,
                "name": "Angular Routing: Learn To Create client-side and SPA with Routing and Navigation",
                "price": 17,
                "description": "In this book, the reader will be able to focus on one concept of Angular in deep.",
                "categoryId": 1,
                "stock": 10,
                "image": "https://images-na.ssl-images-amazon.com/images/I/41WCabHQ5yL._SX331_BO1,204,203,200_.jpg"
            },
            {
                "id": 4,
                "name": "SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter",
                "price": 19,
                "description": "Ideal for Android smartphones and tablets, and MIL cameras. SanDisk Memory Zone app for easy file management (Download and Installation Required).",
                "categoryId": 2,
                "stock": 10,
                "image": "https://m.media-amazon.com/images/I/91OoG-0Vx1L._AC_SY679_.jpg"
            },
            {
                "id": 5,
                "name": "GoPro HERO9 Black - Waterproof Action Camera with Front LCD",
                "price": 399,
                "description": "5K Video - Shoot stunning video with up to 5K resolution, perfect for maintaining detail even when zooming in",
                "categoryId": 2,
                "stock": 10,
                "image": "https://m.media-amazon.com/images/I/71lmjmVTkBL._AC_SY355_.jpg"
            },
            {
                "id": 6,
                "name": "CL3 Rated High-Speed 4K HDMI Cable - 6 Feet",
                "price": 7,
                "description": "HDMI A Male to A Male Cable: Supports Ethernet, 3D, 4K video and Audio Return Channel (ARC)",
                "categoryId": 2,
                "stock": 10,
                "image": "https://m.media-amazon.com/images/I/41sdEa9gRCS._AC_SY355_.jpg"
            },
            {
                "id": 7,
                "name": "Logitech MK270 Wireless Keyboard and Mouse Combo",
                "price": 32,
                "description": "The USB receiver is conveniently located in the box, top flap. This wireless keyboard and mouse feature Logitech Advanced 2.4GHz technology with a range of up to 10 metres.",
                "categoryId": 3,
                "stock": 10,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyOqwUU3dEhpzMmhiAJQ0Mndf1vkQIX32T-vfXM42VLBbOFMpUl7TaNGVGmZzKcevazo&usqp=CAU"
            },
            {
                "id": 8,
                "name": "External CD Drive USB 3.0 Portable CD DVD +/-RW Drive DVD/CD ROM",
                "price": 20,
                "description": "Plug & play. Easy to use,powered by USB port. No external driver and Power needed. Just plug it into your USB port and the DVD driver will be detected",
                "categoryId": 3,
                "stock": 10,
                "image": "https://m.media-amazon.com/images/I/6117RAK2guL._AC_SL1500_.jpg"
            }
        ]);
    }
}
const productosController = new ProductosController();
exports.default = productosController;
