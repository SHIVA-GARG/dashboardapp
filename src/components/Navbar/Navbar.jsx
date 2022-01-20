import './navbar.css';
import { Search, Person, ShoppingBag, Category, ChevronRight, HomeMaxOutlined, Devices, HealthAndSafety, ChildCare, CardGiftcard, PetsOutlined, AutoAwesomeMotion, ShoppingCartCheckout } from '@mui/icons-material';
import { TwoWheeler, MusicNote, LocalGroceryStore } from '@material-ui/icons'
const Navbar = () => {
    return (
        <div className="navBar">
            <div className="upperPart">
                <div className="logo">
                    bazar
                </div>
                <div className="searchArea">
                    <Search className='serachIcon' />
                    <input type="text" className="searchBar" placeholder='Searching for...' />
                    <div className="listget">
                        <div className="dropdown listItem pull-right">
                            <button className="dropdownItem btn btn-secondary dropdown-toggle buttonItem" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </button>
                            <ul className="dropdown-menu dropdownList list" aria-labelledby="dropdownMenuButton1">

                                <li><a className="dropdown-item " href="/">Car</a></li>
                                <li><a className="dropdown-item " href="/">Clothes</a></li>
                                <li><a className="dropdown-item " href="/">Electronics</a></li>
                                <li><a className="dropdown-item " href="/">Laptop</a></li>
                                <li><a className="dropdown-item " href="/">Desktop</a></li>
                                <li><a className="dropdown-item " href="/">Camera</a></li>
                                <li><a className="dropdown-item " href="/">Toys</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Icons">
                    <Person className='personIcon' />
                    <ShoppingBag />

                </div>
            </div>
            <div className="lowerpart">

                <div className="categoryArea">

                    {/* <p>Categories</p> */}
                    <div className="">
                        <div className="">
                            <button className="btn btn-secondary buttonArea" style={{ backgroundColor: "red" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <Category className="categoryIcon" />
                                Categories
                                <ChevronRight className="rightIcon" />
                            </button>
                            <ul className="dropdown-menu ulList" aria-labelledby="dropdownMenuButton1">

                                <li className='liItem'><a className="dropdown-item listItem" href="/"><ShoppingCartCheckout className="space" />Fashion</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><Devices className="space" />Electronics</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><TwoWheeler className="space" />Bikes</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><HomeMaxOutlined className="space" />Home&Garden</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><CardGiftcard className="space" />Gifts</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><MusicNote className="space" />Music</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><HealthAndSafety className="space" />Health & Beauty</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><PetsOutlined className="space" />Pets</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><ChildCare className="space" />Baby Toys</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><LocalGroceryStore className="space" />Groceries</a></li>
                                <li className='liItem'><a className="dropdown-item listItem" href="/"><AutoAwesomeMotion className="space" />Automotive</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <nav className="navbar navbar-expand-sm navbar-light justify-content-flex-end">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav navItems" >
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">Pages</a>
                                <a className="nav-item nav-link" href="#">User Account</a>
                                <a className="nav-item nav-link" href="#">Vendor Account</a>
                                <a className="nav-item nav-link" href="#">Back to Demos</a>
                                
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            {/* <Category />
                        <p> category</p>
                        <ChevronRightOutlined htmlColor='red' /> */}
        </div>
    );
}

export default Navbar;
