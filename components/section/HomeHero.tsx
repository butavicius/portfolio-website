// react
import * as React from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Typography, useTheme } from '@mui/material';
// custom components
import CenterBox from 'components/common/CenterBox';
import TypingEffect from 'components/common/TypingEffect';
import ScrollDown from 'components/common/ScrollDown';
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    <CenterBox flexDirection="column">
      <Typography component="p" variant="h5" color="text.secondary">
        Hello, my name is
      </Typography>
      <Typography component="h1" variant="h2" fontWeight="bold" align="center">
        Simas Butavičius 
      </Typography>
      <Box color="text.secondary">
        <TypingEffect staticText="I am" text={['front-end dev', 'back-end dev', 'looking for a job :)']} />
      </Box>
      <ScrollDown
        color={info.main}
        onClick={() => router.push('/#about')}
        sx={{
          bottom: '10%',
          cursor: 'pointer',
          position: 'absolute',
        }}
      />
    </CenterBox>
  );
};

export default HomeHero;
