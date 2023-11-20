import React from 'react'
import TitleItemDropdown from '../TitleItemDropdown/TitleItemDropdown'

const TitlesDropdownsSectionContainer = ({title , subtitle}) => {
  return (
    <div className="py-3">
    <TitleItemDropdown
      padd={"py-0"}
      paddContainer={"py-0 truncate"}
      title={title}
    />
    <TitleItemDropdown
      padd={"py-0"}
      paddContainer={"py-0 truncate"}
      title={subtitle}
    />
</div>
  )
}

export default TitlesDropdownsSectionContainer