<<<<<<< HEAD
import { Dashboard,Clock,History, BarChart, PersonAddAlt1, Redeem } from '@mui/icons-material';
=======
import { History, BarChart,PersonAddAlt1, Redeem } from '@mui/icons-material';
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
import './leftbar.css';

const Leftbar = () => {
    return (
<<<<<<< HEAD
        
=======
        // <div className="uper"></div>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
        <div className='left_sidebar-mine wrapper'>
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                    <hr />
                </div>

                <div className="reportPart">

                    <ul className="list-unstyled CTAs">
                        Reports
                        <li>
<<<<<<< HEAD
                            <a href="#" className="download"><History/>Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="download"><BarChart/>Dashboard Alternative</a>
=======
                            <a href="/" className="download"><History/>Dashboard</a>
                        </li>
                        <li>
                            <a href="/" className="download"><BarChart/>Dashboard Alternative</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                        </li>

                    </ul>
                </div>

                <ul class="list-unstyled components">
                    Management
                    {/* <p className="reoprts">Reports</p> */}
                    <li className="active">
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><PersonAddAlt1/>Customers</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><PersonAddAlt1/>Customers</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
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
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><Redeem/>Products</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><Redeem/>Products</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">Product 1</a>
                            </li>
                            <li>
<<<<<<< HEAD
                                <a href="#">Product 2</a>
                            </li>
                            <li>
                                <a href="#">Product 3</a>
=======
                                <a href="/">Product 2</a>
                            </li>
                            <li>
                                <a href="/">Product 3</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                            </li>
                        </ul>
                    </li>
                    <li className="active">
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Orders</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">order 1</a>
                            </li>
                            <li>
                                <a href="#">order 2</a>
                            </li>
                            <li>
                                <a href="#">order 3</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Orders</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">order 1</a>
                            </li>
                            <li>
                                <a href="/">order 2</a>
                            </li>
                            <li>
                                <a href="/">order 3</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                            </li>
                        </ul>
                    </li>

                    <li className="active">
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Invoices</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">invoice 1</a>
                            </li>
                            <li>
                                <a href="#">invoice 2</a>
                            </li>
                            <li>
                                <a href="#">invoice 3</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Invoices</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">invoice 1</a>
                            </li>
                            <li>
                                <a href="/">invoice 2</a>
                            </li>
                            <li>
                                <a href="/">invoice 3</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-unstyled components">
                    Applications
                    {/* <p className="reoprts">Reports</p> */}
                    <li className="active">
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Projects Platform</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Project Platfrom 1</a>
                            </li>
                            <li>
                                <a href="#">Project Platfrom 2</a>
                            </li>
                            <li>
                                <a href="#">Project Platfrom 3</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Projects Platform</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">Project Platfrom 1</a>
                            </li>
                            <li>
                                <a href="/">Project Platfrom 2</a>
                            </li>
                            <li>
                                <a href="/">Project Platfrom 3</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
                            </li>
                        </ul>
                    </li>
                    <li className="active">
<<<<<<< HEAD
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Social Platform</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Social Platfrom 1</a>
                            </li>
                            <li>
                                <a href="#">Social Platfrom 2</a>
                            </li>
                            <li>
                                <a href="#">Social Platfrom 3</a>
=======
                        <a href="/homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Social Platform</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="/">Social Platfrom 1</a>
                            </li>
                            <li>
                                <a href="/">Social Platfrom 2</a>
                            </li>
                            <li>
                                <a href="/">Social Platfrom 3</a>
>>>>>>> faf66d0d9d80de822d1c23967a641be743edea4b
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
