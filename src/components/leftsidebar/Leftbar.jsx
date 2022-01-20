import { Dashboard, Clock, History, BarChart, PersonAddAlt1, Redeem } from '@mui/icons-material';
import './leftbar.css';
import { CardTravelOutlined, ShoppingCart, Article, Person } from '@material-ui/icons'
import ArticleIcon from '@mui/icons-material/Article';
const Leftbar = () => {
    return (

        <div className='left_sidebar-mine wrapper'>
            <nav id="sidebar">
                <div class="sidebar-header">

                    <div className="circle"><div><Person className="personIcon" />
                        {/* <img src="../../assets/img/dashboard_app.jpeg" alt="nen image" className="profile" /> */}</div></div>
                    <p className="email">aryanmehta@gmail.com</p>
                    <p className="email">your tier:<span>Premium</span></p>
                </div>
                <hr />

                <div className="reportPart">

                    <ul className="list-unstyled CTAs">
                        Reports
                        <li>
                            <a href="/" className="download"><History />Dashboard</a>
                        </li>
                        <li>
                            <a href="/" className="download"><BarChart />Dashboard Alternative</a>
                        </li>

                    </ul>
                </div>

                <ul class="list-unstyled components">
                    Management
                    {/* <p className="reoprts">Reports</p> */}
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><PersonAddAlt1 />Customers</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">List Customers</a>
                            </li>
                            <li>
                                <a href="/">View Customer</a>
                            </li>
                            <li>
                                <a href="/">Edit Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><Redeem />Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <a href="/">Product 1</a>
                            </li>
                            <li>
                                <a href="/">Product 2</a>
                            </li>
                            <li>
                                <a href="/">Product 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#orderSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><ShoppingCart />Orders</a>
                        <ul className="collapse list-unstyled" id="orderSubmenu">
                            <li>
                                <a href="/">order 1</a>
                            </li>
                            <li>
                                <a href="/">order 2</a>
                            </li>
                            <li>
                                <a href="/">order 3</a>
                            </li>
                        </ul>
                    </li>

                    <li className="active">
                        <a href="#invoiceSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><ArticleIcon />Invoices</a>
                        <ul className="collapse list-unstyled" id="invoiceSubmenu">
                            <li>
                                <a href="/">invoice 1</a>
                            </li>
                            <li>
                                <a href="/">invoice 2</a>
                            </li>
                            <li>
                                <a href="/">invoice 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-unstyled components">
                    Applications
                    {/* <p className="reoprts">Reports</p> */}
                    <li className="active">
                        <a href="#projectSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Projects Platform</a>
                        <ul className="collapse list-unstyled" id="projectSubmenu">
                            <li>
                                <a href="/">Project Platfrom 1</a>
                            </li>
                            <li>
                                <a href="/">Project Platfrom 2</a>
                            </li>
                            <li>
                                <a href="/">Project Platfrom 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#socialSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Social Platform</a>
                        <ul className="collapse list-unstyled" id="socialSubmenu">
                            <li>
                                <a href="/">Social Platfrom 1</a>
                            </li>
                            <li>
                                <a href="/">Social Platfrom 2</a>
                            </li>
                            <li>
                                <a href="/">Social Platfrom 3</a>
                            </li>
                        </ul>
                    </li>

                </ul>

                <ul className="list-unstyled CTAs">
                    <li>
                        <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                    </li>
                    <li>
                        <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Leftbar;
