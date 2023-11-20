import { useAppSelector } from 'hooks/useAppSelector';
import * as React from 'react';

import DescriptionIcon from '@mui/icons-material/Description';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepConnector, {
  stepConnectorClasses
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import StepperMUI from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

import { createSelector } from 'redux/create/create.selector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(40deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,1) 100%)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(40deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,1) 100%)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#333',
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: 'transparent',
  zIndex: 1,
  color: '#333',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #333',
  backdropFilter: 'blur(5px)',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(40deg,rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,0.2) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    border: '1px solid #999',
    color: 'white'
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(40deg,rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%,rgba(255,255,255,0.2) 100%)',
    border: '1px solid white',
    color: 'white'
  })
}));

// eslint-disable-next-line react/no-multi-comp
const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <EditNoteIcon />,
    2: <DescriptionIcon />,
    3: <EditCalendarIcon />
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

const steps = ['Description', 'Variables for contract', 'Vesting'];

// eslint-disable-next-line react/no-multi-comp
const Stepper = () => {
  const createForm = useAppSelector(createSelector);
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <StepperMUI
        alternativeLabel
        activeStep={createForm.step ? createForm.step - 1 : 0}
        connector={<ColorlibConnector />}>
        {steps.map((label, i) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography
                color={createForm.step - 1 < i ? '#999' : 'white'}
                variant="body1">
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </StepperMUI>
    </Stack>
  );
};
export default Stepper;
