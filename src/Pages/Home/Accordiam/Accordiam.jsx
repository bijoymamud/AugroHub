import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Accordiam = () => {
  return (
    <div>

      <div className='text-center w-3/6 mx-auto mt-40'>

        {/* <div className='flex items-center justify-center '>
          <img className='mx-auto' src="https://themeholy.com/wordpress/frutin/wp-content/plugins/frutin-core/assets/img/title_icon.svg" alt="" />
          <span>Looking For Answers?</span>
        </div> */}

        <div className='w-3/6 ps-5 flex items-center mb-5 gap-5 mx-auto text-center'>

          <img src="https://themeholy.com/wordpress/frutin/wp-content/plugins/frutin-core/assets/img/title_icon.svg" alt="" />
          <h2 className='text-amber-600'>Looking For Answers ?</h2>

        </div>

        <h2 className='text-5xl mb-10 font-extrabold'>Frequently Asked Have Any <br /> Question?</h2>



      </div>


      <div className='w-3/6 container'>



        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className='text-2xl'>Do I need to be in when you deliver?</span>
          </AccordionSummary>
          <AccordionDetails className='text-xl text-gray-500'>
            Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span className='text-2xl'>Do I have to order every week?</span>
          </AccordionSummary>
          <AccordionDetails className='text-xl text-gray-500'>
            Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <span className='text-2xl'>  From its medieval origins the digital?</span>
          </AccordionSummary>
          <AccordionDetails className='text-xl text-gray-500'>
            Our organic farm, we begin with the foundation of healthy, nutrient-rich soil. We employ sustainable practice such as crop rotation cover cropping and composting. This helps maintain soil fertility.
          </AccordionDetails>
          <AccordionActions>

          </AccordionActions>
        </Accordion>
      </div>

    </div>
  );
};

export default Accordiam;