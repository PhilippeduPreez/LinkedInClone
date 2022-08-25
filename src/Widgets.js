import React from 'react';
import './Widgets.css';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordRoundedIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoRoundedIcon/>
        </div>
        {newsArticle("Fibre internet good for diet", "Top news - 8767 readers")}
        {newsArticle("The Aliens are here", "History channel - 5 readers")}
        {newsArticle("Joe Rogan change name to Roe Jogan", "Podcast news - 32342 readers")}
        {newsArticle("You CAN eat your cake and have it", "Food news - 3223 readers")}
        {newsArticle("Rick and Dorky makes comeback", "Spinoffs - 6464 readers")}
        {newsArticle("My Tesla can fly", "Fake news - 7886464 readers")}
    </div>
  )
}

export default Widgets