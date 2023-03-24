import React from 'react'
import image1 from "../../../assets/images/portfoliobackground2.png"
import "../portfoliobackground/portfoliobackground.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

 const PortfolioBackground2 = () => {
    const [value, setValue] = React.useState(0);


    function TabPanel(props) {
  
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
   <>
   <div className='wrapper_portfolio_background2'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 pt-5' >
                    <div className='portfolio_background2_img  text-center pt-5'>
                    <img src={image1} alt="no-image" width="403px" height="352px" />
                    </div>
                    
                </div>
                <div className='col-md-6 pt-5'>
                    <div className='pt-5'>
                    <Box sx={{ width: '100%' }} className="pt-5">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='text-black' label="Responsive " {...a11yProps(0)} />
          <Tab className='text-black' label="Creative " {...a11yProps(1)} />
          <Tab className='text-black' label="Trendy " {...a11yProps(2)} />
          <Tab className='text-black' label="Easy To Use " {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
       <p className='justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p className='justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
         Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
        vel illum dolore eu feugiat nulla facilisis at vero eros et2
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <p className='justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
         
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <p className='justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
     
        vel illum dolore eu feugiat nulla facilisis at vero eros e3
        </p>
      </TabPanel>
    </Box>
               

                    </div>                
                </div>
            </div>
        </div>
   </div>
   

   </>

  )
}

export default PortfolioBackground2