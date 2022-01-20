import React from 'react';

const Rightpart = () => {
    
    return (
        <div>
            //react-echarts line chart demo
            <div style={{ width: '100%', height: 500 }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ height: '100%', width: '100%' }}
                    className=' react_for_echarts'

                     />
             </div>       
        </div>
    );
}

export default Rightpart;