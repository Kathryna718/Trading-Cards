import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ResponsiveStack() {
    return (
        <Card>
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Mission</Item>
          <Item>Shop</Item>
          <Item>Claim Reward</Item>
        </Stack>
      </div>
      </Card>
    );
  }

  export default ResponsiveStack;
  
