import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    company: companyPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/images/baaahs-logo.svg'
              : '/images/baaahs-logo.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/events"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            events
          </Link>
        </Box>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <Link
            underline="none"
            component="a"
            href="/music"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            music
          </Link>
        </Box>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <Link
            underline="none"
            component="a"
            href="/fundraising"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            fundraising
          </Link>
        </Box>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            about
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'right'}>
        <Box>
          <NavItem
            title={'soundcloud'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'email'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/crew"
            size="large"
          >
            Crew login
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
