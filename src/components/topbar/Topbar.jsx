import './topbar.css'
// import {PhoneIcon} from "@material-ui/icons"
// import {PhoneIcon} from '@mui/icons-material'
import { Mail, ThreeDRotation, Search, Group } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Person, PersonAdd, Settings, NotificationsNone,AccountCircle } from '@material-ui/icons'
const Topbar = () => {
    return (
        <div className='topbar' style={{ height: "60px", marginBottom: "-30px" }}>

            <div className="companylogo">
                <div className="phoneContact">
                    {/* <PhoneIcon/> */}
                    <LocalPhoneIcon htmlColor='yellow' />
                    +91-9646565768
                </div>
                <div className="mailContact">
                    <Mail htmlColor='yellow' />
                    aryanmehta@gmail.com
                </div>
            </div>
            <div className="rightbar d-flex" style={{justifyContent:"space-between"}}>
                <div className="themes">
                    <Search style={{marginLeft:"10px"}}/>
                </div>
                <div className="needHelp">
                    <Group style={{marginLeft:"10px"}}/>
                </div>
                <div className="needHelp">
                    <NotificationsNone  style={{marginLeft:"10px"}}/>
                </div>
                <div className="needHelp">
                    <Settings  style={{marginLeft:"10px"}}/>
                </div>

                <div className='d-flex' style={{marginRight:"-10px"}}>
                    <AccountCircle
                        style={{
                            fontSize: "30px",
                            marginLeft:"10px",
                            color: "#c0c0c0",
                            // marginBlockEnd: "12px",
                        }}
                    />
                    <p style={{ margin: "0",color:"white" ,margin:"2px 0 0 5px"}}>demo@devias.io</p>
                    
                </div>
                {/* <div className="languageDropdown">
                    <div className="dropdown pull-right dropdown-left-manual">
                        <button className="dropdownItem btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            en
                        </button>

                        <ul className="dropdown-menu dropdownList dropdown-menu-right ulItems" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item dropdowitem" href="/">EN</a></li>
                            <li><a className="dropdown-item" href="/">BN</a></li>
                            <li><a className="dropdown-item" href="/">HN</a></li>
                        </ul>

                    </div>
                </div>
                <div className="country">
                    <div className="dropdown">
                        <button className="dropdownItem btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            USD
                        </button>
                        <ul className="dropdown-menu dropdownList ulItems" style={{left:"0px"} ,{right:"auto"}} aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item dropdowitem" href="/">USD</a></li>
                            <li><a className="dropdown-item" href="/">INR</a></li>
                            <li><a className="dropdown-item" href="/">EUR</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Topbar;
