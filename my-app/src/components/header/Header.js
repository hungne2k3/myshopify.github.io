import { useEffect, useState } from 'react';
import './Header.css'
import image from '../../assest/img/img-header/logo-1.webp'
import navHeader from '../../assest/img/img-header/menu_330x320.webp'
import productImg from '../../assest/img/img-header/anh-2.webp'

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const targetElement = event.target;
      const dropdownToggle = document.querySelector('.dropdown-toggle');

      // Giả sử bạn đã mở dropdown-menu bằng cách click vào nút có className='dropdown-toggle'. Khi dropdown-menu đã được mở, bạn muốn đóng nó khi click bất kỳ nơi nào khác trên trang (ngoại trừ dropdown-menu hoặc nút dropdown-toggle) để có trải nghiệm người dùng tốt hơn.

      // Vậy điều kiện này kiểm tra xem:

      // Nếu targetElement (element mà người dùng click) không nằm trong dropdown-menu (không là con của dropdown-menu) và cũng không nằm trong nút dropdown-toggle (không là con của nút này).
      // Khi điều kiện này đúng (nghĩa là người dùng click ra ngoài dropdown-menu và nút dropdown-toggle), thì setIsOpen(false) được gọi để đặt state "isOpen" thành false. Điều này sẽ khiến dropdown-menu bị ẩn đi.

      // Như vậy, khi bạn click bất kỳ nơi nào trên trang mà không phải là dropdown-menu hoặc nút dropdown-toggle, dropdown-menu sẽ tự động đóng.
      if (!targetElement.closest('.dropdown-menu') && !targetElement.closest('.dropdown-toggle')) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  }, []);
  /*
  Khi sử dụng hook useEffect trong React, truyền một mảng rỗng [] là một cách để chỉ định cho useEffect rằng bạn muốn nó chạy một lần duy nhất khi component được render lần đầu tiên và unmount (bị xóa khỏi DOM).

  Khi truyền một mảng rỗng [] vào useEffect, nó sẽ thực thi mã trong useEffect sau khi component đã render xong (componentDidMount), và nó sẽ xóa bỏ các hiệu ứng và listeners được thiết lập bởi useEffect khi component bị unmount (componentWillUnmount).
  */

  return (
    <div className='footer-language'>
      <button type='button' className='dropdown-toggle' onClick={toggleDropDown}>
        English
        <i className="icon fa-solid fa-caret-down"></i>
      </button>

      <div className={`dropdown-menu ${isOpen ? '' : 'hidden'}`}>
        <div className='lang__item'>
          English
        </div>

        <div className='lang__item'>
          Français
        </div>

        <div className='lang__item'>
          Deutsch
        </div>
      </div>
    </div>
  );
}

function DropDownMoney() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const targetElement = event.target;
      const dropdownToggleMoney = document.querySelector('.dropdown-toggle-money');

      if (!targetElement.closest('.dropdown-menu-money') && !targetElement.closest('.dropdown-toggle-money')) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    };
  }, []);

  return (
    <div className='footer-currency'>
      <button type='button' className='dropdown-toggle-money' onClick={toggleDropDown}>
        USD
        <i className="icon fa-solid fa-caret-down"></i>
      </button>

      <div className={`dropdown-menu-money ${isOpen ? '' : 'hidden'}`}>
        <div className='money__item'>
          USD
        </div>

        <div className='money__item'>
          EUR
        </div>

        <div className='money__item'>
          GBP
        </div>
      </div>
    </div>
  );
}

function HeaderTop() {
  return (
    <>
      <div className='header-top'>
        <div className='row'>
          <div className='header-contact'>

            <div className='item-contact'>
              <i className="icon-contact fa-solid fa-phone-volume"></i>
              <a href='tel:+0123-456-789'>+0123-456-789</a>
            </div>

            <div className='item-contact'>
              <i className="icon-contact fa-solid fa-envelope"></i>
              <a href='tel:+0123-456-789'>+0123-456-789</a>
            </div>
          </div>

          <div className='text-conent'>

            <strong>FREE SHIPPING FOR ORDER ABOVE $200. </strong>
            <a href='#'>
              <strong>SHOP NOW !</strong>
            </a>
          </div>

          <div className='header-infor'>

            <div className='item-contact'>
              <i className="icon-location fa-solid fa-location-dot"></i>
              15 West 21th Street, Miami FL, USA
            </div>

            <div className='header-cu-lang'>
              <DropDownMenu />

              <DropDownMoney />

            </div>
          </div>
        </div>

      </div>

      <div className='boder'></div>
    </>

  );
}

function HeaderNav() {
  return (
    <div className='header-list'>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <a id="home" className='nav-link' href='#'>HOME</a>
          </li>

          <li className='nav-list-item site-nav--fw'>
            <a className='nav-link nav-collections' href='#'>
              Collections
            </a>

            <div className='nav-dropdown--lv1 megaMenu'>
              <div className='site-nav__mega--content row-1'>
                <div className='row-2'>
                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Collection page
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection left sidebar</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection right sidebar</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection top sidebar</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection without sidebar</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection deals</a>
                      </li>
                    </ul>
                  </div>

                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Collection page
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection canvas on left</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection canvas on top</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection canvas on bottom</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Collection full width</a>
                      </li>
                    </ul>
                  </div>

                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Collection page
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Numbered Pagination</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Load More Button</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Infinity Scroll Load More</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='novMenuBanner'>
                  <img className='nav-header' src={navHeader} />
                </div>
              </div>
            </div>
          </li>

          <li className='nav-list-item site-nav--fw'>
            <a className='nav-link' href='#'>
              Products
            </a>

            <div className='nav-dropdown--lv1 megaMenu'>
              <div className='site-nav__mega--content row-1'>
                <div className='row-2'>
                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Product detail
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail default</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail  thumb left 1</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail thumb left 2</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail thumb right</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product deals coundown</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Detail Tab Accordion v1</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Detail Tab Accordion v2</a>
                      </li>
                    </ul>
                  </div>

                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Product detail
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail thumb grid 1</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail thumb grid 2</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail image scroll</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail image grid</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail image slider 1</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product detail image slider 2</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product 3D, AR models</a>
                      </li>
                    </ul>
                  </div>

                  <div className='col-4'>
                    <ul className='site-nav--MenuLinks'>
                      <li className='site-nav__link--title'>
                        <a href='#'>
                          Product features
                        </a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Video</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Pre-Order</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Variant Dropbox Style</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Variant Image Swatch</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Variant Pattern</a>
                      </li>

                      <li>
                        <a href='#' className='site-nav__link'>Product Sticky Add To Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='novMenuBanner'>
                  <div className='site-nav--title__product'>
                    <span className='text-uppercase--header'>Featured Product</span>
                  </div>

                  <div className='respone_image'>
                    <img width={'200px'} className='product__thumbnail' src={productImg} />
                  </div>

                  <div className='product__info'>
                    <div className='product__title'>
                      <a href='#'>High turtleneck jumper</a>
                    </div>

                    <div className='product__price'>
                      <span className='money'>$15.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className='nav-list-item nav--1'>
            <a className='nav-link' href='#'>Other pages</a>

            <div className='nav-dropdown--lv1 MenuDefault'>
              <ul className='other-list'>
                <li className='other-item'>
                  <a href='#'>404 Error</a>
                </li>

                <li className='other-item'>
                  <a href='#'>About Us</a>
                </li>

                <li className='other-item'>
                  <a href='#'>Contact Us</a>
                </li>

                <li className='other-item'>
                  <a href='#'>FAQs Page</a>
                </li>

                <li className='other-item'>
                  <a href='#'>Store Direction Page</a>
                </li>

                <li className='other-item'>
                  <a href='#'>Store Locations Page</a>
                </li>

                <li className='other-item'>
                  <a href='#'>Testimonials Page</a>
                </li>

                <li className='other-item'>
                  <a href='#'>Size Guide Page</a>
                </li>
              </ul>
            </div>
          </li>

          <li className='nav-list-item'>
            <a className='nav-link' href='#'>Blog</a>
          </li>
        </ul>
      </nav>

      <div className='logo'>
        <img src={image} />
      </div>

      <div className='header-group-item'>
        <div className='search__btn-overlay'>
          <i className="icon-header fa-solid fa-magnifying-glass"></i>
          <span className='header-text'>Search</span>
        </div>

        <div className='site-header_myaccount'>
          <i className="icon-header fa-regular fa-user"></i>
          <span className='header-text'>Accout</span>
        </div>

        <div className='header--wishlist'>
          <i className="icon-header fa-regular fa-heart"></i>
          <span className='header-text heart'>Wishlist</span>
          <span className='header-number'>0</span>
        </div>

        <div className='cart_canvas'>
          <i className="icon-header fa-solid fa-cart-shopping"></i>
          <span className='header-text cart'>Cart</span>
          <span className='header-Cart'>0</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <header className='header'>
      <HeaderTop />

      <HeaderNav />
    </header>
  );
}

export default App;
