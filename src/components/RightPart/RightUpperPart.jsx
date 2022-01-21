import React from 'react';
import { AttachMoney,Folder} from '@material-ui/icons'

const Rightupperpart = () => {
    return (
        <div className='d-flex' style={{justifyContent:"space-between"}}>
            
            <div className="card " style={{margin:"0 10px",height:"110px",width:"300px"}}>
                <div class="card-body d-flex  flex-row " style={{justifyContent:"space-between"}}>
                    <div className="left" style={{flex:1}}>
                        <p style = {{fontSize:"12px",display:"flex"}}>TODAYS MONEY</p>
                        <h6 style={{paddingBottom:"20px"}}> <strong style={{marginBottom:"20px"}}>$24000</strong></h6>
                    </div>
                    <div className="rightright d-flex  justify-content-center" style={{flex:1}}>
                    <div className="right d-flex align-items-center justify-content-center" style={{marginLeft:"15px",backgroundColor:"blue",borderRadius:"5100%",height:"45px",width:"45px"}}>
                        <AttachMoney htmlColor='white'/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card " style={{margin:"0 10px",height:"110px",width:"300px"}}>
                <div class="card-body d-flex  flex-row " style={{justifyContent:"space-between"}}>
                    <div className="left" style={{flex:1}}>
                        <p style = {{fontSize:"12px",display:"flex"}}>NEW PROJECTS</p>
                        <h6 style={{paddingBottom:"20px"}}> <strong style={{marginBottom:"20px"}}>12</strong></h6>
                    </div>
                    <div className="rightright d-flex  justify-content-center" style={{flex:1}}>
                    <div className="right d-flex align-items-center justify-content-center" style={{marginLeft:"15px",backgroundColor:"blue",borderRadius:"5100%",height:"45px",width:"45px"}}>
                        <Folder htmlColor='white'/>  
                    </div>
                    </div>
                </div>
            </div>
            <div className="card " style={{margin:"0 10px",height:"110px",width:"300px"}}>
                <div class="card-body d-flex  flex-row " style={{justifyContent:"space-between"}}>
                    <div className="left" style={{flex:1}}>
                        <p style = {{fontSize:"12px",display:"flex"}}>SYSTEM HEALTH</p>
                        <h6 style={{paddingBottom:"20px"}}> <strong style={{marginBottom:"20px"}}>97%</strong></h6>
                    </div>
                   
                </div>
            </div>
            <div className="card " style={{margin:"0 10px",height:"110px",width:"300px",backgroundColor:"blue"}}>
                <div class="card-body d-flex  flex-row " style={{justifyContent:"space-between"}}>
                    <div className="left" style={{flex:1}}>
                        <p style = {{fontSize:"12px",display:"flex",color:"white"}}>ROI PER Customer</p>
                        <h6 style={{paddingBottom:"20px"}}> <strong style={{marginBottom:"20px",color:"white"}}>$25.50</strong></h6>
                    </div>
                    <div className="rightright d-flex  justify-content-center" style={{flex:1}}>
                    <div className="right d-flex align-items-center justify-content-center" style={{marginLeft:"15px",backgroundColor:"white",borderRadius:"5100%",height:"45px",width:"45px"}}>
                        <AttachMoney htmlColor='blue'/>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Rightupperpart;
