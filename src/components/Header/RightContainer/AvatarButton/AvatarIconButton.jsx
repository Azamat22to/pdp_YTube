import React from 'react'
import styled from 'styled-components/macro'
import Avatar from '@material-ui/core/Avatar'
import { StyledIconButton, TWO_COL_MIN_WIDTH } from '../../../../utils/utils'

function AvatarIconButton({ setAnchorAvatarButton }) {
  return (
    <StyledIconButton
      onClick={(event) => setAnchorAvatarButton(event.currentTarget)}
    >
      <StyledAvatar src="https://yt3.ggpht.com/eCC-METHw9VDuS41kL4T5somaeSyJAkYNx3W3TSioVvpP1gNufa77FdUygXQ5eDDyy9t_Lhc1g=s88-c-k-c0x00ffffff-no-rj"/>
    </StyledIconButton>
  )
}

export default AvatarIconButton

const StyledAvatar = styled(Avatar)`
  && {
    width: 50px;
    height: 50px;
    font-size: 0.875rem;
    border-radius: 50%;
    // background-image: url("https://yt3.ggpht.com/eCC-METHw9VDuS41kL4T5somaeSyJAkYNx3W3TSioVvpP1gNufa77FdUygXQ5eDDyy9t_Lhc1g=s88-c-k-c0x00ffffff-no-rj");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 32px;
      height: 32px;
    }
  }
`
 