import './content.css';
import freeShip from '../../assest/img/content/xe.webp';
import credit from '../../assest/img/content/create.png';
import returnPolyce from '../../assest/img/content/return-polyce.webp';
import pdImg1 from '../../assest/img/content/produc-img--1.webp';
import pdImg2 from '../../assest/img/content/product-img--2.webp';
import pdImg3 from '../../assest/img/content/product-img--3.webp';
import pdImg4 from '../../assest/img/content/product-img--4.webp';
import imageProduct from '../../assest/img/content/nhom-1-bule.webp';
import ground2 from '../../assest/img/content/nhom-2-anh1.avif';
import ground3 from '../../assest/img/content/nhom-3-anh1x.avif';
import ground4 from '../../assest/img/content/nhom-4-anh1.webp';
import ground5 from '../../assest/img/content/nhom-5-anh1.avif';
import ground6 from '../../assest/img/content/nhom-6-anh1.avif';
import ground7 from '../../assest/img/content/nhom-7-anh1.avif';
import ground8 from '../../assest/img/content/nhom-8-anh1.avif';
import ground9 from '../../assest/img/content/nhom-9-anh1.avif';
import ground10 from '../../assest/img/content/nhom-10-anh1.avif';
import ground11 from '../../assest/img/content/nhom-11-anh1.avif';
import ground12 from '../../assest/img/content/nhom-12-anh1.avif';
import ground13 from '../../assest/img/content/nhom-13-anh1.avif';

function ContentTop() {
    return (
        <div className='container-inner'>
            <div className='spacing-30 '>
                <div className='nov-policy-item padding-left'>
                    <div className='policy-img'>
                        <img className='img-policy car' src={freeShip} />
                    </div>

                    <div className='desc-policy'>
                        <strong>FREE SHIPPING :</strong> All orders of $49 or more of eligible items across any product category qualify.
                    </div>
                </div>

                <div className='nov-policy-item'>
                    <div className='policy-img'>
                        <img className='img-policy credit' src={credit} />
                    </div>

                    <div className='desc-policy'>
                        <strong>CREDIT CARDS :</strong>  We accept Visa, American Express, Mastercard, and Discover
                    </div>
                </div>

                <div className='nov-policy-item'>
                    <div className='policy-img'>
                        <img className='img-policy return' src={returnPolyce} />
                    </div>

                    <div className='desc-policy'>
                        <strong>RETURN POLICY :</strong>  You can return your online order within 30 days of receiving your order.
                    </div>
                </div>
            </div>
        </div>
    );
}

const products = [
    {
        'id': 1,
        'image': pdImg1,
        'title': "SWIMWEAR",
        'des': "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
        'show': "Shop now"
    },
    {
        'id': 2,
        'image': pdImg2,
        'title': "JEANS SHORTS",
        'des': "Stand out from the Crowd with Our Wide Range of Brands and Styles  ",
        'show': "Shop now"
    },
    {
        'id': 3,
        'image': pdImg3,
        'title': "MEN’S SHOP",
        'des': "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
        'show': "Shop now"
    },
    {
        'id': 4,
        'image': pdImg4,
        'title': "BACK TO SCHOOL",
        'des': "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
        'show': "Shop now"
    }
]

function Product({ id, image, title, des, show }) {

    return (
        <div key={id} className='product-item'>
            <div className='product_img'>
                <img src={image} />
            </div>

            <div className='product-container'>
                <div className='product-title'>
                    <h1>{title}</h1>
                </div>

                <div className='product-des'>
                    <p>{des}</p>
                </div>

                <div className='product-show'>
                    <a href='#'>{show}</a>
                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>

    );
}

function RenderProduct() {
    return products.map((produc) => (
        <Product
            key={produc.id}
            image={produc.image}
            title={produc.title}
            des={produc.des}
            show={produc.show}
        />
    ))
}

function TitleProduct() {
    return (
        <div className='title_section'>
            <p>New For You</p>
        </div>
    );
}

const newProducts = [
    {
        'id': 1,
        'image': imageProduct,
        'title': 'High turtleneck jumper',
        'price': '$15.00',
        'color1': 'green'
    },
    {
        'id': 2,
        'image': ground2,
        'title': 'Sherpa denim jacket',
        'price': '$12.00',
        'color1': ''
    },
    {
        'id': 3,
        'image': ground3,
        'title': 'Rick & Morty T-shirt',
        'price': '$22.00',
        'color1': '#00bfff ',
        'color2': '#00ced1',
        'color3': '#663399'
    },
    {
        'id': 4,
        'image': ground4,
        'title': 'Long-sleeved Shirt',
        'price': '$25.00',
        'color1': '#fff',
        'color2': '#00bfff ',
        'color3': '#ed143d'
    },
    {
        'id': 5,
        'image': ground5,
        'title': 'Hoodies coat for women',
        'price': '$27.00',
        'color1': '#00bfff ',
        'color2': '#40e0d0',
        'color3': '#3cb371'
    },
    {
        'id': 6,
        'image': imageProduct,
        'title': 'Parka jacket with hood',
        'price': '$25.00',
        'color1': '#3cb371',
        'color2': '#000000',
        'color3': '#008000'
    },
    {
        'id': 7,
        'image': ground7,
        'title': 'Quilted jacket with high',
        'price': '$5.00',
        'color1': '#b0c4de',
        'color2': '#b0e0e6',
        'color3': '#ff69b4'
    },
    {
        'id': 8,
        'image': ground8,
        'title': 'Printed T-shirt',
        'price': '$28.00',
        'color1': ''
    },
    {
        'id': 9,
        'image': ground9,
        'title': 'Woman bomber vest',
        'price': '$24.00',
        'color1': '#f0e68c',
        'color2': '#90ee90',
        'color3': '#ff69b4'
    },
    {
        'id': 10,
        'image': ground10,
        'title': 'Personality jacket',
        'price': '$21.00',
        'color1': '#add8e6',
        'color2': '#db7093',
        'color3': '#fafad2'
    },
    {
        'id': 11,
        'image': ground11,
        'title': 'Polka dot short sleeve shirt',
        'price': '$15.00',
        'color1': '#000000',
        'color2': '#fff',
    },
    {
        'id': 12,
        'image': ground12,
        'title': 'Lightweight bomber jacket',
        'price': '$31.00',
        'color1': ''
    },
    {
        'id': 13,
        'image': imageProduct,
        'title': 'Lightweight bomber jacket',
        'price': '$24.00',
        'color1': '#000000',
        'color2': '#f0ffff',
        'color3': '#ffe4e1'
    },
];

function NewProducts({id, image, title, price, color1, color2, color3}) {
    return (
        // call api de render cacs product
    );
}

export default function MyContent() {
    return (
        <section className='content-product'>
            <ContentTop />

            <div className='container'>
                <RenderProduct />
            </div>

            <div className='section-product-slider'>
                <TitleProduct />
            </div>
        </section>
    );
}