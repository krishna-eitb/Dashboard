import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignForm() {



  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

    
  return (
    <>
      <Stack spacing={3}>
      <TextField name="fname" label="Your FirstName" />
      <TextField name="lname" label="Your LastName" />
      <TextField name="email" label="Email address" />
      <TextField name="password" label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField name="empname" label="Your Employer Name" />
        <TextField name="emprole" label="Your Desigination" />


      </Stack>

      

      <LoadingButton fullWidth size="large" type="submit" variant="contained" >
        Submit
      </LoadingButton>
    </>
  );
}
