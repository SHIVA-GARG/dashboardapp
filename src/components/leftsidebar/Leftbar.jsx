import './leftbar.css';

const Leftbar = () => {
    return (
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
                            <a href="#" className="download">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="download">Dashboard Alternative</a>
                        </li>

                    </ul>
                </div>
                
                <ul class="list-unstyled components">
                    Management
                    {/* <p className="reoprts">Reports</p> */}
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Customers</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">List Customers</a>
                            </li>
                            <li>
                                <a href="#">View Customer</a>
                            </li>
                            <li>
                                <a href="#">Edit Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Products</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Product 1</a>
                            </li>
                            <li>
                                <a href="#">Product 1</a>
                            </li>
                            <li>
                                <a href="#">Edit Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
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
