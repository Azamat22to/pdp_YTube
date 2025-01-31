import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ShowMoreRow } from './ShowMoreRow'
import { ShowLessRow } from './ShowLessRow'
import { SubHeading, SidebarMenuItem } from './FullWidthSidebar'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

export const SidebarSecondPart = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandMenu = () => {
    setIsExpanded(true)
  }
  const collapseMenu = () => {
    setIsExpanded(false)
  }
  return (
    <>
      <SubHeading>SUBSCRIPTIONS</SubHeading>
      <SubscriptionItem />
      {isExpanded ? (
        <>
          {[...Array(5)].map((_, index) => {
            return <SubscriptionItem key={`subscriptions-${index}`} />
          })}
          <ShowLessRow onClick={collapseMenu} />
        </>
      ) : (
        <ShowMoreRow onClick={expandMenu} />
      )}
    </>
  )
}

const SubscriptionItem = () => {
  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)
  return (
    <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
      <StyledListItemAvatar>
        <StyledAvatar src="https://yt3.ggpht.com/eCC-METHw9VDuS41kL4T5somaeSyJAkYNx3W3TSioVvpP1gNufa77FdUygXQ5eDDyy9t_Lhc1g=s88-c-k-c0x00ffffff-no-rj" />
      </StyledListItemAvatar>
      <ListItemText primary="azamat-coding" />
    </SidebarMenuItem>
  )
}

const StyledListItemAvatar = styled(ListItemAvatar)`
  && {
    min-width: 0;
    margin-right: 24px;
  }
`
const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
    background-image: url("https://yt3.ggpht.com/eCC-METHw9VDuS41kL4T5somaeSyJAkYNx3W3TSioVvpP1gNufa77FdUygXQ5eDDyy9t_Lhc1g=s88-c-k-c0x00ffffff-no-rj");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ef6c00;
  }
`
