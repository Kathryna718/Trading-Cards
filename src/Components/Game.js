import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';





function ResponsiveStack() {
    return (
        
        
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {/* <Button>Mission</Button>
          <Button>Shop</Button>
          <Button>Claim</Button> */}
          
          <Button size="small ">Unlock</Button>
          <Button size="small ">View Player</Button>
          
        </Stack>
      </div>
      
    );
  }

  export default ResponsiveStack;
  
